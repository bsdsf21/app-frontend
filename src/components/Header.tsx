import Link from "next/link";

const Header = () => (
  <header className="bg-black text-white justify-stretch">
    <div className="relative mx-auto">
      <div>
        <h1 className="text-3xl font-bold p-5">Briefly<span className="text-2xl font-normal"> | Get the news briefly</span></h1>
      </div>
      <div className="grid grid-cols-2 bg-[#1A1A1A]">
        <div>
          <nav className="mt-4 ml-4">
            <ul className="flex space-x-6 text-sm">
              <Link href="/">
                <li>Politics</li>
              </Link>
              <Link href="/">
                <li>World</li>
              </Link>
              <Link href="/">
                <li>Economy</li>
              </Link>
              <Link href="/">
                <li>Science & Tech</li>
              </Link>
              <Link href="/">
                <li>Business</li>
              </Link>
              <Link href="/">
                <li>Travel</li>
              </Link>
            </ul>
          </nav>
        </div>
        {/* align it left */}
        <div className="flex justify-end bg-[#1A1A1A]">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </div>

            <form action="#" method="GET">
              <input
                type="search"
                name="search"
                placeholder="Search"
                className="p-4 pl-10 text-gray-600 w-full border-l-2 border-gray-700  bg-[#1A1A1A] focus:outline-none"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
);
export default Header;
