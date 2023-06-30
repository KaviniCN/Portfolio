import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="">
      <nav className="text-cool-gray-100">
        <div className="flex font-sans font-normal text-base justify-center sm:justify-end mt-10 sm:gap-12 gap:6 sm:pr-20 mb-9 sm:mb-0">
          <Link to="/">
            Work
            {location.pathname === "/" ? (
              <div className="w-[10px] h-[10px] bg-[#8758FF] rounded-full m-auto" />
            ) : null}
          </Link>
          <Link to="/about">
            About
            {location.pathname === "/about" ? (
              <div className="w-[10px] h-[10px] bg-[#8758FF] rounded-full m-auto" />
            ) : null}
          </Link>
          <a href="/resume.pdf" className="mr-4 flex flex-col">
            Resume
            {location.pathname === "/resume" ? (
              <div className="w-[10px] h-[10px] bg-[#8758FF] rounded-full m-auto" />
            ) : null}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
