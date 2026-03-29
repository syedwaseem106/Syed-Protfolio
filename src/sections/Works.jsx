import { Icon } from "@iconify/react/dist/iconify.js";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { projects } from "../constants";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Works = () => {
  const overlayRefs = useRef([]);
  const text = `Featured projects that have been meticulously
    crafted with passion to drive
    results and impact.`;

  useGSAP(() => {
    gsap.from("#project", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: "#project",
      },
    });
  }, []);

  const handleMouseEnter = (index) => {
    if (window.innerWidth < 768) return;
    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.fromTo(
      el,
      {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      },
      {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        duration: 0.2, // Slightly slower for smoothness
        ease: "power2.out",
      }
    );
  };

  const handleMouseLeave = (index) => {
    if (window.innerWidth < 768) return;
    const el = overlayRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
      duration: 0.25,
      ease: "power2.in",
    });
  };

  return (
    <section id="work" className="flex flex-col min-h-screen">
      <AnimatedHeaderSection
        subTitle={"Logic meets Aesthetics, Seamlessly"}
        title={"Works"}
        text={text}
        textColor={"text-black"}
        withScrollTrigger={true}
      />
      <div className="relative flex flex-col font-light mt-10">
        {projects.map((project, index) => (
          <div
            key={project.id}
            id="project"
            className="relative flex flex-col py-10 cursor-pointer group"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* background overlay animation */}
            <div
              ref={(el) => {
                overlayRefs.current[index] = el;
              }}
              className="absolute inset-0 hidden md:block duration-200 bg-black -z-10 clip-path"
            />

            {/* title & arrow */}
            <div className="flex justify-between items-center px-10 md:px-12 text-black transition-colors duration-500 group-hover:text-white">
              <h2 className="lg:text-[42px] text-[32px] leading-tight font-light">
                {project.name}
              </h2>
              <Icon icon="lucide:arrow-up-right" className="md:size-10 size-8 transition-opacity duration-500 opacity-40 group-hover:opacity-100" />
            </div>

            {/* description & impact */}
            <div className="px-10 md:px-12 mt-4 space-y-4">
              <p className="text-xl text-black/60 transition-colors duration-500 group-hover:text-white/80 max-w-2xl leading-relaxed">
                {project.description}
              </p>
              
              {/* impact points - hidden by default, shown on desktop hover and always on mobile */}
              <div className="md:max-h-0 md:opacity-0 overflow-hidden md:group-hover:max-h-[500px] md:group-hover:opacity-100 transition-all duration-700 ease-in-out">
                <ul className="mt-4 space-y-2">
                  {project.impact.map((point, i) => (
                    <li key={i} className="text-base md:text-lg text-black/50 md:text-white/70 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 bg-black/20 md:bg-white/30 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              {/* mobile specific impact (always visible) */}
              <div className="md:hidden">
                <ul className="mt-4 space-y-2">
                  {project.impact.map((point, i) => (
                    <li key={i} className="text-sm text-black/60 flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-black/20 rounded-full flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* tech stack */}
              <div className="flex flex-wrap mt-6 gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 border border-black/10 text-black/50 text-sm rounded-full transition-all duration-500 group-hover:border-white/20 group-hover:text-white/70 group-hover:bg-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>


            
            {/* divider */}
            <div className="w-full h-px mt-10 bg-black/10 transition-colors duration-500 group-hover:bg-white/10" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
