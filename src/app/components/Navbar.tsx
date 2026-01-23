import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link href="/">ZA</Link>
        </div>
        <div className="flex items-center">
          <Link href="/about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
          <a href="/hire-me" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hire-me">
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
