import { useEffect, useRef } from "react";
import { MENULINKS } from "../../constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Imgcomp from "@/components/WorksationCompo/Imgcomp";

import SystemSpecs from "@/components/WorksationCompo/SystemSpecs";
import VideoTemplate from "@/components/Customization/VideoTemplate";

const Wstation = ({ isDesktop, clientHeight }) => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const quoteRef = useRef(null);

  useEffect(() => {
    let projectsScrollTrigger;
    let projectsTimeline;

    if (isDesktop) {
      [projectsTimeline, projectsScrollTrigger] = getProjectsSt();
    } else {
      const projectWrapper =
        sectionRef.current.querySelector(".project-wrapper");
      if (projectWrapper) {
        projectWrapper.style.width = "calc(100vw - 1rem)";
        projectWrapper.style.overflowX = "scroll";
      }
    }

    const [revealTimeline, revealScrollTrigger] = getRevealSt();

    return () => {
      projectsScrollTrigger && projectsScrollTrigger.kill();
      projectsTimeline && projectsTimeline.kill();
      revealScrollTrigger && revealScrollTrigger.kill();
      revealTimeline && revealTimeline.progress(1);
    };
  }, [sectionRef, sectionTitleRef, isDesktop]);

  const getRevealSt = () => {
    const revealTl = gsap.timeline({ defaults: { ease: "none" } });

    revealTl.from(
      sectionRef.current.querySelectorAll(".staggered-reveal"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    const scrollTrigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top bottom",
      end: "bottom bottom",
      scrub: 0,
      animation: revealTl,
    });

    return [revealTl, scrollTrigger];
  };

  const getProjectsSt = () => {
    const timeline = gsap.timeline({ defaults: { ease: "none" } });

    const projectWrapper = sectionRef.current.querySelector(".project-wrapper");

    if (projectWrapper) {
      const sidePadding =
        document.body.clientWidth -
        sectionRef.current.querySelector(".inner-container").clientWidth;
      const elementWidth = sidePadding + projectWrapper.clientWidth;
      sectionRef.current.style.width = `${elementWidth}px`;
      const width = window.innerWidth - elementWidth;
      const duration = `${(elementWidth / window.innerHeight) * 100}%`;
      timeline
        .to(sectionRef.current, { x: width })
        .to(sectionTitleRef.current, { x: -width }, "<");

      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: duration,
        scrub: 0,
        pin: true,
        animation: timeline,
        pinSpacing: "margin",
      });

      return [timeline, scrollTrigger];
    } else {
      // Return empty timeline and scrollTrigger if the element doesn't exist
      return [gsap.timeline(), null];
    }
  };

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[2].ref}
      className={`${
        isDesktop && "min-h-screen"
      } w-full relative select-none section-container`}
    >
      {/* Section Content */}
      <div className="my-[7rem] flex flex-col justify-center h-full">
        <div
          className="flex flex-col inner-container transform-gpu"
          ref={sectionTitleRef}
        >


          <div
            className={`${
              clientHeight > 650 ? "pt-0 pb-5" : ""
            } `}
          >
            <h1
              ref={quoteRef}
              className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
            >
              My{" "}
              <span className="about-3 font-bold text-gradient">
                Workstation
              </span>{" "}
            </h1>
            <p className="text-[1.05rem] tracking-widest text-gray-light-1 text-center ">
              A peek of my workspace and tools
            </p>
          </div>
        </div>





        <div
            className={`${
              clientHeight > 650 ? "pt-10 pb-20" : ""
            } `}
          >
        <Imgcomp src="../front_enhanced-min.jpg" alt="Sample Image 3"  />
        </div>
        
      <SystemSpecs/>

      <VideoTemplate
  src="https://player.vimeo.com/video/1042456040?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
  className="my-4" // Add extra Tailwind classes
  width="80%" // Custom width
  aspectRatio="50%" // Custom aspect ratio
/>


<VideoTemplate
  src="https://player.vimeo.com/video/1042311897?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479"
  className="my-4" // Add extra Tailwind classes
  width="80%" // Custom width
  aspectRatio="50%" // Custom aspect ratio
/>




        <div className={`${clientHeight > 650 ? "mt-[80rem]" : "mb-2"} `}>
          <h1
            ref={quoteRef}
            className="font-bold text-[1rem] md:text-2xl lg:text-[2rem] text-center float-left mt-0 mb-0 pb-0"
          >
            Automated Fuel System{" "}
          </h1>

          <h2 className="text-[1rem] font-light md:max-w-lg max-w-sm mt-0 mt-50">
            Guru-Gobind-Singh College of Engineering (B.E)
          </h2>
        </div>

        <div className="flex-col justify-center">
          {/* Video Section 1 */}
          <div className="w-full">
            <div
              className="mt-3 relative overflow-hidden pb-[40%] h-0"
              style={{ float: "left", width: "70%" }}
            >
              
            </div>
          </div>

          <div></div>
        </div>

        <p className=" my-3 tracking-widest text-gray-light-1  mb-5">
          Developed With : IOT-Arduino Uno R3, PlatformIO, C++
        </p>

        {/* Video Frame Before the Section Content */}
        {/* Project Wrapper Removed */}
      </div>
    </section>
  );
};

export default Wstation;
