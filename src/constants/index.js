import {
    mobile,
    detection,
    graduation_cap,
    school,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    university,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    summary,
    jobit,
    tripguide,
    threejs,
    gfg,
    leetcode,
    github,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Leetcode",
      icon: leetcode,
      link:"https://leetcode.com/HackerRP07/"
    },
    {
      title: "Geeks for Geeks",
      icon: gfg,
      link:"https://auth.geeksforgeeks.org/user/riteshpa7z2w",
    },
    {
      title: "Github",
      icon: github,
      link:"https://github.com/HackerRP07",
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Schooling ",
      company_name: "10th",
      icon: school,
      iconBg: "#383E56",
      date: "Jun 2017 -April 2018",
      points: [
        "I did my schooling from City High-School in Sangli.",
        "I scored 96 percentage in SSC Board .",
        "I received a comprehensive education in school-time and developed essential skills such as critical thinking, problem-solving, and effective communication",
      ],
    },
    {
      title: "Junior College ",
      company_name: "12th",
      icon: university,
      iconBg: "#E6DEDD",
      date: "Jun 2019 -April 2020",
      points: [
        "I completed my 12th grade at Shraddha College of Science and Commerce in Ichalkaranji.",
        "I scored 83 percentage in my 12th grade.",
      ],
    },
    {
      title: "Graduation",
      company_name: "B.Tech CSE",
      icon: graduation_cap,
      iconBg: "#383E56",
      date: "July 2020 - present",
      points: [
        "I am pursuing my B.Tech degree from Walchand College of Engineering in Computer Science And Technology Branch.",
        "I have got 7.80 CGPA till 5th semester.",
        "Through various extracurricular activities and volunteer work, I have developed a range of soft skills including leadership, teamwork, communication, and adaptability.",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Garbage Detection With Tello Drone",
      description:
        "The Garbage Detection with Tello Drone project uses computer vision and machine learning to detect and classify garbage in public areas, with the aim of reducing litter and improving cleanliness in urban areas.",
      tags: [
        {
          name: "Computer-Vision",
          color: "blue-text-gradient",
        },
        {
          name: "YoloV5",
          color: "green-text-gradient",
        },
        {
          name: "Tello-Drone",
          color: "pink-text-gradient",
        },
      ],
      image: detection,
      source_code_link: "https://github.com/",
    },
    {
      name: "Text Summarization",
      description:
        "Text Summarization using NLP project showcases my proficiency in implementing advanced natural language processing techniques to automate summarization of large volumes of text, using frameworks such as NLTK, Spacy, and Gensim, which can save time and increase efficiency in processing text.",
      tags: [
        {
          name: "Spacy",
          color: "blue-text-gradient",
        },
        {
          name: "MERN",
          color: "green-text-gradient",
        },
        // {
        //   name: "scss",
        //   color: "pink-text-gradient",
        // },
      ],
      image: summary,
      source_code_link: "https://github.com/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };