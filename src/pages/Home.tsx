import { ArrowRight, Code, Database, Brain } from 'lucide-react';
import { Link } from '../router';
import { FaGithub, FaLinkedin, FaMedium, FaInstagram, FaXTwitter, FaDev, FaStackOverflow, FaThreads } from "react-icons/fa6";


export default function Home() {
  return (

    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-blue-600">Thiyagarajan</span>
              </h1>
              <p className="text-xl text-gray-600">
                Aspiring AI Engineer & Python Full Stack Developer
              </p>
              <p className="text-lg text-gray-600">
                Passionate about building AI-powered solutions with Django, React, and Machine Learning.
                Currently exploring NLP, LLMs, and Prompt Engineering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  View Projects
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src={`${import.meta.env.BASE_URL}images/1pro.jpg`}
                  alt="Thiyagarajan V"
                  className="relative w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Code className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Full Stack Development
              </h3>
              <p className="text-gray-600">
                Building scalable web applications using Django, React, and modern web technologies.
                Expertise in RESTful APIs and responsive design.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI & Machine Learning
              </h3>
              <p className="text-gray-600">
                Developing AI-powered solutions with NLP, LLMs (ChatGPT, Gemini), and integrating APIs
                from OpenAI and Hugging Face.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Database className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Database Design
              </h3>
              <p className="text-gray-600">
                Proficient in MySQL, SQLite, and MongoDB. Designing efficient database schemas and
                optimizing queries for performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            explore my profiles here 👇
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">

            {/* GitHub */}
            <a
              href="https://github.com/thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center">
                <FaGithub className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">GitHub</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/thiyagarajan-v-9b3b34373/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <FaLinkedin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">LinkedIn</h3>
                <p className="text-sm text-gray-600">Thiyagarajan V</p>
              </div>
            </a>

            {/* Medium */}
            <a
              href="https://medium.com/@thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <FaMedium className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Medium</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <FaInstagram className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Instagram</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* X (Twitter) */}
            <a
              href="https://x.com/thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <FaXTwitter className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">X</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* Dev.to */}
            <a
              href="https://dev.to/thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                <FaDev className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Dev.to</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* Stack Overflow */}
            <a
              href="https://meta.stackoverflow.com/users/31647359/thiyagarajan-varadharajan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <FaStackOverflow className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Stack Overflow</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>

            {/* Threads */}
            <a
              href="https://www.threads.net/@thiyagu26v"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-200 w-full max-w-xs"
            >
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <FaThreads className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Threads</h3>
                <p className="text-sm text-gray-600">@thiyagu26v</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always excited to work on innovative projects and collaborate with like-minded developers.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Get In Touch
            <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
}
