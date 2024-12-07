import React from "react";
import { motion } from "framer-motion";

const Exprience: React.FC = () => {
  return (
    <div
      id="exprience"
      className="lg:-mt-[120px] max-w-[1240px] mx-auto px-4 lg:px-0"
    >
      <div className="text-center lg:mt-[100px] lg:pt-10 flex justify-center ">
        <motion.button
          className="btn text-white nunito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          My Journey
        </motion.button>
      </div>

      <div className="grid grid-cols-1 mt-[100px] lg:grid-cols-2 gap-10 nunito">
        <motion.div
          className="exprience"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="header-text text-white">Experience</h2>
          <div className="flex flex-col gap-5 mt-[23px]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
            >
              <p className="text-[16px] text-[#F6F7FA]">Dec 2023 - Present</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Youthminds Tech{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                Executive Web Developer{" "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              <p className="text-[16px] text-[#F6F7FA]">Sept 2023 - Dec 2023</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                I Education{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">Website Manager </p>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="skill"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="header-text nunito">Skills</h2>
          <div className="mt-[23px] flex flex-col gap-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
              className="flex gap-2 md:gap-2 items-center"
            >
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Programming Languages:{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                C, C++, Python, JavaScript{" "}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Front-End Technologies:{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal">
                  React JS, TypeScript, React Router, React Hooks, Next JS,
                  Redux, HTML, CSS3, Tailwind CSS, Bootstrap-5{" "}
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Back-End Technologies:{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal">
                  Node JS, Express JS, MySQL, PostgreSQL, Prisma, MongoDB,
                  Mongoose, REST API, Socket.IO{" "}
                </span>
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Exprience;
