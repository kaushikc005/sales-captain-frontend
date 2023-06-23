import React from "react";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const ReviewSection = () => {
  const reviewArray = [
    {
      image: person1,
      name: "Simon Page",
      work: "Owner, Mamagato Restaurant",
      text: "In 2022 so far we are hitting our best months in customers & revenue even in an economic downturn",
      growth: "40%",
      growthType: "Average net profit increase",
    },
    {
      image: person2,
      name: "Daniel Wilson",
      work: "Marketing head, The Air Conditioning Company",
      text: "Our rating improved from 3.3 to 4.6 & reviews are up 200%, we are getting more leads from Google",
      growth: "200%",
      growthType: "New review growth",
    },
    {
      image: person3,
      name: "Debbie Rose",
      work: "Debbie Rose",
      text: "Effective text & email marketing campaign on SalesCaptain helped us make additional $150k in two weeks",
      growth: "$150k",
      growthType: "Generated with marketing campaign",
    },
  ];
  return (
    <section className="flex flex-col items-center relative w-screen overflow-x-clip">
      <hr></hr>
      <aside className="w-screen"></aside>
      <h1 className="xs:text-xl md:text-3xl font-bold my-4 text-center">
        What people have achieved with our assistance?
      </h1>
      <Carousel autoPlay infiniteLoop className="flex flex-col items-center ">
        {reviewArray.map((review, index) => (
          <section
            key={index}
            className="flex justify-center items-center md:gap-10 xs:w-screen xs:p-4 
            md:w-1/2 m-auto md:p-10 bg-gray-50 rounded-lg relative my-8 shadow-md box hover:scale-105 transition-all ease-in"
          >
            <figure>
              <img
                src={review.image}
                alt="person"
              />
              <figcaption className="m-2">
                <h1 className="xs:text-lg md:text-xl ">{review.name}</h1>
                <p className="text-gray-400 md:text-lg">{review.work}</p>
              </figcaption>
            </figure>
            <aside className="w-1/2">
              <span className="md:text-xl  break-words italic my-8">
                "{review.text}"
              </span>
              <br />
              <span className="xs:text-xl md:text-5xl font-bold py-8">{review.growth}</span>
              <br />
              <span className=" xs:text-xl md:text-2xl font-bold">{review.growthType}</span>
            </aside>
            <img
              src="src\assets\quote.png"
              alt="quoteIcon"
              className="quoteIcon absolute right-10 bottom-20"
            />
          </section>
        ))}
      </Carousel>
      <img
        src="src\assets\curve-3.png"
        alt="curve2"
        className="absolute z-0 -top-60 right-0 "
        width="350px"
      />
    </section>
  );
};

export default ReviewSection;
