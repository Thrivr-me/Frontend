import { useRef } from 'react'
import { Element, Link as LinkScroll } from "react-scroll";
import { Button } from '../'
import { BackgroundBeams } from "../ui/background-beams";
import { cn } from "../../lib/utils";
import { Spotlight } from "../ui/Spotlight";
import { motion } from "framer-motion";
import Lottie from 'lottie-react';
import animationData from '../../assets/C1uvKgNEqy.json'

const Hero = () => {
  const animationRef = useRef(null);

  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 mb-[200rem]">
      <Element name="hero">
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              Empowering Creators & Businesses
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              Thriving Online Made Easy
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
              Thrivr empowers entrepreneurs with customized storefronts, essential tools, and seamless workflows, enabling limitless growth potential.
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Get Started</Button>
            </LinkScroll>
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            {/*<img
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
            />*/}

          <Lottie lottieRef={animationRef} animationData={animationData} className="scale-[0.534] size-1230 max-lg:h-auto" />
          </div>
        </div>
      </Element>
      <BackgroundBeams />
    </section>
  );
};

export default Hero;
