import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";
import NavTabs from "./NavTabs";
interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode}) => {
  const changeMode = () => {
    setDarkMode((prevState: boolean) => !prevState);
  };
  return (
    <div id="navbar" className="container w-80vw mx-auto pt-4 bg-white dark:bg-dark-mode-bg">
    <div className="flex row justify-between items-center">
      <div className="flex"></div>
      <div className="flex rounded-l-full rounded-r-full overflow-hidden border border-gray-400 border-l-2 border-r-2 p-2">
        <NavTabs />
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
