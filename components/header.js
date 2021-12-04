import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className="md:flex-row md:justify-between mt-16 mb-16 md:mb-12">
        <nav className="flex flex-wrap items-center justify-between p-4">
          <div className="flex flex-shrink-0 mr-10">
            <a
              className="text-xl text-gray-600 font-semibold font-heading"
              href="/"
            >
              Mark Murphy
            </a>
          </div>
          <div className="block lg:hidden">
            <button className="navbar-burger flex items-center py-2 px-3 text-gray-500 rounded border border-indigo-500">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <div className="navbar-menu hidden lg:order-1 lg:block w-full lg:w-2/5">
            <Link href="/about">
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600">
                about
              </a>
            </Link>
            <Link
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600"
              href="/projects"
            >
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600">
                projects
              </a>
            </Link>
            <Link
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600"
              href="/blog"
            >
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600">
                blog
              </a>
            </Link>
            <Link
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600"
              href="/contact"
            >
              <a className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-gray-900 hover:text-indigo-600">
                contact
              </a>
            </Link>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
