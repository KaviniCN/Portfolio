import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <header className="">
      <nav className="text-cool-gray-100">
        <div className="flex font-sans font-normal text-base justify-center sm:justify-end mt-10 sm:gap-12 gap:6 sm:pr-20 mb-9 sm:mb-0">
          {[
            { label: "Work", route: "/" },
            { label: "About", route: "/about" },
            { label: "Resume", route: "/resume.pdf" },
          ].map((item) => (
            <a href={item.route} className="mr-4 flex flex-col">
              {item.label}
              {item.route === location.pathname ? (
                <div className="w-[10px] h-[10px] bg-[#8758FF] rounded-full m-auto" />
              ) : null}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
