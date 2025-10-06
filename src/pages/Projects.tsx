import { ExternalLink, Github, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'MediBot – AI Virtual Assistant',
      year: '2025',
      description:
        'Designed and developed a medical chatbot prototype that processes user health queries and provides instant medical support using NLP and Django.',
      technologies: ['Python', 'Django', 'NLP', 'Machine Learning'],
      highlights: [
        'Applied text preprocessing techniques and chatbot algorithms',
        'Simulates real-time medical interactions',
        'Deployed on Replit for seamless testing and demonstration'
      ],
      github: 'https://github.com/thiyagu200426/MedAssistPro-AI-virtual-assistance',
      demo: 'https://www.linkedin.com/posts/thiyagarajan-v-9b3b34373_ai-chatbot-healthcare-activity-7379898844140011520-TPgK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyJx5cBfFLQDzu2NCYO0ksUeNnAThTfg3w'
    },
    {
      title: 'Spatial Sound Scene Analysis',
      year: '2025',
      description:
        'Implemented an audio analysis system to detect and classify emergency sound sources using machine learning algorithms with automatic safety features.',
      technologies: ['Python', 'Machine Learning', 'Django REST Framework', 'React.js'],
      highlights: [
        'Detects and classifies emergency sound sources',
        'Automatically reduces device volume by 50% during critical alerts',
        'Performance tested and validated on Replit'
      ],
      github: 'https://github.com/thiyagu200426/spartial-sound-scene-analysis',
      demo: 'https://replit.com/@thiyagu200426'
    },
    {
      title: 'Online Organic Food Order System',
      year: '2022',
      description:
        'Built a complete full-stack e-Commerce web application to facilitate browsing, ordering, and delivery of organic products with optimized performance.',
      technologies: ['Django', 'React', 'MySQL', 'Django REST Framework'],
      highlights: [
        'Full-stack e-Commerce solution with secure payment integration',
        'Interactive user interface with React',
        'Optimized backend queries and efficient state management'
      ],
      github: 'https://github.com/thiyagu200426/online-organic-food-order',
      demo: 'https://www.linkedin.com/posts/thiyagarajan-v-9b3b34373_webdevelopment-python-reactjs-activity-7380955241401389056-vCMU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyJx5cBfFLQDzu2NCYO0ksUeNnAThTfg3w'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my work in AI, machine learning, and full-stack development
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={20} />
                    <span className="font-medium">{project.year}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                      <Github size={20} />
                      View on GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">More Projects Coming Soon</h2>
          <p className="text-xl text-gray-600 mb-8">
            I'm constantly working on new projects and exploring innovative technologies.
          </p>
          <a
            href="https://github.com/thiyagu200426"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg"
          >
            <Github size={24} />
            Visit My GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
