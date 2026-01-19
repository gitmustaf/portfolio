import React from "react";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeCanvas from "./components/ThreeCanvas";

export default function Home() {
  return (
    <div className="relative">
      <ThreeCanvas /> {/* Background animation */}
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 space-y-16">
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}
