import Link from "next/link";

const Nav = () => {
  return (
    <section className="relative bg-gray-100 border-b font-poppins dark:bg-gray-800 dark:border-gray-800">
      <div className="container mx-auto">
        <nav className="flex justify-between">
          <div className="flex items-center justify-between w-full py-2 px-10">
            <ul className="font-medium flex space-x-6">
              <li>
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/movies"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-gray-600 dark:text-gray-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Nav;
