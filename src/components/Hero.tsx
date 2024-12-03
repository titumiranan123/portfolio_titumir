import React, { useState } from "react";

const Hero: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-10 relative max-w-[1240px] mx-auto">
      <nav className="text-white flex justify-between items-center">
        <div className="logo">
          <span className="font-[900] nunito  uppercase text-white nunito text-[24px] leading-[29px]">
            Titumir &nbsp;
          </span>
          <span className="font-[500px] nunito text-[24px] leading-[29px] uppercase">
            ANAN
          </span>
        </div>
        <div className="md:flex gap-5 justify-center items-center hidden">
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
          <button className="btn -mt-[6px] nunito font-[500] text-[16px] text-white hover:bg-white hover:text-[#6919ff] hover:border-transparent  transition-all duration-150 hover:scale-105">
            Say Hello
          </button>
        </div>
        <div className="md:hidden block">
          <div
            className={`flex flex-col gap-2 group   ${open && "hidden"}`}
            onClick={() => setOpen(!open)}
          >
            <span className=" w-8 h-[2px] bg-white border border-white text-black flex"></span>
            <span className=" w-8 h-[2px] bg-white border border-white text-black flex"></span>
            <span className=" w-8 h-[2px] bg-white border border-white text-black flex"></span>
          </div>
        </div>
      </nav>
      {/* heading content  */}
      <div className="mt-[141px]  flex flex-col lg:flex-row  items-center gap-1 lg:gap-5">
        <div className="font-bold  lg:w-[834px] lg:text-[78px] md:text-[78px] text-[58px] leading-[64px] md:leading-[106px] h-[214px]">
          <span className="text-[#919BBA]   ">Turning </span>{" "}
          <span className="text-[#F6F7FA]    ">Code</span>{" "}
          <span className="text-[#919BBA]    ">Into</span>
          <br className="hidden md:block" />
          <span className="text-[#919BBA]    ">Creative </span>{" "}
          <span className="text-[#F6F7FA]    ">Solutions</span>
        </div>
        <div>
          <p className="lg:w-[417px] flex lg:mt-28 lg:h-[78px] nunito font-[500] text-[18px] text-[#F6F7FA] mb-5">
            Empowering the digital landscape with precision and passion,
            transforming ideas into immersive online experiences.
          </p>
        </div>
      </div>
      <div className="flex justify-center md:flex-row  mt-[30px] items-center md:gap-10 gap-4  md:mt-[75px]">
        <button className="text-white border hover:border-none rounded-s-full  rounded-e-full md:px-[39px] px-5 py-4 md:py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]transition-all duration-150 hover:scale-105 hover:border-transparent">
          Explore My Works
        </button>
        <button className="text-white border hover:border-none  rounded-s-full  rounded-e-full md:px-[39px] px-5 py-4 md:py-[20px] hover:bg-[#6919FF] text-[16px] font-[500]transition-all duration-150 hover:scale-105 hover:border-transparent">
          Download CV
        </button>
      </div>
      {/* mobile  */}
      {open && (
        <div className="h-[800px] bg-[#0b0d22ee] z-20">
          <div
            onClick={() => setOpen(!open)}
            className={`${
              !open && "hidden"
            } flex flex-col absolute top-14  right-0 z-30 gap-2 `}
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

export default Hero;
