export default function TopHeader() {
    return (
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
        <nav className="max-w-7xl mx-auto p-5 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-900">
            <a href="#home" className="hover:text-orange-400 transition-colors">ADC-Portfolio</a>
          </div>
          <ul className="hidden md:flex space-x-12 text-lg">
            <li>
              <a href="#home" className="text-gray-700 font-semibold hover:text-orange-400 transition">Home</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 font-semibold hover:text-orange-400 transition">About</a>
            </li>
            <li>
              <a href="#works" className="text-gray-700 font-semibold hover:text-orange-400 transition">Works</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-700 font-semibold hover:text-orange-400 transition">Contact</a>
            </li>
          </ul>
          <div className="md:hidden">
            <button className="text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </nav>
      </header>
    );
  }
  