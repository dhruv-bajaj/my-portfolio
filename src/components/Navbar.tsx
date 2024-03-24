import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import { useRef, useState } from "react";
import NavTabs from "./NavTabs";
interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const changeMode = () => {
    setDarkMode((prevState: boolean) => !prevState);
  };
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const navbarRef = useRef(null);

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    const navbarHeight = navbarRef.current?.offsetHeight;
    const offsetPosition = targetElement.offsetTop - navbarHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="navbar"
      ref={navbarRef}
      className="container sticky top-0 w-80vw z-50 mx-auto pt-4 pb-2 bg-white dark:bg-dark-mode-bg"
    >
      <div className="flex row justify-between items-center">
        <div className="hidden sm:flex"></div>
        <div className="hidden sm:flex rounded-l-full rounded-r-full border border-gray-400 border-l-2 border-r-2 p-2 dark:bg-dark-mode-navbar shadow-md">
          <NavTabs scrollToSection={scrollToSection} />
        </div>
       <div onClick={()=>{setShowDropDown(prevState=>!prevState)}} className="sm:hidden flex justify-center cursor-pointer w-full m-2 rounded-l-full rounded-r-full overflow-hidden border border-gray-400 border-l-2 border-r-2 p-2">
        Menu
        <div className="z-10 absolute bg-white top-[66px] w-3/4">
        {
          showDropDown ?  <NavTabs scrollToSection={scrollToSection} />: <></>
        }
        </div>
       </div>
        <div className="flex">
          <div
            className="flex justify-center cursor-pointer mr-4 w-14 rounded-l-full rounded-r-full overflow-hidden border border-gray-400 border-l-2 border-r-2 p-2"
            onClick={changeMode}
          >
            {!darkMode ? (
              <SunIcon className="h-6 w-6 text-blue-500" />
            ) : (
              <MoonIcon className="h-6 w-6 text-blue-500" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
