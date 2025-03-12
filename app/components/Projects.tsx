import React from "react";

export default function Projects() {
    const projects = [
      {
        title: "E-commerce Platform",
        desc: "A scalable MERN app with AWS S3 for image storage and PostgreSQL for data management.",
        link: "https://github.com/[your-username]/ecommerce",
      },
      {
        title: "SaaS Dashboard",
        desc: "A React + Node.js dashboard hosted on AWS EC2 with MongoDB integration.",
        link: "https://github.com/[your-username]/saas-dashboard",
      },
    ];
  
    return (
      <section id="projects" className="space-y-4">
        <h2 className="text-3xl font-semibold text-teal-400">Projects</h2>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-gray-300">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-teal-400 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }

  