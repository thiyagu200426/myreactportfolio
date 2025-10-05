import { Code, Database, Cloud, Brain, Wrench, Cpu } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'blue',
      skills: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: Cpu,
      color: 'green',
      skills: [
        { name: 'Django', level: 90 },
        { name: 'Flask', level: 80 },
        { name: 'Django REST Framework', level: 85 },
        { name: 'React (Vite)', level: 85 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'orange',
      skills: [
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 80 },
        { name: 'MongoDB', level: 75 }
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'purple',
      skills: [
        { name: 'Natural Language Processing', level: 75 },
        { name: 'Large Language Models', level: 70 },
        { name: 'Prompt Engineering', level: 75 },
        { name: 'OpenAI API', level: 70 },
        { name: 'Hugging Face', level: 65 },
        { name: 'LangChain', level: 60 }
      ]
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      color: 'red',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'Postman', level: 85 },
        { name: 'Replit', level: 80 }
      ]
    },
    {
      title: 'Cloud & Deployment',
      icon: Cloud,
      color: 'teal',
      skills: [
        { name: 'Heroku', level: 75 },
        { name: 'AWS (Basics)', level: 60 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string; progress: string }> = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', progress: 'bg-blue-600' },
      green: { bg: 'bg-green-100', text: 'text-green-600', progress: 'bg-green-600' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', progress: 'bg-orange-600' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', progress: 'bg-purple-600' },
      red: { bg: 'bg-red-100', text: 'text-red-600', progress: 'bg-red-600' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', progress: 'bg-teal-600' }
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Technical Skills</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 ${colors.bg} rounded-lg flex items-center justify-center`}>
                    <Icon className={colors.text} size={28} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="font-semibold text-gray-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`${colors.progress} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Practices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'RESTful API Development',
              'Unit Testing',
              'Debugging',
              'Object-Oriented Programming',
              'MVT Architecture',
              'Data Structures & Algorithms',
              'Version Control (Git)',
              'Agile Methodology',
              'Code Review'
            ].map((practice, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium text-gray-800">{practice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center bg-white rounded-2xl shadow-xl p-12 border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Currently Learning
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {[
              'Advanced NLP',
              'Transformer Models',
              'Vector Databases',
              'RAG Systems',
              'Fine-tuning LLMs',
              'Kubernetes',
              'GraphQL'
            ].map((item, index) => (
              <span
                key={index}
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
