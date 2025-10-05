import { Award, ExternalLink, Download } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Scientific Computing with Python',
      issuer: 'freeCodeCamp',
      date: 'September 2025',
      hours: '300 hours of work',
      image: '/images/SCIENTIFIC PROGR..PYTHON.png',
      certificate: '/documents/thiyagarajan_varadharajan_resume.pdf',
      description:
        'Comprehensive certification covering Python fundamentals, data structures, algorithms, and scientific computing libraries.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Scientific Computing']
    },
    {
      title: 'Become a Django Developer',
      issuer: 'LinkedIn Learning',
      date: 'September 2025',
      hours: '9 hours 17 minutes',
      image: null,
      certificate: '/documents/CertificateOfCompletion_Become a Django Developer.pdf',
      description:
        'Complete learning path covering Django framework, MVT architecture, ORM, REST APIs, and deployment strategies.',
      skills: ['Django', 'Python', 'REST APIs', 'Web Development']
    },
    {
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      date: '2025',
      hours: null,
      image: '/images/gen ai cert.png',
      certificate: null,
      description:
        'Advanced certification in Generative AI covering LLMs, prompt engineering, and AI application development.',
      skills: ['Generative AI', 'LLMs', 'Prompt Engineering', 'AI Development']
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <Award className="text-blue-600" size={40} />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Certifications</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional certifications demonstrating my commitment to continuous learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100"
            >
              {cert.image && (
                <div className="bg-gray-100 p-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-64 object-contain"
                  />
                </div>
              )}

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 flex-1">{cert.title}</h2>
                </div>

                <div className="space-y-2 mb-4">
                  <p className="text-lg font-semibold text-blue-600">{cert.issuer}</p>
                  <p className="text-gray-600">{cert.date}</p>
                  {cert.hours && (
                    <p className="text-gray-600 text-sm">Duration: {cert.hours}</p>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">{cert.description}</p>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Skills Covered</h3>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.certificate && (
                  <div className="flex gap-3">
                    <a
                      href={cert.certificate}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                    <a
                      href={cert.certificate}
                      download
                      className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors font-medium text-sm"
                    >
                      <Download size={16} />
                      Download
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Continuous Learning Journey
          </h2>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            I'm committed to staying updated with the latest technologies and best practices.
            Currently exploring advanced AI concepts, cloud architecture, and modern development frameworks.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Next: Advanced NLP Specialization
            </span>
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Next: AWS Solutions Architect
            </span>
            <span className="px-6 py-3 bg-white rounded-lg shadow-md font-medium text-gray-800">
              Next: Kubernetes Certification
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
