import { useState } from "react";

const navTabsHeadings: string[] = [
  "About",
  "Experience",
  "Projects",
  "Education",
  "Skills",
];

const NavTabs: React.FC = () => {
  const [selectedTabValue, setSelectedTabValue] = useState<string>("About");
  return (
    <div className="flex row">
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
          }}
        >
          <a href={`#${navTabHeading.toLowerCase()}`}>
            {navTabHeading}
          </a>
        </div>
      ))}
    </div>
  );
};

export default NavTabs;
