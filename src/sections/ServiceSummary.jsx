import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useContext } from "react";
import { PathContext } from "../App";
const ServiceSummary = () => {
  const { activePathway } = useContext(PathContext);
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      {activePathway === "sde" ? (
        <>
          <div id="title-service-1">
            <p>Architucture</p>
          </div>
          <div
            id="title-service-2"
            className="flex items-center justify-center gap-3 translate-x-16"
          >
            <p className="font-normal">Development</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Deployment</p>
          </div>
          <div
            id="title-service-3"
            className="flex items-center justify-center gap-3 -translate-x-48"
          >
            <p>APIs</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p className="italic">Frontends</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Scalability</p>
          </div>
          <div id="title-service-4" className="translate-x-48">
            <p>Databases</p>
          </div>
        </>
      ) : (
        <>
          <div id="title-service-1">
            <p>ETL</p>
          </div>
          <div
            id="title-service-2"
            className="flex items-center justify-center gap-3 translate-x-16"
          >
            <p className="font-normal">Streaming</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Modeling</p>
          </div>
          <div
            id="title-service-3"
            className="flex items-center justify-center gap-3 -translate-x-48"
          >
            <p>Orchestration</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p className="italic">Warehousing</p>
            <div className="w-10 h-1 md:w-32 bg-gold" />
            <p>Monitoring</p>
          </div>
          <div id="title-service-4" className="translate-x-48">
            <p>Data Storage</p>
          </div>
        </>
      )}
    </section>
  );
};

export default ServiceSummary;
