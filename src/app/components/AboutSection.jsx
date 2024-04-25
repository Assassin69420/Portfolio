"use client";
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";

const achievementsList = [
  {
    metric: ["React", "Redux",
    "Bootstrap",
    "Tailwind",
    "Html",
    "Css"],
    value: "FRONTEND",
  },
  {
    metric: [ "Node.js",
      "Express"],
    value: "BACKEND",
  },
  {
    metric: ["MongoDB"
      ,"MySQL"],
    value: "DATABASE",
  },
  {
    metric: ["GitHub",
    "Jenkins",
    "Docker"],
    value: "DEV-OPS",
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="mt-5">
      <br /><br /><br /><br /><br />
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-12 flex flex-col items-center justify-center">
      <div className="sm:border-white sm:border rounded-md py-8 px-16 flex flex-col items-center justify-center">
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-4xl font-bold text-white mb-4 items-center flex flex-row justify-center">About Me</h2>
      <p className="text-base lg:text-lg">
        I am a full stack web developer with a passion for creating
        interactive and responsive web applications. I have experience
        working with JavaScript, React, Redux, Node.js, Express, MongoDB,
        Bootstrap, HTML, CSS and GitHub. I am a quick learner and I am always
        looking to expand my knowledge and skill set. I am a team player and
        I am excited to work with others to create amazing applications.
      </p>
  </div>  
      </div>
    </div>
    <section className="text-white" id="skills">
      <br />
      <br /><br /><br /><br /><br />
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-white sm:border rounded-md py-8 px-16 ">
      <h2 className="text-5xl font-bold text-white mb-4 items-center flex sm:flex-col">Skills</h2>
      <div className="flex sm:flex-row items-start justify-between mt-6">
  {achievementsList.map((achievement, index) => (
    <div className="flex flex-col items-center text-center" key={index}>
      <h2 className="text-white text-4xl font-bold mb-4">{achievement.value}</h2>
      <ul className="text-[#ADB7BE]">
        {achievement.metric.map((skill, skillIndex) => (
          <li key={skillIndex} className="flex items-center">
            <svg
              className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
      </div>
    </div>
    </section>
    
    <div className="mt-10" id="education">
      <br /><br /><br />  
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16" >
      <div className="sm:border-white sm:border rounded-md py-8 px-16 ">
      <h2 className="text-5xl font-bold text-white mb-4 items-center flex sm:flex-col">Education</h2>
      <div className="flex sm:flex-col items-start justify-between mt-6">
        <h3 className="text-4xl ">East West College Of Engineering (C.S.E)</h3>
        <p className="text-2xl">2020 - Present</p>
        <br />
        <h6 className="text-1xl">Cgpa: 7.6</h6>
        <br />
        <h3 className="text-4xl ">Kendriya Vidyalaya - No.1 Jalahalli (West)  12th</h3>
        <p className="text-2xl">2019 - 2020</p>
        <br />
        <h6 className="text-1xl">Percentage: 71%</h6>
        <br />
        <h3 className="text-4xl ">Kendriya Vidyalaya - No.1 Jalahalli (West) 10th</h3>
        <p className="text-2xl">2017 - 2018</p>
        <br />
        <h6 className="text-1xl">Percentage: 73%</h6>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default AboutSection;
