import React, { useState, useEffect } from "react";
import { aboutInfo, homeData } from "../assets/asset.js";
import { assets } from "../assets/asset";
import { project } from "../assets/asset.js";
import { experience } from "../assets/asset";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";



const Home = () => {
    // TYPEWRITER EFFECT
    const roles = homeData.roles;

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursor, setCursor] = useState(true);
     
    useEffect(() => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  elements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

    // Cursor blinking
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursor((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    // Typing logic
    useEffect(() => {
        if (!isDeleting && subIndex === roles[index].length) {
            setTimeout(() => setIsDeleting(true), 1000);
            return;
        }

        if (isDeleting && subIndex === 0) {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, isDeleting ? 40 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, isDeleting, index, roles]);

    return (
        <>
            {/* ================= HERO ================= */}
          <section
  id="home"
  className="
    relative overflow-hidden
    bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a]
    text-white
    px-6 md:px-16
    min-h-screen
    flex items-center justify-center
  "
>
  {/* ===== BACKGROUND EFFECTS ===== */}

  {/* Purple glow */}
  <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-purple-500/25 blur-[180px] rounded-full"></div>

  {/* Right glow */}
  <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] bg-purple-500/15 blur-[180px] rounded-full"></div>

  {/* Dot grid */}
  <div className="absolute inset-0 bg-[url('https://api.iconify.design/mdi:dots-grid.svg?color=ffffff')] opacity-[0.035]"></div>

  {/* ===== CONTENT ===== */}
  <div className="relative z-10 max-w-2xl w-full text-center">

    {/* Heading */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
      Hi, I’m{" "}
      <span className="text-purple-400">{homeData.name}</span>
    </h1>

    {/* Typewriter role */}
    <h2 className="mt-4 text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
      {roles[index].substring(0, subIndex)}
      <span className="text-purple-400">{cursor ? "|" : " "}</span>
    </h2>

    {/* Description */}
    <p className="mt-6 text-white/70 text-base sm:text-lg leading-relaxed">
      {homeData.description}
    </p>

    {/* Social Icons */}
    <div className="mt-8 flex justify-center gap-4">
      {[
        { Icon: FaGithub, link: "https://github.com/yourusername" },
        { Icon: FaLinkedinIn, link: "https://linkedin.com/in/yourusername" },
        { Icon: FaEnvelope, link: "mailto:your-email@example.com" }
      ].map(({ Icon, link }, i) => (
        <a
          key={i}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            group relative
            w-11 h-11
            flex items-center justify-center
            rounded-full
            bg-[#1f1f1f]
            border border-white/10
            transition-all duration-300
            hover:scale-110
            hover:border-purple-400/60
            hover:shadow-[0_0_28px_rgba(168,85,247,0.45)]
            overflow-hidden
          "
        >
          <span className="
            absolute inset-0
            bg-gradient-to-br from-purple-600 to-purple-800
            opacity-0
            group-hover:opacity-100
            transition-opacity duration-300
          "></span>

          <Icon className="relative z-10 text-lg text-gray-300 group-hover:text-white transition" />
        </a>
      ))}
    </div>

    {/* CTA Buttons */}
    <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center">

      <a
        href="#projects"
        className="
          group relative inline-flex items-center justify-center
          px-8 py-3 rounded-xl font-semibold
          text-white
          bg-gradient-to-r from-purple-500 to-purple-700
          transition-all duration-300
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
          overflow-hidden
        "
      >
        <span className="
          absolute inset-0
          bg-gradient-to-r from-purple-600 to-purple-800
          translate-x-[-100%]
          group-hover:translate-x-0
          transition-transform duration-500
        "></span>
        <span className="relative z-10">View Work</span>
      </a>

      <a
        href="#contact"
        className="
          group relative inline-flex items-center justify-center
          px-8 py-3 rounded-xl font-semibold
          text-purple-400
          border border-purple-400
          transition-all duration-300
          hover:text-white
          hover:scale-105
          hover:shadow-[0_0_28px_rgba(168,85,247,0.45)]
          overflow-hidden
        "
      >
        <span className="
          absolute inset-0
          bg-gradient-to-r from-purple-600 to-purple-800
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
        "></span>
        <span className="relative z-10">Contact Me</span>
      </a>

    </div>
  </div>
</section>



            {/* ============== ABOUT SECTION ============== */}
<section
  id="about"
  className="relative py-32 px-6 md:px-16 lg:px-14 bg-[#0d0d0f] text-white overflow-hidden"
>
  {/* Background texture */}
  <div className="absolute inset-0 bg-[url('https://api.iconify.design/mdi:dots-grid.svg?color=222222')] opacity-[0.04]"></div>

  {/* Soft glows */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/15 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-purple-400/10 blur-[160px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-start z-10">

    {/* ================= LEFT — CONTENT ================= */}
    <div>

      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        About <span className="text-purple-400">Me</span>
      </h2>

      {/* Accent underline */}
      <div className="h-[3px] w-24 bg-gradient-to-r from-purple-400 to-purple-600 mb-8 rounded-full"></div>

      {/* Tagline */}
      <p className="text-purple-400 font-medium text-lg mb-4">
        Turning ideas into clean, user-focused digital experiences
      </p>

      {/* Description */}
      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        I’m Shweta — a developer who enjoys crafting smooth and meaningful
        digital experiences. I blend design clarity with strong technical
        thinking to create apps and websites that feel modern, intuitive,
        and enjoyable to use.
      </p>
      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        I am passionate about learning new technologies and continuously improving my skills.
        Quick learner and a team player, I thrive in collaborative environments where I can contribute to impactful projects.
        </p>
      <p className="text-gray-300 text-lg leading-relaxed mb-10">
        My strong problem-solving skills and attention to detail make me a valuable asset to any development team.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { value: "10+", label: "Projects Built" },
          { value: "2+", label: "Years Learning" },
          { value: "9.4", label: "CGPA" },
          { value: "2+", label: "Certifications" },
        ].map((stat, i) => (
          <div
            key={i}
            className="
              bg-[#151515]
              rounded-2xl
              p-5
              text-center
              border border-white/10
              transition-all duration-300
              hover:-translate-y-1
              hover:border-purple-400/40
              hover:shadow-[0_10px_30px_rgba(168,85,247,0.2)]
            "
          >
            <h3 className="text-3xl font-bold text-purple-400">
              {stat.value}
            </h3>
            <p className="text-gray-400 mt-1 text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* ================= RIGHT — FEATURE CARDS ================= */}
    <div className="grid gap-8">
      {aboutInfo.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="
              reveal
              group relative
              rounded-2xl
              p-[2px]
              bg-gradient-to-r from-purple-500/30 to-purple-700/30
              transition-all duration-500
              hover:from-purple-400 hover:to-purple-600
            "
          >
            <div
              className="
                bg-[#151515]
                rounded-2xl
                p-6
                transition-all duration-500
                group-hover:bg-[#1c1c1c]
                group-hover:-translate-y-1
                group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
              "
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-500/10">
                  <Icon className={`${item.color} text-xl`} />
                </div>
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>

  </div>
</section>




<section
  id="skills"
  className="relative py-28 px-6 md:px-16 bg-[#0d0d0d] text-white overflow-hidden"
>
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto z-10">

    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      Skills 
    </h2>



    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* ANDROID */}
<div className="bg-[#151515]  reveal rounded-3xl p-8
  border border-purple-500/30
  transition
  hover:-translate-y-1
  hover:border-purple-400
  hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]"
>
  <h3 className="text-xl font-semibold mb-5 text-white">
    Android Development
  </h3>

  <div className="flex flex-wrap gap-3">

    {/* Skills WITH logos */}
    {[
      { name: "Kotlin", logo: assets.techLogos.kotlin },
      { name: "Jetpack Compose", logo: assets.techLogos.jetpack },
      { name: "Firebase", logo: assets.techLogos.firebase },
      { name: "Android Studio", logo: assets.techLogos.android_studio },
    ].map((skill, i) => (
      <div
        key={i}
        className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#262626] transition"
      >
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-4 h-4 object-contain"
        />
        <span>{skill.name}</span>
      </div>
    ))}

    {/* Skills WITHOUT logos (TEXT ONLY) */}
    {[
      "MVVM",
      "REST APIs",
      "Room DB",
      "Navigation Component",
      "Material Design",
    ].map((skill, i) => (
      <span
        key={`text-${i}`}
        className="px-4 py-2 bg-[#1f1f1f] rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#262626] transition"
      >
        {skill}
      </span>
    ))}

  </div>
</div>


      {/* WEB */}
      <div className="
      bg-[#151515] reveal rounded-3xl p-8
  border border-purple-500/30
  transition
  hover:-translate-y-1
  hover:border-purple-400
  hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]
"
      >
        <h3 className="text-xl font-semibold mb-5 text-white">
          Frontend Web
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "HTML", logo: assets.techLogos.html },
            { name: "CSS", logo: assets.techLogos.css },
            { name: "JavaScript", logo: assets.techLogos.javascript },
            { name: "React", logo: assets.techLogos.reactjs },
            { name: "Tailwind", logo: assets.techLogos.tailwindcss },
          ].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#262626] transition"
            >
              <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
              <span>{skill.name}</span>
            </div>
          ))}

          {[
      "Vite",
      "APIs",
      "Hooks"
    ].map((skill, i) => (
      <span
        key={`text-${i}`}
        className="px-4 py-2 bg-[#1f1f1f] rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#262626] transition"
      >
        {skill}
      </span>
    ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="
      bg-[#151515] rounded-3xl p-8
  border border-purple-500/30
  transition
  reveal
  
  hover:-translate-y-1
  hover:border-purple-400
  hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)]
"
      >
        <h3 className="text-xl font-semibold mb-5 text-white">
          Tools & Workflow
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            { name: "Git", logo: assets.techLogos.git },
            { name: "GitHub", logo: assets.techLogos.github },
            { name: "VS Code", logo: assets.techLogos.vs_code },
            { name: "Vercel", logo: assets.techLogos.vercel },
          ].map((skill, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 bg-[#1f1f1f] rounded-full text-sm text-gray-300 hover:text-white hover:bg-[#262626] transition"
            >
              <img src={skill.logo} alt={skill.name} className="w-4 h-4 object-contain" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


        

        {/* ================= PROJECTS SECTION ================= */}
<section
  id="projects"
  className="relative py-28 px-6 md:px-16 bg-[#0d0d0d] text-white"
>
  {/* Background glow */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full"></div>

  <div className="max-w-6xl mx-auto relative z-10">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      Projects
    </h2>

    {/* Accent line */}
    <div className="w-14 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mb-12"></div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-3 gap-6">
      {project.map((item, index) => (
        <div
          key={index}
          className="
            group relative
            bg-[#1e1e1e]
            rounded-2xl
            overflow-hidden
            reveal
            border border-white/10
            transition-all duration-500
            hover:-translate-y-2
            hover:border-purple-400/60
            hover:shadow-[0_20px_50px_rgba(168,85,247,0.25)]
          "
        >
          {/* Gradient shine */}
          <div className="
            absolute inset-0
            bg-gradient-to-tr from-purple-500/10 via-transparent to-pink-500/10
            opacity-0
            group-hover:opacity-100
            transition duration-500
            pointer-events-none
          "></div>

          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="
              w-full h-56 object-cover
              transition-transform duration-500
              group-hover:scale-110
            "
          />

          {/* Content */}
          <div className="relative p-6">
            <h3 className="text-2xl font-bold mb-2">
              {item.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {item.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="
                    px-3 py-1
                    text-sm
                    rounded-full
                    bg-white/10
                    text-white
                    backdrop-blur-sm
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={item.viewCoodeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2
                  bg-purple-500
                  rounded-lg
                  text-white
                  font-semibold
                  transition
                  hover:scale-105
                "
              >
                View Code
              </a>

              <a
                href={item.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2
                  border border-purple-500
                  rounded-lg
                  text-white
                  font-semibold
                  transition
                  hover:bg-purple-500
                  hover:scale-105
                "
              >
                Live Demo
              </a>
            </div>
          </div>

        </div>
      ))}
    </div>

  </div>
</section>


        

           {/* ================= CODING PROFILES SECTION ================= */}
<section
  id="coding"
  className="relative py-28 px-6 md:px-16 bg-[#0d0d0d] text-white"
>
  
  {/* Subtle background glow */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>
  <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-500/10 blur-[140px] rounded-full"></div>

<div className="max-w-6xl mx-auto">

    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
      Coding <span className="text-purple-400">Profile</span>
    </h2>

    {/* Accent line */}
    <div className="w-14 h-[3px] bg-gradient-to-r from-purple-500 to-pink-500 mb-12"></div>

   {/* Cards */}
<div className=" reveal grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">

  {/* HackerRank */}
  <a
    href="https://www.hackerrank.com/shwetajadhav2001"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative h-28 rounded-2xl overflow-hidden
      border border-white/10
      hover:border-purple-400/50
      hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
      transition-all duration-300
      flex items-center justify-center
    "
  >
    {/* Background Image */}
    <div
      className="
        absolute inset-0 bg-center bg-no-repeat bg-contain
        opacity-20 blur-[1px]
        group-hover:opacity-100 group-hover:blur-0
        transition-all duration-300
      "
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png)",
      }}
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/60"></div>

    {/* Text */}
    <span className="
      relative z-10 font-semibold
      text-lg sm:text-xl md:text-2xl
      group-hover:text-white transition
    ">
      HackerRank
    </span>
  </a>

 
  <a
    href="https://leetcode.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative h-28 rounded-2xl overflow-hidden
      border border-white/10
      hover:border-purple-400/50
      hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
      transition-all duration-300
      flex items-center justify-center
    "
  >
    <div
      className="
        absolute inset-0 bg-center bg-no-repeat bg-contain
        opacity-40 blur-[1px]
        group-hover:opacity-100 group-hover:blur-0
        transition-all duration-300
      "
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png)",
      }}
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <span className="
      relative z-10 font-semibold
      text-lg sm:text-xl md:text-2xl
      group-hover:text-white transition
    ">
      LeetCode
    </span>
  </a>

  {/* GFG */}
  <a
    href="https://www.geeksforgeeks.org/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative h-28 rounded-2xl overflow-hidden
      border border-white/10
      hover:border-purple-400/50
      hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
      transition-all duration-300
      flex items-center justify-center
    "
  >
    <div
      className="
        absolute inset-0 bg-center bg-no-repeat bg-contain
        opacity-40 blur-[1px]
        group-hover:opacity-100 group-hover:blur-0
        transition-all duration-300
      "
      style={{
        backgroundImage:
          "url(https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg)",
      }}
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <span className="
      relative z-10 font-semibold
      text-lg sm:text-xl md:text-2xl
      group-hover:text-white transition
    ">
      GFG
    </span>
  </a>

  {/* CodeChef */}
  <a
    href="https://www.codechef.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative h-28 rounded-2xl overflow-hidden
      border border-white/10
      hover:border-purple-400/50
      hover:-translate-y-1
      hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]
      transition-all duration-300
      flex items-center justify-center
    "
  >
    <div
      className="
        absolute inset-0 bg-center bg-no-repeat bg-contain
        opacity-20 blur-[1px]
        group-hover:opacity-100 group-hover:blur-0
        transition-all duration-300
      "
      style={{
        backgroundImage:
            `url(${assets.codechef})`,
      }}
    />

    <div className="absolute inset-0 bg-black/60"></div>

    <span className="
      relative z-10 font-semibold
      text-lg sm:text-xl md:text-2xl
      group-hover:text-white transition
    ">
      CodeChef
    </span>
  </a>

</div>

  </div>
  
</section>

<section
  id="experience"
  className="relative py-28 px-6 md:px-16 bg-[#0d0d0d] text-white overflow-hidden"
>
  {/* Background glow */}
  <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/10 blur-[140px] rounded-full"></div>

  {/* Heading */}
  <div className="text-center mb-24">
    <h2 className="text-4xl md:text-5xl font-extrabold">
      Work <span className="text-purple-400">Experience</span>
    </h2>
    <p className="text-gray-400 mt-3">
      My journey so far
    </p>
  </div>

  <div className="relative max-w-5xl mx-auto">

    {/* Center Line */}
    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-purple-500/30 -translate-x-1/2"></div>

    <div className="space-y-20">
      {experience.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <div
            key={index}
            className={`relative flex w-full ${
              isLeft ? "justify-start" : "justify-end"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10">
              <div className="w-4 h-4 rounded-full bg-purple-500"></div>
            </div>

            {/* Card */}
            <div
              className={`
                reveal
                w-full md:w-[45%]
                bg-[#1e1e1e]
                rounded-2xl
                p-6 md:p-8
                border border-white/10
                transition-all duration-300
                hover:-translate-y-1
                hover:border-purple-400/50
                hover:shadow-[0_15px_40px_rgba(168,85,247,0.25)]
              `}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                <h3 className="text-xl md:text-2xl font-bold">
                  {item.role}
                </h3>

                <span className="mt-2 sm:mt-0 px-4 py-1 rounded-full text-sm bg-purple-500/20 text-purple-400">
                  {item.period}
                </span>
              </div>

              {/* Company */}
              <p className="text-purple-300 mb-3">
                {item.company}
              </p>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>





{/* ================= CONTACT SECTION ================= */}
<section
  id="contact"
  className="relative py-28 px-6 md:px-16 bg-[#0d0d0f] text-white"
>
  <div>
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center">
      Get in <span className="text-purple-400">Touch</span>
    </h2>
  </div>
  {/* Background glow */}
  <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/15 blur-[160px] rounded-full"></div>
  <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-500/10 blur-[160px] rounded-full"></div>

  <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

    {/* ================= LEFT — INFO ================= */}
    <div className="bg-[#121212] rounded-3xl p-8 md:p-10 border border-white/10">
      <h3 className="text-2xl font-bold text-purple-400 mb-4">
        Contact Information
      </h3>

      <p className="text-gray-400 mb-10 leading-relaxed">
        Feel free to reach out through any of the following channels.
        I’m always open to discussing new projects and opportunities.
      </p>

      {/* Info items */}
      <div className="space-y-6">

        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <FaEnvelope className="text-purple-400 text-xl" />
          </div>
          <div>
            <p className="font-semibold">Email</p>
            <p className="text-gray-400">shwetajadhav2002@gmail.com</p>
          </div>
        </div>

       

        {/* Location */}
        
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10 my-10"></div>

      {/* Socials */}
      <h4 className="font-semibold mb-4">Connect With Me</h4>
      <div className="flex gap-4">
        {[FaGithub, FaLinkedinIn].map((Icon, i) => (
          <a
            key={i}
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
              w-12 h-12 rounded-full
              flex items-center justify-center
              bg-[#1f1f1f]
              border border-white/10
              hover:bg-purple-500
              hover:scale-110
              transition-all duration-300
            "
          >
            <Icon className="text-lg text-white" />
          </a>
        ))}
      </div>
    </div>

    {/* ================= RIGHT — FORM ================= */}
    <div className="bg-[#121212] rounded-3xl p-8 md:p-10 border border-white/10">
      <form className="space-y-6">

        {/* Name & Email */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full bg-[#0d0d0d] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="text-sm text-gray-300 mb-2 block">
              Your Email
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full bg-[#0d0d0d] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        

        {/* Message */}
        <div>
          <label className="text-sm text-gray-300 mb-2 block">
            Message
          </label>
          <textarea
            rows="5"
            placeholder="Tell me about your project..."
            className="w-full bg-[#0d0d0d] rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            inline-flex items-center gap-2
            bg-gradient-to-r from-purple-500 to-purple-700
            px-8 py-3 rounded-full
            font-semibold
            hover:scale-105
            hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]
            transition-all duration-300
          "
        >
          <FaPaperPlane />
          Send Message
        </button>

      </form>
    </div>

  </div>
</section>

<footer
  className="relative py-8 px-6 md:px-16 bg-[#0d0d0f] text-white border-t border-white/10"
  >
  {/* Footer content can go here if needed */}

  <div>
    <p className="text-center text-gray-500">
      &copy; {new Date().getFullYear()} Shweta Jadhav. All rights reserved.
    </p>

    <p className="text-center text-gray-500 mt-2">
      Built with React and Tailwind CSS.
    </p>
  </div>
</footer>


        </>
    );
};

export default Home;