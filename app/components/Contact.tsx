import React from "react";

export default function Contact() {
    return (
      <section id="contact" className="space-y-4 text-center">
        <h2 className="text-3xl font-semibold text-teal-400">Contact Me</h2>
        <p className="text-gray-300">
          Email: [your-email@example.com] | LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/[your-profile]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline"
          >
            [Your Profile]
          </a>
        </p>
      </section>
    );
  }
