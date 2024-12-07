import React, { useState } from "react";
import { motion } from "framer-motion";
const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const logoVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.9 },
    show: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const hamburgerVariants = {
    open: {
      rotate: 45,
      y: 6,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      rotate: 0,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  return (
    <div className="relative px-4 lg:px-0">
      <motion.nav
        className="text-white max-w-[1240px] mx-auto py-8 flex justify-between items-center"
        initial="hidden"
        animate="show"
      >
        {/* Logo */}
        <motion.div className="logo" variants={logoVariants}>
          <span className="font-[900] nunito uppercase text-white text-[24px] leading-[29px]">
            Titumir &nbsp;
          </span>
          <span className="font-[500] nunito text-[24px] leading-[29px] uppercase">
            ANAN
          </span>
        </motion.div>

        {/* Desktop Links */}
        <motion.div
          className="md:flex gap-5 justify-center items-center hidden"
          variants={linkVariants}
        >
          <motion.a
            className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105 hover:border-transparent hover:text-[#6919ff]"
            href={"#about"}
          >
            ABOUT
          </motion.a>
          <motion.a
            className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105 hover:text-[#6919ff]"
            href={"#works"}
          >
            WORKS
          </motion.a>
          <motion.a
            className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105 hover:text-[#6919ff]"
            href={"#exprience"}
          >
            Exprience
          </motion.a>

          <motion.button className="btn -mt-[6px] nunito font-[500] text-[16px] text-white hover:bg-white hover:text-[#6919ff] hover:border-transparent transition-all duration-150 hover:scale-105">
            Say Hello
          </motion.button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden block">
          <motion.div
            className={`flex flex-col gap-2 group ${open && "hidden"}`}
            onClick={() => setOpen(!open)}
            variants={hamburgerVariants}
            animate={open ? "open" : "closed"}
          >
            <motion.span className="w-8 h-[2px] bg-white border border-white" />
            <motion.span className="w-8 h-[2px] bg-white border border-white" />
            <motion.span className="w-8 h-[2px] bg-white border border-white" />
          </motion.div>
        </div>

        {/* Mobile Menu Links */}
        {open && (
          <motion.div
            className="md:hidden block bg-[#333] absolute top-16 right-0 left-0 py-4 px-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.a
              onClick={() => setOpen(!open)}
              className="block text-white py-2 hover:bg-[#6919ff] transition-all duration-150"
              href="#about"
            >
              ABOUT
            </motion.a>
            <motion.a
              onClick={() => setOpen(!open)}
              className="block text-white py-2 hover:bg-[#6919ff] transition-all duration-150"
              href="#works"
            >
              WORKS
            </motion.a>
            <motion.a
              onClick={() => setOpen(!open)}
              className="block text-white py-2 hover:bg-[#6919ff] transition-all duration-150"
              href="#exprience"
            >
              Exprience
            </motion.a>

            <motion.button className="block text-white py-2 mt-3 w-full text-center hover:bg-[#6919ff] transition-all duration-150">
              Say Hello
            </motion.button>
          </motion.div>
        )}
      </motion.nav>
      {open && (
        <div className="h-[800px] bg-[#0b0d22ee] z-20 ">
          <div
            onClick={() => setOpen(!open)}
            className={`${
              !open && "hidden"
            } flex flex-col absolute top-14  right-4 z-30 gap-2 `}
          >
            <span className=" w-8 h-[3px] bg-white border border-white text-black  flex rotate-45"></span>
            <span className=" absolute -top-[0px] w-8 h-[3px] bg-white border border-white text-black flex -rotate-45"></span>
          </div>
          <div className="mx-auto absolute z-20 bg-[#0b0d22ee] top-0 w-[100%] h-full flex flex-col gap-5 pt-20 items-center text-white">
            <a
              className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105"
              href={"#works"}
            >
              WORKS
            </a>
            <a
              className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105"
              href={"#exprience"}
            >
              Exprience
            </a>
            <a
              className="nunito font-bold text-[16px] leading-[19.36px] uppercase transition-all duration-150 hover:scale-105"
              href={"#about"}
            >
              ABOUT
            </a>
            <button className="btn -mt-[6px] nunito font-[500] text-[16px] ">
              Say Hello
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
