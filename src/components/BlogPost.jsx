import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, User } from 'lucide-react';

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Simple markdown-like rendering
  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inList = false;
    let listItems = [];

    const processLine = (line, index) => {
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-bold text-rico-primary mt-8 mb-4">{line.slice(4)}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-rico-primary mt-10 mb-4">{line.slice(3)}</h2>;
      }
      
      // List items
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*(.*)$/);
        if (match) {
          return (
            <li key={index} className="mb-2">
              <strong className="text-rico-primary">{match[1]}</strong>
              {match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="mb-2">{formatInlineText(line.slice(2))}</li>;
      }

      // Bold text on its own line
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={index} className="font-bold text-rico-primary my-4">{line.slice(2, -2)}</p>;
      }

      // Empty line
      if (line.trim() === '') {
        return null;
      }

      // Regular paragraph
      return <p key={index} className="text-rico-primary/90 leading-relaxed mb-4">{formatInlineText(line)}</p>;
    };

    const formatInlineText = (text) => {
      // Handle bold, italic, and links
      const parts = [];
      let remaining = text;
      let key = 0;

      while (remaining.length > 0) {
        // Check for links
        const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (linkMatch) {
          const beforeLink = remaining.slice(0, linkMatch.index);
          if (beforeLink) {
            parts.push(<span key={key++}>{formatBoldItalic(beforeLink)}</span>);
          }
          parts.push(
            <a 
              key={key++} 
              href={linkMatch[2]} 
              className="text-rico-sage hover:text-rico-primary underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkMatch[1]}
            </a>
          );
          remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
        } else {
          parts.push(<span key={key++}>{formatBoldItalic(remaining)}</span>);
          break;
        }
      }

      return parts;
    };

    const formatBoldItalic = (text) => {
      // Simple bold/italic handling
      return text
        .split(/(\*\*[^*]+\*\*|\*[^*]+\*)/)
        .map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="text-rico-primary">{part.slice(2, -2)}</strong>;
          }
          if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={i}>{part.slice(1, -1)}</em>;
          }
          return part;
        });
    };

    // Group list items
    let currentElements = [];
    let currentListItems = [];

    lines.forEach((line, index) => {
      if (line.startsWith('- ')) {
        currentListItems.push(processLine(line, index));
      } else {
        if (currentListItems.length > 0) {
          currentElements.push(
            <ul key={`list-${index}`} className="list-disc list-inside ml-4 mb-6 text-rico-primary/90">
              {currentListItems}
            </ul>
          );
          currentListItems = [];
        }
        const element = processLine(line, index);
        if (element) {
          currentElements.push(element);
        }
      }
    });

    // Don't forget trailing list
    if (currentListItems.length > 0) {
      currentElements.push(
        <ul key="list-final" className="list-disc list-inside ml-4 mb-6 text-rico-primary/90">
          {currentListItems}
        </ul>
      );
    }

    return currentElements;
  };

  return (
    <div className="min-h-screen bg-rico-bg pt-20 pb-16">
      <article className="max-w-3xl mx-auto px-4">
        {/* Back to Blog */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-rico-primary hover:text-rico-sage transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Blog</span>
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rico-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-rico-primary/70">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{post.author}</span>
            </div>
            <span>•</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Author Box */}
        <div className="mt-12 p-6 bg-white rounded-2xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-rico-sage rounded-full flex items-center justify-center text-white text-2xl font-bold">
              A
            </div>
            <div>
              <h3 className="font-bold text-rico-primary mb-1">About the Author</h3>
              <p className="text-rico-primary/80 text-sm mb-3">
                Aranza Osorio is a licensed esthetician (CA/CO) and IIN-certified health coach. 
                She founded Rico AI to help people decode skincare ingredient lists and find products 
                that actually work for their skin.
              </p>
              <a 
                href="https://apps.apple.com/us/app/rico-ai/id6738859392"
                className="inline-block px-5 py-2 bg-rico-sage text-white rounded-full text-sm font-medium hover:bg-rico-primary transition-colors"
              >
                Try Rico AI Free
              </a>
            </div>
          </div>
        </div>

        {/* More Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-rico-primary mb-6">More Articles</h2>
          <div className="grid gap-4">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((relatedPost) => (
              <Link 
                key={relatedPost.id}
                to={`/blog/${relatedPost.slug}`}
                className="block p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-rico-primary hover:text-rico-sage transition-colors">
                  {relatedPost.title}
                </h3>
                <p className="text-sm text-rico-primary/60 mt-1">{relatedPost.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
