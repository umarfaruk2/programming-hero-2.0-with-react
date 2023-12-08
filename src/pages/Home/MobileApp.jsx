import React from "react";
import mobile from "../../assets/images/mobile.webp";
import star from "../../assets/images/star.svg";
import google_play from "../../assets/images/google_play.svg";
import apple_store from "../../assets/images/apple_store.svg";
import "./style.css";

const MobileApp = () => {
  return (
    <div className="mt-60 h-auto pb-10">
      <div className="flex flex-col items-center mb-12 mt-10">
        <div>
          <h3 className="text-3xl md:text-5xl text-center font-extrabold bg-mobile_title inline-block bg-clip-text text-transparent">
            Are you absolute_Beginner?
          </h3>
          <div className="flex justify-center">

          <div className="bg-custom-gra w-20 h-2 text-white mt-10"></div>
          </div>
        </div>
      </div>

      <div className="bg-mobile_bg bg-cover bg-center w-full lg:h-[140vh] pb-10 extra_bg">

        <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1 gap-x-24 items-center llg:mx-40 lg:mx-28">
          <div className="mt-40 lg:col-span-1 lg:flex-none flex justify-center">
            <img src={mobile} className="w-[300px] h-[600px] justify-self-center" alt="" />
          </div>

          <div className="lg:mt-40 mt-20 lg:col-span-2 llg:mx-10">
            <h3 className="text-[#FCE6FA] font-extrabold text-4xl mb-8 lg:block hidden">
              Our Mobile App
            </h3>

            <div className="text-white flex bg-mobile_status items-center justify-between sm:px-10 px-3 lg:py-14 py-8 rounded-lg lg:mx-0 sm:mx-10 mx-3">
              <div>
                <h3 className="lg:text-4xl text-2xl font-extrabold mb-3">1.5M+</h3>
                <p className="text-sm text-center">Worldwide</p>
                <p className="text-sm text-center">Learners!</p>
              </div>
              <div className="bg-gray-400 h-20 w-[1px]"></div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="lg:text-4xl text-2xl font-extrabold mb-3 ">4.7</h3>
                  <img src={star} className="w-10 h-10 -mt-4" alt="" />
                </div>
                <p className="text-sm text-center">Positive</p>
                <p className="text-sm text-center">Reviews!</p>
              </div>

              <div className="bg-gray-400 h-20 w-[1px]"></div>
              <div>
                <h3 className="lg:text-4xl text-2xl font-extrabold mb-3">12+</h3>
                <p className="text-sm text-center">Skill based</p>
                <p className="text-sm text-center">Courses</p>
              </div>
            </div>

            <p className="text-white my-8 lg:text-left text-center">Learn programming the fun way with the Programming Hero app! Download now on the App Store or Google Play.</p>

            <div className="flex space-x-7 lg:justify-normal justify-center">
              <img src={apple_store} className="sm:w-[194px] sm:h-[56px] w-[140px] h-40px " alt="" />
              <img src={google_play} className="sm:w-[194px] sm:h-[56px] w-[140px] h-40px " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
