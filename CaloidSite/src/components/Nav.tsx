import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="absolute right-[-1.875rem] h-full flex items-center text-[rgb(204,51,51)] font-semibold text-lg">
      <ul className="flex flex-col gap-[5.5rem]">
        <li>
          <Link to="/about">
            <div className="-rotate-90">ABOUT</div>
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <div className="-rotate-90">PROJECTS -</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
