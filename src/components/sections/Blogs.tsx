"use client";

import { BookOpen, Calendar, ArrowRight, Tag } from 'lucide-react';

export default function Blogs() {
  const blogs = [
    {
      title: 'Building AI-Powered Applications with LangChain and Flask',
      excerpt: 'A comprehensive guide to integrating LangChain with Flask to create intelligent applications that leverage large language models.',
      date: 'December 15, 2024',
      readTime: '8 min read',
      tags: ['AI', 'Python', 'LangChain'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    },
    {
      title: 'Optimizing React Applications for Performance',
      excerpt: 'Learn advanced techniques for improving React app performance, including code splitting, lazy loading, and memoization strategies.',
      date: 'November 28, 2024',
      readTime: '6 min read',
      tags: ['React', 'JavaScript', 'Performance'],
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    },
    {
      title: 'PostgreSQL Performance Tuning: Best Practices',
      excerpt: 'Discover essential PostgreSQL optimization techniques, indexing strategies, and query optimization methods for better database performance.',
      date: 'November 10, 2024',
      readTime: '10 min read',
      tags: ['Database', 'PostgreSQL', 'Backend'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&q=80',
    },
    {
      title: 'Getting Started with Machine Learning in Python',
      excerpt: 'A beginner-friendly introduction to machine learning concepts and implementing your first ML model using scikit-learn.',
      date: 'October 22, 2024',
      readTime: '7 min read',
      tags: ['Machine Learning', 'Python', 'Tutorial'],
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&q=80',
    },
  ];

  return (
    <section id="blogs" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Blogs
          </h2>
          <p className="text-gray-400 text-lg">
            Sharing knowledge and insights from my journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group relative bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/5 hover:border-white/20 hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>
              
              {/* Blog Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              </div>

              <div className="relative p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {blog.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {blog.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {blog.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-blue-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
}