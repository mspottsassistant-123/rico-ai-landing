import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, Sparkles } from 'lucide-react';

// Category color mapping
const categoryColors = {
  'Ingredients': 'bg-[#9CAF88] text-white',
  'Clean Beauty': 'bg-[#D4A574] text-white',
  'Skin Types': 'bg-[#2D4A3A] text-white',
};

function Blog() {
  return (
    <div className="min-h-screen bg-rico-bg pt-20 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F7F3E9] via-[#F7F3E9]/80 to-[#9CAF88]/10 py-16 mb-16">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-rico-primary/70 hover:text-rico-sage transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold text-rico-primary mb-6 tracking-tight">
            The Rico AI Library
          </h1>
          <p className="text-xl md:text-2xl text-rico-primary/80 max-w-3xl mx-auto leading-relaxed">
            Ingredient truths. Skin science. Written by a licensed esthetician.
          </p>
        </div>
      </div>

      {/* Post Cards Grid */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid gap-8">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id}
              className="group bg-white rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-[#9CAF88]/30 border-2 border-transparent transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* New Badge on First Post */}
              {index === 0 && (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-[#9CAF88] text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  <Sparkles size={12} />
                  New
                </div>
              )}

              {/* Category Tag */}
              <div className="mb-4">
                <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${categoryColors[post.category] || 'bg-rico-sage text-white'}`}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <Link to={`/blog/${post.slug}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-rico-primary mb-4 group-hover:text-[#9CAF88] transition-colors leading-tight">
                  {post.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="text-lg text-rico-primary/75 mb-6 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-rico-primary/60 mb-6">
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

              {/* Read More Button */}
              <Link 
                to={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-rico-sage text-white rounded-full font-semibold hover:bg-rico-primary transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Read Article
                <ArrowLeft size={16} className="rotate-180" />
              </Link>

              {/* Hover Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#9CAF88] to-[#D4A574] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
