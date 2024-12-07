import React from "react";
import { motion } from "framer-motion";
import resume from "./../assets/Md_Titumir_Anan_Resume.pdf";
import { Link } from "react-router-dom";
const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Controls the delay between child animations
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth and responsive transition
    },
  };

  return (
    <div className="pt-10 relative max-w-[1240px] mx-auto">
      <div className="mt-[141px] flex flex-col lg:flex-row items-center gap-1 lg:gap-5">
        {/* Animated Heading */}
        <motion.div
          className="font-bold lg:w-[834px] lg:text-[68px] md:text-[78px] text-[45px] leading-[64px] md:leading-[106px] h-[214px]"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={textVariants} className="text-[#919BBA]">
            Trasforming{" "}
          </motion.span>
          <motion.span variants={textVariants} className="text-[#F6F7FA]">
            Ideas
          </motion.span>
          <motion.span variants={textVariants} className="text-[#919BBA]">
            {" "}
            Into
          </motion.span>
          <br className="hidden md:block" />
          <motion.span variants={textVariants} className="text-[#919BBA]">
            Creative{" "}
          </motion.span>
          <motion.span variants={textVariants} className="text-[#F6F7FA]">
            Solutions
          </motion.span>
        </motion.div>

        {/* Animated Paragraph */}
        <motion.div
          className="lg:w-[517px] flex  lg:h-[78px] nunito font-[500] text-[18px] text-[#F6F7FA] mb-5"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
        >
          As a Junior Frontend Developer and Cybersecurity Enthusiast, I
          specialize in creating secure, responsive websites that deliver
          exceptional user experiences. Let’s work together to bring your ideas
          to life with innovative, scalable, and secure digital solutions.
        </motion.div>
      </div>
      <div className="flex justify-center md:flex-row  mt-[30px] items-center md:gap-10 gap-4  md:mt-[75px]">
        <Link
          to="#works"
          className="text-white border hover:border-none rounded-s-full  rounded-e-full md:px-[39px] px-5 py-4 md:py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]transition-all duration-150 hover:scale-105 hover:border-transparent"
        >
          Explore My Works
        </Link>
        <button className="text-white border hover:border-none rounded-s-full rounded-e-full md:px-[39px] px-5 py-4 md:py-[20px] hover:bg-[#6919FF] text-[16px] font-[500] transition-all duration-150 hover:scale-105 hover:border-transparent">
          <a
            href={resume}
            download="Resume_Of_Md_Titumir_Anan.pdf"
            className="w-full h-full flex items-center justify-center"
          >
            Download CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
