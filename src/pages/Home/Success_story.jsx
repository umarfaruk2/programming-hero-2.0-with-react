import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import person_1 from "../../assets/images/person_1.webp";
import person_2 from "../../assets/images/person_2.webp";
import person_3 from "../../assets/images/person_3.webp";
import person_4 from "../../assets/images/person_4.webp";
import bg from "../../assets/images/bg.png";
import { FaQuoteLeft } from "react-icons/fa";

const cards = [
  {
    batch: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem rem quia atque corrupti maiores voluptates assumenda fugit quidem error!",
    image: person_1,
    name: "Labib Ahmed",
    title: "Front End Developer",
    company: "Your Campus",
    card_body: "bg-card_body_1",
    card_batch: "bg-card_batch_1",
    card_more: "text-[#44AEFF]",
  },
  {
    batch: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem rem quia atque corrupti maiores voluptates assumenda fugit quidem error!",
    image: person_2,
    name: "Muhammad Shafi",
    title: "Backend End Developer",
    company: "Techboom",
    card_body: "bg-card_body_2",
    card_batch: "bg-card_batch_2",
    card_more: "text-[#33C5A9]",
  },
  {
    batch: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem rem quia atque corrupti maiores voluptates assumenda fugit quidem error!",
    image: person_3,
    name: "Muhammad Nurul",
    title: "Full Stack Developer",
    company: "Only Latest",
    card_body: "bg-card_body_3",
    card_batch: "bg-card_batch_3",
    card_more: "text-[#E335D8]",
  },
  {
    batch: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem rem quia atque corrupti maiores voluptates assumenda fugit quidem error!",
    image: person_4,
    name: "Muhammad Asif",
    title: "Full Stack Developer",
    company: "Thinky Storm",
    card_body: "bg-card_body_4",
    card_batch: "bg-card_batch_4",
    card_more: "text-[#F99C4F]",
  },
  {
    batch: 5,
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae dolorem rem quia atque corrupti maiores voluptates assumenda fugit quidem error!",
    image: person_2,
    name: "Muhammad Shafi",
    title: "Backend End Developer",
    company: "Techboom",
    card_body: "bg-card_body_2",
    card_batch: "bg-card_batch_2",
    card_more: "text-[#33C5A9]",
  },
];

const Success_story = () => {
  return (
    <div className="mt-10 pb-10">
      <div className="flex flex-col items-center mb-20 mt-24">
        <div>
          <h3 className="text-3xl md:text-5xl text-center font-extrabold bg-mobile_title inline-block bg-clip-text text-transparent">
            Success_Story
          </h3>
          <div className="flex justify-center">
            <div className="bg-custom-gra w-20 h-2 text-white mt-10"></div>
          </div>
        </div>
      </div>
      <Swiper
        spaceBetween={40}
        breakpoints={{
          640: { slidesPerView: 1},
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mx-8"
      >
        {/* Add more SwiperSlides as needed */}
        {cards.map((card) => (
          <SwiperSlide className="">
            <div
              className={`${card.card_body} lg:h-[25rem] md:h-[23rem] h-[21rem] rounded-xl`}
            >
              <div className="p-8">
                <div className="flex items-center justify-between">
                  <FaQuoteLeft color="white" size={26} />
                  <p
                    className={`${card.card_batch} text-white py-1 px-2 rounded-md`}
                  >
                    Batch {card.batch}
                  </p>
                </div>
                <p className="text-white mt-5">
                  Programming Hero built up my front-end developing knowledge
                  that boosted me to get this internship.{" "}
                  <span className={card.card_more}>...more</span>
                </p>
              </div>

              <div className="mt-12 flex items-center justify-between space-x-2 px-6">
                <div>
                  <img
                    src={card.image}
                    className="h-[78px] w-[78px] rounded-full"
                    alt=""
                  />
                </div>

                <div>
                  <h4 className="font-bold text-gray-100">{card.name}</h4>
                  <p className="text-gray-700 font-semibold text-sm">
                    Front End Developer
                  </p>
                  <p className="text-gray-400 text-sm font-semibold">
                    Your Campus
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Success_story;
