import { useState } from "react";

const navTabsHeadings: string[] = [
  "About",
  "Experience",
  "Projects",
  "Education",
  "Skills",
];
interface NavTabsProps {
  scrollToSection: (id:string)=>void;
}
const NavTabs: React.FC<NavTabsProps> = ({scrollToSection}) => {
  const [selectedTabValue, setSelectedTabValue] = useState<string>("About");
  return (
    <div className="flex flex-col divide-y-2 border-2 rounded-lg sm:border-0 sm:flex-row sm:divide-x-0 sm:divide-y-0">
      {navTabsHeadings.map((navTabHeading) => (
        <div
          className={`flex justify-center pl-3 pr-3 hover:text-blue-400
        dark:hover:text-blue-400 cursor-pointer
        ${
          selectedTabValue === navTabHeading
            ? `text-gray-500 dark:text-gray-400`
            : `text-black dark:text-white`
        }`}
          key={navTabHeading}
          onClick={() => {
            setSelectedTabValue(navTabHeading);
            scrollToSection(navTabHeading.toLowerCase());
          }}
        >
            {navTabHeading}
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
