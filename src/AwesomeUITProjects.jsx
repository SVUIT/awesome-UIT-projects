import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiBookOpen, FiTool, FiLayers, FiLink } from "react-icons/fi";
import AOS from 'aos';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

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
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-[#18181b] dark:via-[#23232a] dark:to-[#18181b] py-12 px-2 font-sans" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
          {/* Sidebar mục lục bên trái */}
          <aside className="custom-scrollbar w-full md:w-auto max-w-lg block md:min-h-screen md:sticky md:top-20 h-max z-40 mb-4 md:mb-0 overflow-y-auto">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg h-full min-w-[320px]">
              <h2 className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-blue-400 mb-4">
                <FiLayers className="text-blue-500" /> Mục lục
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-none leading-relaxed">
                <li>
                  <button
                    onClick={() => handleScroll('mon-hoc')}
                    className="font-semibold group transition text-left"
                  >
                    <span className="relative inline-block">
                      Môn học
                      <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </button>
                  <ul className="ml-5 list-none space-y-1">
                    <li>
                      <button
                        onClick={() => handleScroll('khoa-khoa-hoc-may-tinh')}
                        className="font-medium group transition text-left"
                      >
                        <span className="relative inline-block">
                          Khoa Khoa Học Máy Tính
                          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                      <ul className="ml-5 list-none space-y-0.5 text-sm">
                        <li>
                          <button
                            onClick={() => handleScroll('cs105-do-hoa-may-tinh')}
                            className="hover:underline hover:text-blue-600 transition"
                          >
                            CS105 - Đồ họa máy tính
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScroll('khoa-mang-may-tinh-va-truyen-thong')}
                        className="font-medium group transition text-left"
                      >
                        <span className="relative inline-block">
                          Khoa Mạng Máy Tính Và Truyền Thông
                          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                      <ul className="ml-5 list-none space-y-0.5 text-sm">
                        <li>
                          <button
                            onClick={() => handleScroll('nt101-an-toan-mang-may-tinh')}
                            className="hover:underline hover:text-blue-600 transition"
                          >
                            NT101 - An toàn mạng máy tính
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleScroll('nt132-quan-tri-mang-va-he-thong')}
                            className="hover:underline hover:text-blue-600 transition"
                          >
                            NT132 - Quản trị mạng và hệ thống
                          </button>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <button
                        onClick={() => handleScroll('cac-mon-hoc-chung')}
                        className="font-medium group transition text-left"
                      >
                        <span className="relative inline-block">
                          Các môn học chung
                          <span className="absolute left-0 -bottom-0.5 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                      <ul className="ml-5 list-none space-y-0.5 text-sm">
                        <li>
                          <button
                            onClick={() => handleScroll('it007-he-dieu-hanh')}
                            className="hover:underline hover:text-blue-600 transition"
                          >
                            IT007 - Hệ điều hành
                          </button>
                        </li>
                      </ul>
                    </li>
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
          <main className="flex-1">
            <div className="max-w-3xl mx-auto">
              {/* Header */}
              <div className="mb-10">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-3 flex items-center gap-3">
                  <span className="inline-block bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Awesome UIT Projects</span>
                  <span className="rounded-full bg-white/80 border border-gray-200 shadow px-2 py-1 text-xs font-semibold text-gray-500">by SVUIT</span>
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

  {/* Khoa Khoa Học Máy Tính */}
  <div id="khoa-khoa-hoc-may-tinh" className="mb-6">
    <h3 className="text-lg font-semibold mb-2">
      <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        Khoa Khoa Học Máy Tính
      </span>
    </h3>
    <div id="cs105-do-hoa-may-tinh" className="ml-3">
      <Parallax y={[-10, 10]}>
        <div
          data-aos="fade-up"
          className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
        >
          <h4 className="font-bold text-lg mb-2 tracking-tight text-gray-800 dark:bg-gradient-to-r dark:from-blue-400 dark:to-pink-400 dark:bg-clip-text dark:text-transparent">
            CS105 - Đồ họa máy tính
          </h4>
          <ul className="list-none ml-0">
            <li>
              <a
                href="https://github.com/Karhdo/CS105.M11.KHCL"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
              >
                Karhdo/CS105.M11.KHCL
                <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
              </a>
              <span className="text-gray-500 dark:text-gray-400 block mt-1 text-sm">
                - Tổng hợp nội dung lý thuyết từng chương và đồ án cuối kì của môn học.
              </span>
            </li>
          </ul>
        </div>
      </Parallax>
    </div>
  </div>

  {/* Khoa Mạng Máy Tính Và Truyền Thông */}
  <div id="khoa-mang-may-tinh-va-truyen-thong" className="mb-6">
    <h3 className="text-lg font-semibold mb-2">
      <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        Khoa Mạng Máy Tính Và Truyền Thông
      </span>
    </h3>
    <div id="nt101-an-toan-mang-may-tinh" className="ml-3 mb-4">
      <Parallax y={[-10, 10]}>
        <div
          data-aos="fade-up"
          className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
        >
          <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-blue-300">NT101 - An toàn mạng máy tính</h4>
          <a
            href="https://thu4n.dev/posts/network-security-review/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
          >
            thu4n.dev/NT101
            <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            - Bài blog ôn tập cho bài thi cuối kỳ của môn học.
          </p>
        </div>
      </Parallax>
    </div>

    <div id="nt132-quan-tri-mang-va-he-thong" className="ml-3">
      <Parallax y={[-10, 10]}>
        <div
          data-aos="fade-up"
          className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
        >
          <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-blue-300">NT132 - Quản trị mạng và hệ thống</h4>
          <a
            href="https://thu4n.dev/posts/network-admin-review/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
          >
            thu4n.dev/NT132
            <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            - Bài blog ôn tập cho bài thi cuối kỳ của môn học.
          </p>
        </div>
      </Parallax>
    </div>
  </div>

  {/* Các môn học chung */}
  <div id="cac-mon-hoc-chung" className="mb-6">
    <h3 className="text-lg font-semibold mb-2">
      <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
        Các môn học chung
      </span>
    </h3>

    {/* IT005 */}
    <div id="it005-nhap-mon-mang-may-tinh" className="ml-3 mb-4">
      <Parallax y={[-10, 10]}>
        <div
          data-aos="fade-up"
          className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
        >
          <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-blue-300">IT005 - Nhập môn mạng máy tính</h4>
          <a
            href="https://media.pearsoncmg.com/aw/ecs_kurose_compnetwork_7/cw/content/interactiveanimations/http-delay-estimation/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
          >
            Tool tính số RTT trong HTTP
            <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            - Cho phép tính số RTT trong các ngữ cảnh Non-Persistent và Persistent, có Pipeline và không có Pipeline.
          </p>
        </div>
      </Parallax>
    </div>

    {/* IT007 */}
    <div id="it007-he-dieu-hanh" className="ml-3">
      <Parallax y={[-10, 10]}>
        <div
          data-aos="fade-up"
          className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
        >
          <h4 className="font-bold text-lg mb-2 text-gray-800 dark:text-blue-300">IT007 - Hệ điều hành</h4>
          <a
            href="https://github.com/PhamThe-KHDL/IT007.M14-Operating-Systems"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition"
          >
            PhamThe-KHDL/IT007.M14-Operating-Systems
            <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
          </a>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            - Tổng hợp chi tiết link các slide và video bài giảng.
          </p>
        </div>
      </Parallax>
    </div>
  </div>
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
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://dkhp-uit.vercel.app/1" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Tool ĐKHP UIT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Một website hỗ trợ trong việc đăng ký học phần, cho phép sắp xếp thời khóa biểu cũng như tạo script đăng ký nhanh.</span>
            </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://chromewebstore.google.com/detail/tool-%C4%91%C4%83ng-k%C3%BD-h%E1%BB%8Dc-ph%E1%BA%A7n-uit/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Extension ĐKHP UIT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Tính năng tương tự Tool ĐKHP UIT nhưng là một extension cho Google Chrome và các trình duyệt khác có hỗ trợ.</span>
          </div>
              </Parallax>
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
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://svuit.github.io/mmtt/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Study Vault UIT - MMTT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Kho tài liệu học tập UIT, phiên bản Mạng máy tính và Truyền thông.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.facebook.com/uit.nc" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Ban học tập khoa MMT&TT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Ban học tập khoa Mạng máy tính và Truyền thông, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">
                    Ban học tập CNPM
                  </div>
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href="https://www.bhtcnpm.com/document"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition"
                    >
                      Tài liệu
                      <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                    </a>
                    <span className="text-gray-400 text-lg leading-none flex items-center select-none">&amp;</span>
                    <a
                      href="https://www.facebook.com/bhtcnpm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline transition"
                    >
                      Fanpage Facebook
                      <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                    </a>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">
                    Ban học tập khoa Công nghệ Phần mềm, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ, ngoài ra còn cung cấp tài liệu các môn học riêng của khoa.
                  </span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.facebook.com/bht.ktmt" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Ban học tập khoa KTMT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Ban học tập khoa Kỹ thuật Máy tính, cung cấp slide training cho các môn học của khoa mỗi đợt giữa kỳ và cuối kỳ.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.facebook.com/BHTHTTT" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Ban học tập khoa HTTT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Ban học tập khoa Hệ thống Thông tin, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.facebook.com/BHTKHKTTT" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Ban học tập khoa KHKTTT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Ban học tập khoa Khoa học và Kỹ thuật Thông tin, cung cấp slide training cho các môn học chung mỗi đợt giữa kỳ và cuối kỳ.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.youtube.com/@svuit-mmtt" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Kênh Youtube SVUIT-MMTT
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Nơi lưu trữ các video demo đồ án và bài thực hành.</span>
                </div>
              </Parallax>
              <Parallax y={[-10, 10]}>
                <div
                  data-aos="fade-up"
                  className="relative group bg-white/80 dark:bg-[#23232a]/90 border border-gray-200/60 dark:border-gray-700/70 hover:border-blue-400 transition-all duration-200 rounded-3xl shadow-lg dark:shadow-black/40 p-6 mb-4 hover:shadow-2xl hover:-translate-y-1 hover:ring-2 hover:ring-blue-400/40"
                >
                  <a href="https://www.youtube.com/@DuongComputing" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400 hover:underline hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-pink-500 dark:hover:from-blue-400 dark:hover:to-pink-400 transition">
                    Kênh Youtube Duong Computing
                    <FaExternalLinkAlt className="inline-block text-xs group-hover:scale-125 transition" />
                  </a>
                  <span className="text-gray-500 dark:text-gray-400 block mt-1">Dạy các môn học về Công nghệ Thông tin, Khoa học Máy tính, Kỹ thuật Máy tính, Công nghệ Bán dẫn, Kỹ thuật Điện tử, Thiết kế Vi mạch. Chứa nhiều video bài giảng và giải đề thi của các môn như Nhập môn mạch số, Kiến trúc máy tính, và Hệ điều hành.</span>
                </div>
              </Parallax>
            </div>
        </section>
        </div>
      </main>
    </div>
    <button
      className="fixed top-4 right-4 z-50 bg-white/80 dark:bg-[#23232a]/80 border border-gray-200 dark:border-gray-700 rounded-full p-2 shadow hover:scale-110 transition"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
    </button>

    {/* Footer nhỏ */}
    <footer className="mt-8 mb-2 text-center text-xs text-gray-400 dark:text-gray-500">
      © {new Date().getFullYear()} SVUIT - Awesome UIT Projects
    </footer>
  </div>
</ParallaxProvider>
  );
} 