// App.tsx
// import { useState, useEffect } from 'react';
// import { BeakerIcon } from "@heroicons/react/24/outline";
import "./App.css";
import { Cabecalho } from "./components/cabecalho";
import { Pomodoro } from "./components/pomodoro";

export function App() {
  // const [isDarkMode, setIsDarkMode] = useState(true);

  // useEffect(() => {
  //   if (!isDarkMode) {
  //     document.documentElement.classList.remove('dark');
  //   } else {
  //     document.documentElement.classList.add('dark');
  //   }
  // }, [isDarkMode]);

  return (
    <div className="flex-col">
      <Cabecalho/>
      <Pomodoro/>
      {/* <button
        className="ml-auto rounded dark:bg-black"
        onClick={() => setIsDarkMode(!isDarkMode)}
      >
         {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-black" />
        )}
      </button> */}
    </div>
  );
}
