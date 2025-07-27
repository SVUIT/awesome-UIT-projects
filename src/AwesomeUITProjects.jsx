import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiBookOpen, FiTool, FiLayers, FiLink } from "react-icons/fi";
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import data from './data.json';

function toId(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export default function AwesomeUITProjects() {
  const [dark, setDark] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 60 });
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b] py-12 px-2 font-sans" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-2 sm:px-4">
          {/* Sidebar mục lục bên trái */}
          <aside className="custom-scrollbar w-full md:w-auto max-w-lg block md:min-h-screen md:sticky md:top-20 h-max z-40 mb-4 md:mb-0">
            <div className="p-2 sm:p-3 md:p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg h-full min-w-[140px] sm:min-w-[180px] md:min-w-[220px] max-w-[90vw] overflow-x-auto">
              <h2 className="flex items-center gap-2 text-sm sm:text-base md:text-xl font-bold text-gray-800 dark:text-blue-400 mb-4">
                <FiLayers className="text-blue-500" /> Mục lục
              </h2>
              <ul className="space-y-1 sm:space-y-2 text-gray-700 dark:text-gray-300 list-none leading-relaxed">
                <li>
                  <button
                    onClick={() => handleScroll('mon-hoc')}
                    className="font-semibold group transition text-left text-xs sm:text-sm md:text-base"
                  >
                    <span className="relative inline-block">
                      Môn học
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <ul className="ml-5 list-none space-y-1">
                    {Object.values(data.courses).map((faculty) => (
                      <li key={faculty.faculty_name}>
                        <button
                          onClick={() => handleScroll(toId(faculty.faculty_name))}
                          className="font-medium group transition text-left"
                        >
                          <span className="relative inline-block">
                            {faculty.faculty_name}
                            <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                          </span>
                        </button>
                        <ul className="ml-5 list-none space-y-0.5 text-sm">
                          {faculty.subjects.map((subject) => (
                            <li key={subject.id}>
                              <button
                                onClick={() => handleScroll(toId(subject.id + ' ' + subject.name))}
                                className="hover:underline hover:text-blue-600 transition"
                              >
                                <span className="relative inline-block">
                                  {subject.id} - {subject.name}
                                  <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                                </span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll('cong-cu-khac')}
                    className="font-semibold group transition text-left"
                  >
                    <span className="relative inline-block">
                      Công cụ khác
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleScroll('nguon-tai-lieu-hoc-tap')}
                    className="font-semibold group transition text-left"
                  >
                    <span className="relative inline-block">
                      Nguồn tài liệu học tập
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          {/* Nội dung chính */}
          <main className="flex-1 w-full">
            <div className="max-w-3xl mx-auto px-2 sm:px-4">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-base sm:text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-3 flex items-center gap-3">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
                    Awesome UIT Projects
                  </span>
                  <span className="rounded-full bg-white/80 border border-gray-200 shadow px-2 py-1 text-xs font-semibold text-gray-500 whitespace-nowrap">
                    by SVUIT
                  </span>
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Danh sách tổng hợp các project liên quan đến UIT-VNUHCM như đồ án môn học, công cụ, đoạn code, tài liệu học tập, và nhiều hơn thế nữa.
        </p>
              </div>

            {/* Mục lục */}
              <section id="mon-hoc" className="mb-12">
  <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
    <FiBookOpen className="text-pink-500" />
    <span className="relative inline-block">
      Môn học
      <span className="absolute left-0 right-0 -bottom-1 h-1 w-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-full opacity-40"></span>
    </span>
  </h2>

  {Object.values(data.courses).map((faculty, idx) => (
  <div key={idx} className="mb-6">
    <h3
      className="text-lg font-semibold mb-2"
      id={toId(faculty.faculty_name)}
    >
      <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        {faculty.faculty_name}
      </span>
    </h3>
    {faculty.subjects.map((subject, sidx) => (
      <div key={sidx} className="ml-3 mb-4">
        <Parallax y={[-10, 10]}>
            <div
              data-aos="fade-up"
              className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-4 sm:p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
            >
              <h4
                className="font-bold text-lg mb-2 text-gray-800 dark:text-blue-300"
                id={toId(subject.id + ' ' + subject.name)}
              >
                {subject.id} - {subject.name}
              </h4>
              <ul className="list-none ml-0">
                {subject.projects.map((project, pidx) => (
                  <li
                    key={pidx}
                    id={toId(subject.id + ' ' + subject.name + ' ' + project.name)}
                  >
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
                    >
                      {project.name}
                      <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                    </a>
                    <span className="text-gray-500 dark:text-gray-400 block mt-1 text-sm">
                      - {project.description}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Parallax>
      </div>
    ))}
  </div>
))}
</section>
          {/* Công cụ khác */}
          <section id="cong-cu-khac" className="mb-12">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 relative">
              <FiTool className="text-green-500" />
              <span className="relative inline-block">
                Công cụ khác
                <span className="absolute left-0 right-0 -bottom-1 h-1 w-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-full opacity-40"></span>
              </span>
            </h2>
            <div className="space-y-3">
              {data.other_tools.map((tool, idx) => (
                <Parallax y={[-10, 10]} key={idx}>
                  <div
                    data-aos="fade-up"
                    className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-4 sm:p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                  >
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
                    >
                      {tool.name}
                      <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                    </a>
                    <span className="text-gray-500 dark:text-gray-400 block mt-1">{tool.description}</span>
                  </div>
                </Parallax>
              ))}
            </div>
        </section>

        {/* Nguồn tài liệu học tập */}
          <section id="nguon-tai-lieu-hoc-tap" className="mb-12">
            <h2 className="relative flex items-center gap-2 text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              <FiLink className="text-yellow-500" />
              <span className="relative">
                Nguồn tài liệu học tập
                <span className="absolute left-0 right-0 -bottom-1 h-1 w-full bg-gradient-to-r from-blue-400 via-pink-400 to-yellow-400 rounded-full opacity-40"></span>
              </span>
            </h2>
            <div className="space-y-3">
              {data.learning_resources.map((resource, idx) => (
                <Parallax y={[-10, 10]} key={idx}>
                  <div
                    data-aos="fade-up"
                    className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-4 sm:p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
                    >
                      {resource.name}
                      <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                    </a>
                    <span className="text-gray-500 dark:text-gray-400 block mt-1">{resource.description}</span>
                  </div>
                </Parallax>
              ))}
            </div>
        </section>
        </div>
      </main>
    </div>
    <button
      className="fixed top-4 right-2 sm:right-4 z-50 bg-white/80 dark:bg-[#23232a]/80 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:scale-110 transition"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>

    {/* Footer nhỏ */}
    <footer className="mt-8 mb-2 text-center text-xs text-gray-400 dark:text-gray-500 px-2">
      © {new Date().getFullYear()} SVUIT - Awesome UIT Projects
    </footer>
  </div>
</ParallaxProvider>
  );
} 
