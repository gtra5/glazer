import img1 from "../assets/Geometric Logo with Abstract Car Emblem.png";

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/60 to-transparent backdrop-blur-sm">
      <div className="w-full px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="w-40 h-10 flex items-center justify-center">
            <img src={img1} alt="Logo" className="w-full" />
          </div>

          {/* Actions - hidden on mobile, visible on md+ */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="text-white/90 hover:text-blue-400 transition-colors p-2"
              aria-label="Search"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="text-white/90 hover:text-blue-400 transition-colors p-2"
              aria-label="User Account"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
