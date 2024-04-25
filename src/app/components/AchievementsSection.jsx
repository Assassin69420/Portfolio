"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,000",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;





<div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
<section className="text-white" id="about">
  <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
      <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
      <p className="text-base lg:text-lg">
        I am a full stack web developer with a passion for creating
        interactive and responsive web applications. I have experience
        working with JavaScript, React, Redux, Node.js, Express, MongoDB,
        Bootstrap, HTML, CSS and GitHub. I am a quick learner and I am always
        looking to expand my knowledge and skill set. I am a team player and
        I am excited to work with others to create amazing applications.
      </p>
  </div>    

<div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
<div class="flex items-center justify-between mb-0">
</div>
<div class="flow-root">
  <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
        <li class="py-3 sm:py-4">
            <div class="flex items-center">
            </div>
        </li>
    </ul>
        
</div>

      <div className="flex flex-row justify-center mt-8">
        <TabButton
          selectTab={() => handleTabChange("skills")}
          active={tab === "skills"}
        >
          {" "}
          Skills{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("education")}
          active={tab === "education"}
        >
          {" "}
          Education{" "}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange("certifications")}
          active={tab === "certifications"}
        >
          {" "}
          Certifications{" "}
        </TabButton>
      </div>
      <div className="mt-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </div>
  </div>
</section>
</div>