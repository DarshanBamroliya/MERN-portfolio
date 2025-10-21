'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack Development",
    description: "A modern e-commerce solution built with MERN stack featuring real-time inventory management and payment integration.",
    image: "/img/project1.jpg"
  },
  {
    id: 2,
    title: "Task Management App",
    category: "React Development",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/img/project2.jpg"
  },
  {
    id: 3,
    title: "Portfolio Website",
    category: "Next.js Development",
    description: "Responsive portfolio website with custom animations, dark mode, and optimized performance for showcasing creative work.",
    image: "/img/project3.jpg"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    category: "Data Visualization",
    description: "Analytics dashboard for social media management with interactive charts, real-time data, and comprehensive reporting tools.",
    image: "/img/project4.jpg"
  },
  {
    id: 5,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description: "Secure mobile banking application with biometric authentication, transaction history, and seamless user experience.",
    image: "/img/project5.jpg"
  },
  {
    id: 6,
    title: "AI Chat Assistant",
    category: "Machine Learning",
    description: "Intelligent chatbot with natural language processing capabilities, context awareness, and multi-language support.",
    image: "/img/project6.jpg"
  }
];

function SelectedProjects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-black mb-4 tracking-tight">
            SELECTED
            <br />
            <span className="text-gray-600">PROJECTS</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image Placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-50"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-gray-400">
                    {project.id.toString().padStart(2, '0')}
                  </div>
                </div>
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-all duration-300">
                    <div className="text-white text-sm font-medium px-3 py-1 bg-black bg-opacity-50 rounded-full">
                      View Project
                    </div>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black group-hover:text-gray-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {project.category}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 border border-black text-black font-medium rounded-full hover:bg-black hover:text-white transition-all duration-300 group">
            <span>View all projects</span>
            <svg 
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default SelectedProjects;
