import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock } from 'lucide-react';

function Blog() {
  return (
    <div className="min-h-screen bg-rico-bg pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back to Home */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-rico-primary hover:text-rico-sage transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-rico-primary mb-4">
            Skincare Insights
          </h1>
          <p className="text-lg text-rico-primary/80">
            Evidence-backed skincare education from a licensed esthetician
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-2xl md:text-3xl font-bold text-rico-primary mb-3 hover:text-rico-sage transition-colors">
                  {post.title}
                </h2>
              </Link>
              
              <div className="flex items-center gap-4 text-sm text-rico-primary/60 mb-4">
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

              <p className="text-rico-primary/80 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              <Link 
                to={`/blog/${post.slug}`}
                className="inline-block px-6 py-3 bg-rico-sage text-white rounded-full font-medium hover:bg-rico-primary transition-colors"
              >
                Read Article
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
