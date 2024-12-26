import { useState, useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import Button from "../Button/Button";
import { MENULINKS, TYPED_STRINGS } from "../../constants";
import Link from "next/link";

const options = {
  strings: TYPED_STRINGS,
  typeSpeed: 50,
  startDelay: 1500,
  backSpeed: 50,
  backDelay: 8000,
  loop: true,
};

const PastProjects = () => {

  const [lottie, setLottie] = useState(null);
  const sectionRef = useRef(null);
  const typedElementRef = useRef(null);
  const lottieRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "none" } })
        .to(sectionRef.current, { opacity: 1, duration: 2 })
        .from(
          sectionRef.current.querySelectorAll(".staggered-reveal"),
          { opacity: 0, duration: 0.5, stagger: 0.5 },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);


  useEffect(() => {
    if (lottie && lottieRef.current) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("../../public/lottie/lottie.json"),
      }); 

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[0].ref}
      className="w-full flex md:items-center py-2 2xl:container mx-auto xl:px-20 md:px-12 px-4 relative mb-2"
      style={{ opacity: 0 }}
    >
      <style global jsx>
        {`
          .typed-cursor {
            font-size: 2rem;
          }
        `}
      </style>
      <div className="flex flex-col pt-20 md:pt-0 select-none">
        
          <div className="staggered-reveal pt-2">
              <h2 className="text-4xl md:text-6xl font-light text-gray-400"> Past Projects</h2>
              <h2 className="text-[1.65rem] font-light md:max-w-lg max-w-sm mt-2 staggered-reveal">
              See All Past Projects{" "}
              </h2>
              <div className="staggered-reveal pt-2">
                
             
              <Button href="/pastProjectDashboard/" classes="link" type="primary" >View All Projects 
            
              </Button>

              </div>             
          </div>

      </div>
    </section>
  );
};

export default PastProjects;
