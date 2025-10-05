import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import { Link } from '../router';

export default function BlogPost() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <article className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <div className="flex flex-wrap gap-2 mb-6">
            {['AI', 'Django', 'OpenAI', 'Python'].map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Building AI-Powered Applications with Django and OpenAI
          </h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>October 3, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>8 min read</span>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Artificial Intelligence is transforming the way we build web applications. In this comprehensive
              guide, I'll walk you through integrating OpenAI's powerful APIs with Django to create intelligent,
              AI-powered applications.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Why Django and OpenAI?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Django provides a robust, batteries-included framework perfect for building scalable web applications.
              When combined with OpenAI's APIs, you can add intelligent features like natural language processing,
              content generation, and conversational interfaces to your applications.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Getting Started</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Before diving into the implementation, you'll need to set up your Django project and obtain an OpenAI
              API key. This article assumes you have basic knowledge of Django and Python.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
              <p className="text-gray-800 font-medium">
                <strong>Pro Tip:</strong> Always keep your API keys secure and never commit them to version control.
                Use environment variables or Django's settings for sensitive information.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Implementation Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The integration process involves several key steps: setting up authentication, making API calls,
              handling responses, and implementing error handling. Each step is crucial for building a production-ready
              application.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Best Practices</h2>
            <ul className="space-y-3 mb-6 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Implement rate limiting to avoid exceeding API quotas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Cache responses when appropriate to reduce costs and improve performance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Handle errors gracefully and provide meaningful feedback to users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                <span>Monitor API usage and costs regularly</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-4">Conclusion</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Integrating OpenAI with Django opens up endless possibilities for building intelligent applications.
              Whether you're creating chatbots, content generators, or analysis tools, the combination of Django's
              robust framework and OpenAI's powerful AI capabilities provides an excellent foundation.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Stay tuned for more detailed tutorials on specific use cases and advanced patterns!
            </p>
          </div>
        </article>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Enjoyed this article?</h2>
          <p className="text-gray-600 mb-6">
            Check out more articles on AI, web development, and software engineering.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </div>
  );
}
