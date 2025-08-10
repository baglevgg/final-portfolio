import React from 'react';

const projects = [
  {
    name: 'ConnX.in',
    description: 'A video-based freelance platform where freelancers can showcase their work through short videos, making it easier for clients to discover and hire them.',
    features: [
      'Freelancers upload short video portfolios',
      'Clients can directly connect from posts',
      'Video engagement boosts visibility for freshers',
      'Secure in-app messaging & hiring process',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase', 'Node.js', 'WebRTC'],
    link: 'https://connx.in', // Replace with actual project link
  },
  {
    name: 'Campus Reveal',
    description: 'An anonymous college review platform where students can share their experiences and opinions without revealing their identity.',
    features: [
      'Users can post college reviews anonymously',
      'Secure and spam-free environment',
      'Real-time upvotes and comments',
      'Helps prospective students make informed decisions',
    ],
    techStack: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://campusreveal.vercel.app',
  },
  {
    name: 'AnnouncePro',
    description: 'A Python-based automated announcement management system that delivers announcements accurately and runs 24/7.',
    features: [
      'Automates university-wide announcements',
      'Runs continuously 24x7 without manual intervention',
      'Scheduled notifications and real-time updates',
      'Desktop-based application with intuitive UI',
    ],
    techStack: ['Python', 'Tkinter', 'SQLite', 'Windows Services'],
    link: 'https://announcepro.vercel.app/',
  },
  {
    name: 'Recommender System',
    description: 'An AI-powered content-based recommendation system that suggests relevant content based on user behavior and interests.',
    features: [
      'Uses NLP techniques for content analysis',
      'TF-IDF vectorization for similarity computation',
      'User-friendly interface built with Streamlit',
      'Predicts recommendations based on user preferences',
    ],
    techStack: ['Python', 'TensorFlow', 'Flask', 'Streamlit'],
    link: 'https://github.com/amitkumar2308/Content-based-recommendation',
  },
];

const Project = () => {
  return (
    <div className="bg-gray-50 py-20 px-10 lg:px-32 min-h-screen">
      <h1 className="text-5xl font-bold text-gray-900 text-center mb-16">
        <span className="border-b-4 border-purple-500 pb-2">My Projects</span>
      </h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:scale-105 transition duration-300">
            <h2 className="text-2xl font-semibold text-gray-800">{project.name}</h2>
            <p className="text-gray-700 mt-2">{project.description}</p>
            {project.features && (
              <ul className="mt-3 text-gray-600 list-disc list-inside">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            )}
            <div className="mt-3">
              <strong className="text-gray-800">Tech Stack:</strong>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.techStack.map((tech, i) => (
                  <li key={i} className="bg-purple-100 text-purple-800 px-3 py-1 text-sm rounded-md">{tech}</li>
                ))}
              </ul>
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-purple-600 font-medium hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
