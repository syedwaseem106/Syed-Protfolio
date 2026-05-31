import React, { useContext } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { skillsData, skillsDataDE } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PathContext } from "../App";

const SkillCategory = ({ title, skills, index }) => {
  return (
    <div className="skill-category border-t border-black/20 py-8">
      <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20">
        <span className="text-sm text-black/40 font-mono">0{index + 1}</span>
        <div className="flex-1">
          <h3 className="text-2xl md:text-3xl font-light mb-6 uppercase">{title}</h3>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {skills.map((skill, i) => (
              <span key={i} className="text-lg md:text-xl text-black/70 hover:text-black transition-colors cursor-default whitespace-nowrap">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const { activePathway } = useContext(PathContext);
  const currentSkillsData = activePathway === "de" ? skillsDataDE : skillsData;
  
  useGSAP(() => {
    gsap.from(".skill-category", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".skill-category",
        start: "top 90%",
      },
    });
  }, []);

  const getSkillsForCurrentPath = () => {
    if (activePathway === "de") {
      return [
        { title: "Core Programming", skills: currentSkillsData.coreProgamming },
        { title: "Data Engineering & Pipelines", skills: currentSkillsData.dataEngineering },
        { title: "Big Data & Streaming", skills: currentSkillsData.bigDataStreaming },
        { title: "Databases & Storage", skills: currentSkillsData.databasesStorage },
        { title: "Cloud Platforms", skills: currentSkillsData.cloudPlatforms },
        { title: "DevOps & Tools", skills: currentSkillsData.devOpsTools },
        { title: "Analytics & Concepts", skills: currentSkillsData.analyticsConepts },
        { title: "Certifications", skills: currentSkillsData.certifications },
      ];
    } else {
      return [
        { title: "Languages", skills: currentSkillsData.languages },
        { title: "Backend", skills: currentSkillsData.backend },
        { title: "Frontend", skills: currentSkillsData.frontend },
        { title: "Databases", skills: currentSkillsData.databases },
        { title: "Cloud & Tools", skills: currentSkillsData.cloudTools },
        { title: "Core Fundamentals", skills: currentSkillsData.core },
      ];
    }
  };

  const skillsList = getSkillsForCurrentPath();

  return (
    <section id="skills" className="min-h-screen bg-[#e5e5e0] pt-20">
      <AnimatedHeaderSection
        subTitle={"The Stack that powers the systems"}
        title={"Skills"}
        text={activePathway === "de" 
          ? "A comprehensive toolkit of data engineering technologies, tools, and concepts used to build scalable data pipelines and infrastructure."
          : "A curated list of technologies and tools I use to build scalable, high-performance applications."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      <div className="px-10 pb-28">
        {skillsList.map((item, index) => (
          <SkillCategory 
            key={index}
            title={item.title} 
            skills={item.skills} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
