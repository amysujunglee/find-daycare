import { Link } from "react-router-dom";

// TODO: Create a search function

const Header = () => {
  return (
    <header className="bg-gray-300 p-4 flex justify-between items-center">
      <div>
        <Link to="/find-daycare">Home</Link>
      </div>
    </header>
  );
};

export default Header;
