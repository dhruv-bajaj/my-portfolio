import {useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={`h-screen w-screen ${darkMode ? "dark" : ""}`}>
      <div
        className="bg-light-mode-bg dark:bg-black h-full overflow-y-auto"
      >
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
      </div>
    </div>
  );
};

export default App;
