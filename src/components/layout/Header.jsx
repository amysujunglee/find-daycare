import { Link } from "react-router-dom";
import Logo from "./Logo";
import MENU_DATA from "../utils/menus";

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
          {MENU_DATA.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="hover:underline hover:underline-offset-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
