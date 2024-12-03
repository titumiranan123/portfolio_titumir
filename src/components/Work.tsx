import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import podcast from "./../assets/podcast.png";
import shorts from "./../assets/shorts.png";
import talking from "./../assets/talkinghead.png";
import montagemotion from "./../assets/montagemotion.png";
import itechpark from "./../assets/itechpark.png";
import Workcard from "./Workcard";

const workJson = [
  {
    image: montagemotion,
    title: "Montage Motion",
    project_link: "https://montagemotion.com/",
  },
  {
    image: podcast,
    title: "Podcast Landing Page",
    project_link: "https://podcast.montagemotion.com/",
  },
  {
    image: shorts,
    title: "Shorts Landing Page",
    project_link: "https://shorts.montagemotion.com/",
  },
  {
    image: talking,
    title: "Talking Head Landing",
    project_link: "https://talkinghead.montagemotion.com/",
  },
  {
    image: itechpark,
    title: "I-Tech Park",
    project_link: "https://talkinghead.montagemotion.com/",
  },
];

const Work: React.FC = () => {
  return (
    <div id="works" className="lg:-mt-[82px]  max-w-[1240px] mx-auto">
      <div className="flex justify-center items-center lg:mt-[120px]  flex-col mb-[82px]">
        <div className="btn text-white ">Work</div>
        <div className="font-bold md:text-[48px] inter text-white text-[35px] ">
          Explore My Works
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {workJson.map((work, index) => (
          <SwiperSlide key={index}>
            <Workcard
              pic={work.image}
              title={work.title}
              link={work.project_link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="line lg:mt-[118px] lg:w-[1240px] h-[1px] overflow-hidden"></div>
    </div>
  );
};

export default Work;
