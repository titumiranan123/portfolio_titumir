import React from "react";

const Exprience: React.FC = () => {
  return (
    <div
      id="exprience"
      className="lg:-mt-[120px]  max-w-[1240px] mx-auto px-4 lg:px-0"
    >
      <div className="text-center lg:mt-[100px] lg:pt-10 flex justify-center ">
        <button className="btn text-white nunito ">My Journey</button>
      </div>

      <div className="grid grid-cols-1 mt-[100px] lg:grid-cols-2 gap-10 nunito">
        <div className="exprience">
          <h2 className="header-text text-white">Exprience</h2>
          <div className="flex flex-col gap-5 mt-[23px]">
            <div>
              <p className="text-[16px] text-[#F6F7FA]">Dec 2023 - Present</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Youthminds Tech{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                Excutive Web Devloper{" "}
              </p>
            </div>
            <div>
              <p className="text-[16px] text-[#F6F7FA]">Sept 2023 - Dec 2023</p>
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                I Education{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">Website Manager </p>
            </div>
          </div>
        </div>
        <div className="skill ">
          <div className="">
            <h2 className="header-text nunito">Skill </h2>
          </div>
          <div className="mt-[23px] flex flex-col gap-2">
            <div className="flex gap-2  md:gap-2 items-center">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Programing Language :{" "}
              </h2>
              <p className="text-[16px] text-[#F6F7FA]">
                C , C++ , Python , JavaScript{" "}
              </p>
            </div>
            <div className="">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Front-End Technologies :{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal ">
                  React Js ,TypeScript , React Router, React Hooks ,Next Js,
                  Redux , HTML , CSS3 , Tailwind CSS , Bootstrap-5{" "}
                </span>
              </h2>
            </div>
            <div className="">
              <h2 className="text-[24px] font-bold text-[#F6FCFF]">
                Back-End Technologies :{" "}
                <span className="text-[16px] text-[#F6F7FA] font-normal">
                  Node Js, Express Js , MySql , PostgreSQL ,Prisma ,MongoDB,
                  Mongoose , REST Api , Socket.IO{" "}
                </span>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
