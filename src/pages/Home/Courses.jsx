import React from "react";
import course_image from "../../assets/images/web-thumbnail.webp";

const Courses = () => {
  return (
    <div className="pb-10 mt-16 bg-course_img bg-cover w-full h-auto">
      <div className="flex flex-col items-center">
        <div>
          <h3 className="text-[#FCE6FA] text-3xl sm:text-5xl font-extrabold">
            Our Courses_
          </h3>
          <div className="bg-custom-gra w-20 h-2 text-white sm:ml-[9rem] ml-[4rem] mt-10"></div>
        </div>
      </div>

      <div className="grid grid-flow-row items-center lg:grid-cols-2 mt-20 xl:mx-28 lg:mx-20 mx-10 gap-12">
        <div className="bg-custom-gra2 rounded-md">
          <img src={course_image} alt="" className="py-5 px-6 w-full" />
          <div className="pl-4 pb-3">
            <h4 className="text-white text-2xl font-bold">Complete Web Development</h4>
            <button className="bg-custom-gra py-2 px-3 rounded-md text-white my-4">Let's Code</button>
          </div>
        </div>
        <div className="">
        <h3 className="text-2xl font-bold bg-text-color inline-block text-transparent bg-clip-text">Kickstart your journey in Web Development</h3>
        <p className="text-white my-3">Welcome to Programming Hero! Dive into the world of modern web development with a focus on MERN stack - MongoDB, Express.js, React, and Node.js course from the beginning of your journey until you get an internship or a full-time job.</p>
        <div className="flex space-x-6">
            <button className="bg-custom-gra py-2 px-4 rounded-md text-white">Explore</button>
            <button className="text-[#E855DE] border border-[#E855DE] py-2 px-4 rounded-md">Success</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Courses;
