import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/AboutImage.png";

const About: React.FC = () => {
  return (
    <div className="lg:mt-[172px] max-w-[1240px] mx-auto">
      <div className="bg lg:w-[1240px] w-[100%] h-[1px] overflow-hidden"></div>
      <div
        id="about"
        className="flex justify-center flex-wrap lg:flex-nowrap lg:gap-10 gap-14 md:mb-0 mb-3 items-center"
      >
        {/* Image Section */}
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img
            className="w-[590px] h-[750px] img-fluid"
            alt="Profile"
            src={profile}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Button */}
          <motion.button
            className="btn w-[180px] text-[white]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            About
          </motion.button>

          {/* Title */}
          <motion.h2
            className="text-[48px] text-[#F6F7FA]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            Web Developer
          </motion.h2>

          {/* Description */}
          <motion.div
            className="text-[#919BBA] text-[16px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
          >
            Hello, I&apos;m{" "}
            <span className="text-[#F6F7FA] font-semibold">
              Md Titumir Anan
            </span>
            , a passionate{" "}
            <span className="text-[#F6F7FA] font-semibold">
              Junior Frontend Developer
            </span>{" "}
            from Bangladesh. I have a knack for turning design concepts into{" "}
            <span className="text-[#F6F7FA] font-semibold">responsive</span> and
            visually appealing websites. With over 1.5 years of experience in
            the field, I have worked on various projects using{" "}
            <span className="text-[#F6F7FA] font-semibold">
              HTML, CSS, Tailwind CSS,Redux, Zustand, JavaScript, TypeScript,
              React JS, Next.js
            </span>
            , and I complement these technical abilities with my expertise in{" "}
            <span className="text-[#F6F7FA] font-semibold">cybersecurity</span>.
            I thrive on creating seamless user experiences and am committed to
            staying{" "}
            <span className="text-[#F6F7FA] font-semibold">
              ahead of web development trends
            </span>
            . My goal is to deliver top-notch projects that ensure satisfaction.
          </motion.div>
        </motion.div>
      </div>

      <div className="bg lg:w-[1240px] w-full h-[1px] overflow-hidden"></div>
    </div>
  );
};

export default About;
