import { Link } from "react-router-dom";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-gray-300 p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="hover:underline hover: underline - offset - 4">
          <Logo />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link to="/" className="hover:underline hover:underline-offset-4">
              Find Daycare
            </Link>
          </li>
          <li>
            <Link
              to="/my-favourites"
              className="hover:underline hover:underline-offset-4"
            >
              My List
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="hover:underline hover:underline-offset-4"
            >
              Log In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
