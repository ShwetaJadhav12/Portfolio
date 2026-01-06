/* -------------------------------------------------------------------------- */
/*                               IMAGE IMPORTS                                */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               TECH LOGOS                                   */
/* -------------------------------------------------------------------------- */

import c from "./tech_logo/c.png";
import cpp from "./tech_logo/cpp.png";
import css from "./tech_logo/css.png";
import firebase from "./tech_logo/firebase.png";
import git from "./tech_logo/git.png";
import github from "./tech_logo/github.png";
import html from "./tech_logo/html.png";
import java from "./tech_logo/java.png";
import javascript from "./tech_logo/javascript.png";
import jetpack from "./tech_logo/jetpack.png";
import kotlin from "./tech_logo/kotlin.png";
import mysql from "./tech_logo/mysql.png";
import python from "./tech_logo/python.png";
import reactjs from "./tech_logo/reactjs.png";
import tailwindcss from "./tech_logo/tailwindcss.png";
import vs_code from "./tech_logo/vs_code.png";
import vercel from "./tech_logo/vercel.png";
import android_studio from "./tech_logo/android_studio.png";





import profileImg from "./myPhoto.png";
import codechef from "./codechef.png";

// Project Images (ONLY EXISTING FILES)
import bmi from "./pro_logo/bmi.png";
import ecom from "./pro_logo/ecom.png";
import Finmate_logo from "./pro_logo/Finmate_logo.png";
import Taskmang from "./pro_logo/Taskmang.png";
import travel from "./pro_logo/travel.png";
import recipe from "./pro_logo/recipe.png";
import portfolio_img from "./pro_logo/portfolio_img.png";
import Learn2excel from "./pro_logo/Learn2excel.png";
/* -------------------------------------------------------------------------- */
/*                                  HOME DATA                                 */
/* -------------------------------------------------------------------------- */

export const homeData = {
  name: "Shweta Jadhav",
  roles: [
    "Android Developer ",
    "Frontend Web Developer ",
    "Problem Solver ",
  ],
  description:
    "I create stunning web experiences with modern technologies and innovative design.",
};

/* -------------------------------------------------------------------------- */
/*                                ABOUT INFO                                  */
/* -------------------------------------------------------------------------- */

import {
  FaAndroid,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";

export const aboutInfo = [
  {
    icon: FaAndroid,
    title: "Android Developer",
    description:
      "I build modern Android applications using Kotlin and Jetpack Compose, focusing on clean architecture, smooth user interactions, and scalable code"
  },
  {
    icon: FaLaptopCode,
    title: "Frontend Web Developer",
    description:
      "I design and develop responsive, visually appealing web interfaces using React and Tailwind CSS. "
    ,color: "text-pink-400",
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description:
      "I approach challenges with logical thinking and creativity, breaking down complex problems into simple, manageable solutions.",
    color: "text-blue-400",
  },
];


/* -------------------------------------------------------------------------- */
/*                                PROJECTS                                    */
/* -------------------------------------------------------------------------- */

export const project = [
  {
    title: "FinMate - Personal Finance Manager`",
    image: Finmate_logo,
    description:
      "A comprehensive personal finance manager app that helps users track expenses, manage budgets, and gain insights into their financial habits.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Firebase", "GitHub"],
    viewCoodeLink: "https://github.com/ShwetaJadhav12/FinMate",
    liveDemoLink: "#",
  },
  
  {
    title: "TravelWithUs - Travel Recommendation App",
    image: travel,
    description:
      "A travel recommendation app that provides users with personalized travel suggestions, itineraries, and local insights based on their preferences and interests.",
    techStack: ["python","Flask","HTML","CSS","JavaScript","Machine Learning"],
    viewCoodeLink: "https://github.com/ShwetaJadhav12/Travel_Recommendation_System",
    liveDemoLink: "#",
  },

  {
    title: "Learn2Exce- An onLine Skill Development Platform",
    image: Learn2excel,
    description:
      "An online skill development platform that offers a variety of courses and tutorials to help users enhance their skills and advance their careers.",
    techStack: ["HTML","CSS","JavaScript",,"NodeJS","ExpressJS","SQL"],
    viewCoodeLink: "https://github.com/ShwetaJadhav12/Learn2Exce",
  },
  
  {
    title: "TaskMaster - Task Management App",
    image: Taskmang,
    description:
      "A task management app that helps users organize their daily tasks, set reminders, and track productivity with a clean and intuitive interface.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Room DB,Androd Sudio"],
    viewCoodeLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "E-Commerce App",
    image: ecom,
    description:
      "A sleek and modern E-Commerce UI built with React and Tailwind CSS, featuring a responsive design, intuitive navigation, and dynamic product listings to enhance the online shopping experience.",
  techStack: ["Kotlin", "Jetpack Compose", "MVVM Architecture","Firebase","GitHub","Razorpay"],
    viewCoodeLink: "#",
    liveDemoLink: "#",
  },
  {
    title: "RecipeFinder - Recipe Search App",
    image: recipe,
    description:
      "A recipe search app that allows users to find recipes based on ingredients, dietary preferences, and cooking time, complete with step-by-step instructions and nutritional information.",
    techStack: ["Kotlin", "Jetpack Compose", "Api Integration"],
    viewCoodeLink: "#",
    liveDemoLink: "#",
  },
  {
    title:"Dashboard Visualization"
    ,image:ecom,
    description:
      "A Power BI dashboard that visualizes key performance indicators and business metrics, providing actionable insights through interactive charts and graphs."
    ,
    techStack: ["Power Bi"],
    viewCoodeLink: "https://github.com/ShwetaJadhav12/Power_Bi_sem5?tab=readme-ov-file",
    liveDemoLink: "https://github.com/ShwetaJadhav12/Power_Bi_sem5?tab=readme-ov-file",
  },
{
    title: "BMI Calculator",
    image: bmi,
    description:
      "A simple and user-friendly app that helps users track their health  goals by calculating their Body Mass Index based on their weight and height inputs.",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM Architecture"],
    viewCoodeLink: "#",
    liveDemoLink: "#",
  },
   {
    title:"Unit Converter App",
    image:ecom,
    description:
      "A unit converter app that allows users to easily convert between various units of measurement, including length, weight, temperature, and more.",
    techStack: ["Kotlin", "Jetpack Compose"],
    viewCoodeLink: "#",
    liveDemoLink: "",
  },
  
];


/* -------------------------------------------------------------------------- */
/*                              WORK EXPERIENCE                                */
/* -------------------------------------------------------------------------- */

export const experience = [
  {
    role: "Android Developer",
    company: "Tamizhan Skills",
    period: "June'25 - July'25",
    description:
      "Built modern Android applications using Kotlin and Jetpack Compose, focusing on clean architecture, UI performance, and Firebase integration.",
  },
 
];

/* -------------------------------------------------------------------------- */
/*                                ASSETS EXPORT                               */
/* -------------------------------------------------------------------------- */

export const assets = {
   profileImg,
  codechef,
  projectImages: {
    bmi,
    ecom,
    Finmate_logo,
    Taskmang,
    travel,
    recipe,
    portfolio_img,
    Learn2excel
  },
  techLogos: {
    c,
    cpp,
    css,
    firebase,
    git,
    github,
    html,
    java,
    javascript,
    jetpack,
    kotlin,
    mysql,
    python,
    reactjs,
    tailwindcss,
    vercel,
    vs_code,
    android_studio

  },
};
