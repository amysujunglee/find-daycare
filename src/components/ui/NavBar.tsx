import MENU_DATA from "../data/menus";
import { Link } from "react-router-dom";

const NavBar = () => {
  console.log(MENU_DATA);
  return (
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
  );
};

export default NavBar;
