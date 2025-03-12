import React from 'react';

export default function Skills() {
    const skills = [
      "MERN Stack (MongoDB, Express.js, React, Node.js)",
      "AWS (EC2, S3, Lambda)",
      "PostgreSQL",
      "MongoDB",
      "TypeScript",
      "Tailwind CSS",
    ];
  
    return (
      <section id="skills" className="space-y-4">
        <h2 className="text-3xl font-semibold text-teal-400">Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <li key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    );
  }