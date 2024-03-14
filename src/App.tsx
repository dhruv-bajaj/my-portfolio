import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="bg-light-mode-bg dark:bg-black"
      >
        <div className="container h-screen w-80vw mx-auto pt-6 bg-white dark:bg-dark-mode-bg">
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <p>My name is Dhruv Bajaj</p>
        </div>
      </div>
    </div>
  );
};

export default App;
