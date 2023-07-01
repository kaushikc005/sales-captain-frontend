import healthcareLogo from "../assets/logos/healthcare.png";
import dentalLogo from "../assets/logos/dental.png";
import homeServicesLogo from "../assets/logos/homeServices.png";
import retailLogo from "../assets/logos/retail.png";
import hospitalityLogo from "../assets/logos/hospitality.png";
import automotiveLogo from "../assets/logos/automotive.png";
import restaurantLogo from "../assets/logos/restaurant.png";
import wellnessLogo from "../assets/logos/wellness.png";
import professionalLogo from "../assets/logos/professional.png";
import careServicesLogo from "../assets/logos/careServices.png";
import financialLogo from "../assets/logos/financial.png";
import recreationalLogo from "../assets/logos/recreational.png";

import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { onWheel } from "../utils/onWheelScroll";
import usePreventBodyScroll from "../hooks/usePreventBodyScroll";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ServicesSection = () => {
  const serviceArray = [
    {
      name: "Healthcare",
      image: healthcareLogo,
    },
    {
      name: "Dental",
      image: dentalLogo,
    },
    {
      name: "Home Services",
      image: homeServicesLogo,
    },
    {
      name: "Retail",
      image: retailLogo,
    },
    {
      name: "Hospitality",
      image: hospitalityLogo,
    },
    {
      name: "Automotive",
      image: automotiveLogo,
    },
    {
      name: "Restaurant",
      image: restaurantLogo,
    },
    {
      name: "Wellness",
      image: wellnessLogo,
    },
    {
      name: "Professional Services",
      image: professionalLogo,
    },
    {
      name: "Care Services",
      image: careServicesLogo,
    },
    {
      name: "Financial Services",
      image: financialLogo,
    },
    {
      name: "Recreational Services",
      image: recreationalLogo,
    },
  ];

  const { disableScroll, enableScroll } = usePreventBodyScroll();

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <BsArrowLeft
        onClick={() => scrollPrev()}
        className="right-arrow text-4xl font-extrabold cursor-pointer p-2 bg-blue-500 rounded-full
        text-white"
      />
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <BsArrowRight
        onClick={() => scrollNext()}
        className=" text-4xl font-extrabold cursor-pointer p-2 bg-blue-500 rounded-full
        text-white"
      />
    );
  };

  return (
    <main className="flex flex-col relative my-8 w-screen ">
      <h1 className="xs:text-2xl md:text-4xl text-black font-bold self-center m-auto">
        Services offered by us
      </h1>
      <section
        className="p-10 z-10"
        onMouseEnter={disableScroll}
        onMouseLeave={enableScroll}
      >
        <ScrollMenu
          LeftArrow={LeftArrow}
          RightArrow={RightArrow}
          onWheel={onWheel}
          className="p-20"
        >
          {serviceArray.map((service, index) => (
            <figure className="p-4 w-60 flex flex-col items-center cursor-pointer" key={index}>
              <img
                src={service.image}
                alt="#"
                width="150px"
                className="xs:w-28 md:w-40 bg-[#5871A1] p-8 rounded-tr-extraLarge 
                 rounded-b-extraLarge
              hover:bg-blue-500 "
              />
              <figcaption className="break-words text-xl font-bold my-2">
                {service.name}
              </figcaption>
            </figure>
          ))}
        </ScrollMenu>
      </section>
      <aside className="w-screen ">
        <img
          src="curve-3.png"
          alt="curve2"
          className="absolute z-0 top-20 right-0 "
          width="350px"
        />
      </aside>
    </main>
  );
};

export default ServicesSection;
