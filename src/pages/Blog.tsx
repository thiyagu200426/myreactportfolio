import { Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from '../router';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building AI-Powered Applications with Django and OpenAI',
      excerpt:
        'Learn how to integrate OpenAI APIs with Django to create intelligent applications. This guide covers authentication, API calls, and best practices for production deployment.',
      date: 'October 3, 2025',
      readTime: '8 min read',
      tags: ['AI', 'Django', 'OpenAI', 'Python'],
      slug: 'building-ai-powered-applications'
    },
    {
      id: 2,
      title: 'Understanding Natural Language Processing: A Beginner\'s Guide',
      excerpt:
        'Dive into the fundamentals of NLP, from tokenization to transformer models. Explore how machines understand and generate human language with practical examples.',
      date: 'September 28, 2025',
      readTime: '12 min read',
      tags: ['NLP', 'Machine Learning', 'AI', 'Python'],
      slug: 'understanding-nlp-beginners-guide'
    },
    {
      id: 3,
      title: 'React State Management: Context API vs Redux',
      excerpt:
        'A comprehensive comparison of state management solutions in React. Learn when to use Context API and when Redux is the better choice for your application.',
      date: 'September 22, 2025',
      readTime: '10 min read',
      tags: ['React', 'JavaScript', 'Web Development'],
      slug: 'react-state-management-comparison'
    },
    {
      id: 4,
      title: 'Optimizing Django REST API Performance',
      excerpt:
        'Practical tips and techniques to improve your Django REST Framework APIs. Cover database optimization, caching strategies, and query optimization.',
      date: 'September 15, 2025',
      readTime: '15 min read',
      tags: ['Django', 'REST API', 'Performance', 'Backend'],
      slug: 'optimizing-django-rest-api'
    },
    {
      id: 5,
      title: 'Prompt Engineering: Crafting Better AI Interactions',
      excerpt:
        'Master the art of prompt engineering to get better results from large language models. Learn techniques, patterns, and best practices with real examples.',
      date: 'September 10, 2025',
      readTime: '9 min read',
      tags: ['AI', 'LLM', 'Prompt Engineering', 'ChatGPT'],
      slug: 'prompt-engineering-guide'
    },
    {
      id: 6,
      title: 'Full Stack Development: My Journey and Learnings',
      excerpt:
        'Reflections on my journey as a full-stack developer. Key lessons learned, challenges overcome, and advice for aspiring developers starting their journey.',
      date: 'September 5, 2025',
      readTime: '7 min read',
      tags: ['Career', 'Full Stack', 'Learning', 'Development'],
      slug: 'full-stack-development-journey'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thoughts on AI, web development, and everything in between
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium border border-blue-200"
                    >
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            I regularly share insights about AI, web development, and software engineering.
            More articles coming soon!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Upcoming: Docker for Django Developers
            </span>
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Upcoming: Building RAG Systems
            </span>
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Upcoming: React Best Practices 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
