import React from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { skillsData } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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

  return (
    <section id="skills" className="min-h-screen bg-[#e5e5e0] pt-20">
      <AnimatedHeaderSection
        subTitle={"The Stack that powers the systems"}
        title={"Skills"}
        text={"A curated list of technologies and tools I use to build scalable, high-performance applications."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      
      <div className="px-10 pb-28">
        <SkillCategory title="Languages" skills={skillsData.languages} index={0} />
        <SkillCategory title="Backend" skills={skillsData.backend} index={1} />
        <SkillCategory title="Frontend" skills={skillsData.frontend} index={2} />
        <SkillCategory title="Databases" skills={skillsData.databases} index={3} />
        <SkillCategory title="Cloud & Tools" skills={skillsData.cloudTools} index={4} />
        <SkillCategory title="Core Fundamentals" skills={skillsData.core} index={5} />
      </div>
    </section>
  );
};

export default Skills;
