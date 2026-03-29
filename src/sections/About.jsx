import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { aboutData, heroData } from "../constants";

const About = () => {
  const text = aboutData.title;
  const aboutText = `${aboutData.content}\n\nWhen I’m not building:\n${aboutData.notBuilding.map(item => `• ${item}`).join('\n')}`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"Engineering Excellence, System by System"}
        title={"About"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-28 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60 text-pretty">
        <div className="w-full lg:w-1/3">
           <img
            ref={imgRef}
            src="images/portrait.jpg"
            alt={heroData.name}
            className="w-full rounded-3xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="w-full lg:w-2/3">
          <AnimatedTextLines text={aboutText} />
        </div>
      </div>
    </section>
  );
};

export default About;
