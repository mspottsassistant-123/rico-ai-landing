import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, Apple } from 'lucide-react';

// Category color mapping
const categoryColors = {
  'Ingredients': 'bg-[#9CAF88] text-white',
  'Clean Beauty': 'bg-[#D4A574] text-white',
  'Skin Types': 'bg-[#2D4A3A] text-white',
};

function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (other posts excluding current)
  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

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
        {/* Back to Library */}
        <Link 
          to="/blog" 
          className="inline-flex items-center gap-2 text-rico-primary/70 hover:text-rico-sage transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          <span>Back to Library</span>
        </Link>

        {/* Article Header */}
        <header className="mb-10">
          {/* Category Tag */}
          <div className="mb-4">
            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${categoryColors[post.category] || 'bg-rico-sage text-white'}`}>
              {post.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-rico-primary mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-rico-primary/70">
            <div className="flex items-center gap-1.5">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <span className="font-medium">{post.author}</span>
            <span>•</span>
            <time dateTime={post.publishDate}>
              {new Date(post.publishDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {renderContent(post.content)}
        </div>

        {/* Rico AI CTA Card */}
        <div className="mt-12 p-8 bg-gradient-to-br from-[#9CAF88]/10 to-[#F7F3E9] rounded-3xl border-2 border-[#9CAF88]/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-rico-primary mb-3">
              Ready to decode your skincare?
            </h3>
            <p className="text-rico-primary/80 mb-6 max-w-xl mx-auto">
              Scan any product label with Rico AI and get instant ingredient analysis, safety scores, and personalized routine recommendations.
            </p>
            <a 
              href="https://apps.apple.com/us/app/rico-ai/id6738859392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:scale-105 transition-transform duration-200"
            >
              <img
                src="/images/app-store-badge.png"
                alt="Download on the App Store"
                className="h-14 w-auto mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Author Section */}
        <div className="mt-12 p-8 bg-white rounded-3xl shadow-sm border border-rico-border">
          <div className="flex items-start gap-6">
            <img
              src="/images/founder-zee.jpg"
              alt="Aranza Osorio"
              className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-rico-border"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-rico-primary mb-2">About {post.author}</h3>
              <p className="text-sm text-rico-primary/70 mb-3 font-medium">{post.authorCredentials}</p>
              <p className="text-rico-primary/80 leading-relaxed">
                Aranza founded Rico AI to help people decode skincare ingredient lists and find products that actually work for their skin. She combines evidence-based esthetician expertise with accessible technology to make clean, effective skincare simple.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-rico-primary mb-6">Continue Reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group block p-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-[#9CAF88]/30"
                >
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${categoryColors[relatedPost.category] || 'bg-rico-sage text-white'}`}>
                    {relatedPost.category}
                  </span>
                  <h3 className="font-bold text-lg text-rico-primary group-hover:text-[#9CAF88] transition-colors mb-2 leading-snug">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-rico-primary/60 flex items-center gap-1.5">
                    <Clock size={14} />
                    {relatedPost.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </div>
  );
}

export default BlogPost;
