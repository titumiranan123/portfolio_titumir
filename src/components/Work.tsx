import React, { useState } from "react";
import podcast from "./../assets/podcast.png";
import shorts from "./../assets/shorts.png";
import talking from "./../assets/talkinghead.png";
import montagemotion from "./../assets/montagemotion.png";
import itechpark from "./../assets/itechpark.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import required modules
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (current: number) => setCurrentSlide(current),
  };
  return (
    <div
      id="works"
      className="lg:max-w-[1240px] md:max-w-[820px] max-w-[350px]  overflow-hidden mx-auto px-4"
    >
      {/* Section Header */}
      <div className="flex justify-center items-center mt-[60px] lg:mt-[120px] flex-col mb-[60px]">
        <div className="btn text-white">Work</div>
        <h2 className="font-bold text-center text-white text-[24px] sm:text-[28px] md:text-[35px] lg:text-[48px]">
          Explore My Works
        </h2>
      </div>
      <Slider {...settings}>
        {workJson.map((work, index) => (
          <Workcard
            key={index}
            pic={work.image}
            title={work.title}
            link={work.project_link}
          />
        ))}
      </Slider>
      {/* Custom Dots */}
      <div className="custom-dots">
        {workJson.map((_, index) => (
          <button
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      {/* <div className="line mt-[60px] lg:mt-[118px] w-full h-[1px] bg-gray-700"></div> */}
    </div>
  );
};

export default Work;
