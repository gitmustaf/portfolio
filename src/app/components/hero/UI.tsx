const UI = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white">
      <div className="glass-capsule mb-4">
        <p>Available for opportunities</p>
      </div>
      <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Mustaf Hussain
      </h1>
      <p className="text-2xl mt-4">Software Engineer | Full Stack Developer</p>
      <div className="flex space-x-4 mt-8">
        <a href="mailto:mustafhussaincse1@gmail.com">mustafhussaincse1@gmail.com</a>
        <a href="tel:+918972427110">+918972427110</a>
        <a href="https://www.linkedin.com/in/mustafhussain/">LinkedIn</a>
        <a href="https://github.com/gitmustaf">GitHub</a>
      </div>
      <a href="/projects" className="mt-8 bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-500 hover:to-pink-700">
        View Projects
      </a>
    </div>
  );
};

export default UI;
