// @flow strict
import Link from "next/link";


function Navbar() {
  return (
    <nav className="bg-transparent fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-slate-900/80">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex flex-shrink-0 items-center">
            <Link
              href="/"
              className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-2xl lg:text-3xl font-bold hover:from-cyan-300 hover:to-blue-300 transition-all duration-300">
              Abhinash Kumar
            </Link>
          </div>

          <ul className="hidden md:flex md:space-x-1" id="navbar-default">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 hover:bg-slate-800/50" href="/#about">
                <div className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400">ABOUT</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 hover:bg-slate-800/50" href="/#experience">
                <div className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-cyan-400">EXPERIENCE</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 hover:bg-slate-800/50" href="/#skills">
                <div className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-green-400">SKILLS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 hover:bg-slate-800/50" href="/#projects">
                <div className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-orange-400">PROJECTS</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline rounded-lg transition-all duration-300 hover:bg-slate-800/50" href="/#education">
                <div className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-indigo-400">EDUCATION</div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
