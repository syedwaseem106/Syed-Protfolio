import { Icon } from "@iconify/react";
import { useGSAP } from "@gsap/react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import Marquee from "../components/Marquee";
import { contactData, socials } from "../constants";
import gsap from "gsap";

const Contact = () => {
  const text = `I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.`;
  const items = [
    contactData.closingLine,
    contactData.closingLine,
    contactData.closingLine,
    contactData.closingLine,
    contactData.closingLine,
  ];
  useGSAP(() => {
    gsap.from(".social-link", {
      y: 100,
      opacity: 0,
      delay: 0.5,
      duration: 1,
      stagger: 0.3,
      ease: "back.out",
      scrollTrigger: {
        trigger: ".social-link",
      },
    });
  }, []);
  return (
    <section
      id="contact"
      className="flex flex-col justify-between min-h-screen bg-black"
    >
      <div>
        <AnimatedHeaderSection
          subTitle={"Let's build something scalable"}
          title={"Contact"}
          text={text}
          textColor={"text-white"}
          withScrollTrigger={true}
        />
        <div className="flex px-10 font-light text-white uppercase lg:text-[32px] text-[26px] leading-none mb-10">
          <div className="flex flex-col w-full gap-10">
            <div className="social-link">
              <h2>E-mail</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider lowercase md:text-2xl lg:text-3xl">
                {contactData.email}
              </p>
            </div>
            <div className="social-link">
              <h2>Phone</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <p className="text-xl tracking-wider md:text-2xl lg:text-3xl">
                {contactData.phone}
              </p>
            </div>
            <div className="social-link">
              <h2>Social Media</h2>
              <div className="w-full h-px my-2 bg-white/30" />
              <div className="flex flex-wrap gap-6 pt-2">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 group transition-all duration-300"
                  >
                    <Icon 
                      icon={social.icon} 
                      className="size-8 md:size-10 lg:size-12 group-hover:scale-125 transition-transform duration-300" 
                    />
                    <div className="flex flex-col">
                       <span className="text-[10px] md:text-xs tracking-widest text-white/40 group-hover:text-white transition-colors">
                        {social.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Marquee items={items} className="text-white bg-transparent text-6xl uppercase py-10" />
    </section>
  );
};

export default Contact;

