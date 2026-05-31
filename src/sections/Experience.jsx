import React, { useContext } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { experienceDE, experienceSDE } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { PathContext } from "../App";

const Experience = () => {
  const { activePathway } = useContext(PathContext);

  useGSAP(() => {
    gsap.from(".experience-card", {
      y: 100,
      opacity: 0,
      delay: 0.3,
      duration: 1,
      stagger: 0.2,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".experience-card",
      },
    });
  }, []);

  // Render DE or SDE experiences depending on active pathway
  const list = activePathway === "de" ? experienceDE : experienceSDE;

  return (
    <section id="experience" className="flex flex-col min-h-screen bg-[#e5e5e0]">
      <AnimatedHeaderSection
        subTitle={"Professional Journey"}
        title={"Experience"}
        text={"Building scalable data infrastructure and production-grade systems."}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light mt-10 px-10 pb-28">
        {list.map((exp, index) => (
          <div
            key={index}
            className="experience-card group border-t border-black/20 py-10"
          >
            <div className="flex flex-col gap-4">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl font-light text-black">
                    {exp.company}
                  </h3>
                  <p className="text-lg md:text-xl text-black/60 font-light mt-2">
                    {exp.title}
                  </p>
                </div>
                <div className="flex flex-col text-sm md:text-base text-black/50 font-light whitespace-nowrap">
                  <span>{exp.period}</span>
                  <span className="text-black/40">{exp.location}</span>
                </div>
              </div>

              {/* Points */}
              <ul className="mt-6 space-y-4 ml-4 md:ml-0">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-black/70 flex items-start gap-4 leading-relaxed"
                  >
                    <span className="mt-2 w-1 h-1 bg-black/40 rounded-full flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
