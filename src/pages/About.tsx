import { GraduationCap, Award, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A passionate developer dedicated to creating innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <img
              src="/images/1pro.jpg"
              alt="Thiyagarajan V"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Professional Summary</h2>
            <p className="text-gray-600 leading-relaxed">
              Results-oriented Python developer with strong knowledge in back-end and full stack application
              development using Django, React, and MySQL. Passionate about building AI-powered solutions,
              currently learning Natural Language Processing (NLP), Large Language Models (ChatGPT, Gemini),
              API integration (OpenAI, Hugging Face), and prompt engineering.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Proficient in RESTful APIs, cloud deployment, data pre-processing, and debugging. Dedicated
              to delivering scalable, efficient, and user-friendly software solutions.
            </p>

            <div className="pt-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Chennai, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="text-green-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Experience</h3>
                  <p className="text-gray-600">Full Stack Developer specializing in Python & AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-600" size={36} />
            Education
          </h2>

          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Bachelor of Engineering in Computer Science
                </h3>
                <span className="text-gray-600 font-medium">May 2022 – June 2025</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">T.J Institute of Technology</p>
              <p className="text-gray-600">CGPA: 7.5/10.0</p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Diploma in Computer Engineering
                </h3>
                <span className="text-gray-600 font-medium">Sep 2019 – April 2022</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">Srinivasa Subbaraya Government College</p>
              <p className="text-gray-600">CGPA: 7.3/10.0</p>
            </div>

            <div className="border-l-4 border-orange-600 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">
                  Secondary School Certificate
                </h3>
                <span className="text-gray-600 font-medium">May 2019</span>
              </div>
              <p className="text-gray-700 font-medium mb-1">
                Jawahar Matriculation Higher Secondary School
              </p>
              <p className="text-gray-600">Percentage: 73%</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Coding Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://geeksforgeeks.org/user/thiyagu205r3d"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">GeeksForGeeks</h3>
              <p className="text-blue-600 hover:underline">@thiyagu205r3d</p>
            </a>

            <a
              href="https://hackerrank.com/profile/thiyagu2004nanni"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">HackerRank</h3>
              <p className="text-green-600 hover:underline">@thiyagu2004nanni</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
