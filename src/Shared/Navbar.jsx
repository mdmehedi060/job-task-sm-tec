import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-[1440px] h-[96px] mt-20 mx-auto">
      <div className="navbar bg-[#ECF5FF]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="">
                <li className="text-4xl text-black">
                  <a>Sell</a>
                </li>
              </Link>
              <Link to="/buyer">
                <li className="text-4xl">
                  <a>Buy</a>
                </li>
              </Link>
              <Link to="/search">
                <li className="text-4xl">
                  <a>Search</a>
                </li>
              </Link>
              <li className="text-4xl">
                <a>Services</a>
              </li>
            </ul>
          </div>
          <ul className="menu menu-horizontal px-1">
            <li className="text-4xl">
              <a>Sell</a>
            </li>
            <Link to="/buyer">
              <li className="text-4xl">
                <a>Buy</a>
              </li>
            </Link>
            <Link to="/search">
              <li className="text-4xl">
                <a>Search</a>
              </li>
            </Link>
            <Link to="/about">
              <li className="text-4xl">
                <a>About</a>
              </li>
            </Link>
            <Link>
              <li className="text-4xl">
                <a>Services</a>
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <img
            src="https://i.ibb.co/hYSK2rP/Hertiage-Nest-Final-LOGO-1-1.png"
            alt
          />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            <li className="text-4xl">
              <a>Manage Rentals</a>
            </li>
            <li className="text-4xl">
              <a>Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
