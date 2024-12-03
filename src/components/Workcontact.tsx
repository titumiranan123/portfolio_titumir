import React from "react";

const Workconatact: React.FC = () => {
  return (
    <div className=" bg-[linear-gradient(90deg,_rgba(202,_207,_221,_0.2)_22.4%,_#cacfdd_51.01%,_rgba(202,_207,_221,_0.2)_79.69%)] lg:w-[1200px] md:h-[300px] h-[275px] lg:h-[180px] md:w-[720px] w-[99%] mx-auto rounded-[16px] overflow-hidden p-[2px]">
      <div className="grid z-30 h-full w-full  rounded-[17px] bg-[#0C1021] grid-cols-1 lg:grid-cols-3 p-10 lg:gap-4 gap-4">
        <div className="text-[#F6F7FA] flex justify-start items-center text-[24px] font-bold ">
          Start a Project
        </div>
        <div className="text-[#F6F7FA] text-[16px] flex justify-start items-center">
          Interested in working together? We should have a time to chat and
          discuss about the project.
        </div>
        <div className="flex lg:justify-end items-center mt-4">
          <button className="btn lg:w-1/3 bg-[#6919FF] text-[#F6F7FA]">
            Say Hello
          </button>
        </div>
      </div>
    </div>
  );
};

export default Workconatact;
