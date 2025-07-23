import React, { useEffect, useState } from "react";
import AwesomeUITProjects from "./AwesomeUITProjects";
import { FaMoon, FaSun } from "react-icons/fa";
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

export default function App() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false); // close sidebar on mobile
    }
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => { AOS.init({ once: true, duration: 700, offset: 60 }); }, []);

  return (
    <ParallaxProvider>
      <div>
        <button
          className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-[#23232a]/80 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:scale-110 transition"
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
        <AwesomeUITProjects />
      </div>
    </ParallaxProvider>
    
  );
}
