import React from "react";
import course_image from "../../assets/images/web-thumbnail.webp";
import course_image2 from "../../assets/images/phitron-thumbnail.webp";
import course_icon_1 from "../../assets/images/course_icon_1.svg";
import course_icon_2 from "../../assets/images/course_icon_2.svg";

const Courses = () => {
  return (
    <section className="">
      {/* extra icon */}
            <img src={course_icon_1} className="slg:block hidden absolute right-16 top-[67rem] h-[200px] w-[200px]" alt="" />
            <img src={course_icon_2} className="slg:block hidden absolute left-16 top-[135rem] h-[200px] w-[200px]" alt="" />
      {/* end extra icon */}
      <div className="flex flex-col items-center -mb-12 mt-10">
          <div>
            <h3 className="text-[#FCE6FA] text-3xl sm:text-5xl font-extrabold">
              Our Courses_
            </h3>
            <div className="bg-custom-gra w-20 h-2 text-white sm:ml-[9rem] ml-[4rem] mt-10"></div>
          </div>
        </div>
      <div className="pb-10 mt-16 bg-course_img bg-cover w-full h-auto pt-10">
        

        <div className="grid grid-flow-row items-center lg:grid-cols-2 mt-20 xl:mx-28 lg:mx-20 mx-10 gap-12">
          <div className="bg-custom-gra2 rounded-md">
            <img src={course_image} alt="" className="py-5 px-6 w-full" />
            <div className="pl-6 pb-2">
              <h4 className="text-white text-2xl font-bold">
                Complete Web Development
              </h4>
              <button className="bg-custom-gra py-2 px-3 rounded-md text-white my-4">
                Let's Code
              </button>
            </div>
          </div>
          <div className="">
            <h3 className="text-2xl font-bold bg-text-color inline-block text-transparent bg-clip-text">
              Kickstart your journey in Web Development
            </h3>
            <p className="text-white my-4">
              Welcome to Programming Hero! Dive into the world of modern web
              development with a focus on MERN stack - MongoDB, Express.js,
              React, and Node.js course from the beginning of your journey until
              you get an internship or a full-time job.
            </p>
            <div className="flex space-x-6">
              <button className="bg-custom-gra py-2 px-4 rounded-md text-white">
                Explore
              </button>
              <button className="text-[#E855DE] border border-[#E855DE] py-2 px-4 rounded-md">
                Success
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row items-center lg:grid-cols-2 mt-20 xl:mx-28 lg:mx-20 mx-10 gap-12">
        <div className="text-left lg:row-start-1 row-start-2">
          <h3 className="text-2xl font-bold bg-phitron_title inline-block text-transparent bg-clip-text lg:text-right">
            Start your programming journey in CSE Fundamental
          </h3>
          <p className="text-white my-3 lg:text-right">
            Welcome to Phitron! This comprehensive program is designed to lay
            the foundation for your Computer Science and Engineering journey.
            Explore core concepts, problem solving, algorithms, data structures,
            cloud computing, and more. Get ready to build a solid understanding
            of CSE essentials with our expert-led instruction.
          </p>
          <div className="flex space-x-6 lg:justify-end">
            <button className="bg-phitron_btn py-2 px-4 rounded-md text-white">
              Explore
            </button>
            <button className="text-[#1976d2] border border-[#1976d2] py-2 px-4 rounded-md">
              Curriculum
            </button>
          </div>
        </div>
        <div className="bg-phitron_card rounded-md">
          <img src={course_image2} alt="" className="py-5 px-6 w-full" />
          <div className="pl-6 pb-2">
            <h4 className="text-white text-2xl font-bold">
              CSE Fundamentals with Phitron
            </h4>
            <button className="bg-phitron_btn py-2 px-3 rounded-md text-white my-4">
              Let's Code
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
