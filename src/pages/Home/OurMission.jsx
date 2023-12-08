import React from "react";
import team from "../../assets/images/team.webp";

const OurMission = () => {
  return (
    <div className="h-auto">
      <div className="flex flex-col items-center mb-20 mt-24">
        <div>
          <h3 className="text-3xl md:text-5xl text-center font-extrabold bg-mobile_title inline-block bg-clip-text text-transparent">
            Our Mission_
          </h3>
          <div className="flex justify-center">
            <div className="bg-custom-gra w-20 h-2 text-white mt-10"></div>
          </div>
        </div>
      </div>

      <div className="grid grid-flow-row items-center lg:grid-cols-2 mt-20 xl:mx-24 lg:mx-20 md:mx-10 mx-5 gap-5">
        <div className="col-span-1">
          <img
            src={team}
            alt=""
            className="w-full lg:w-[680px] lg:h-[390px] rounded-xl"
          />
        </div>
        <div className="col-span-1">
          <p className="text-white my-4">
            <span className="text-[#E855DE] font-bold">Why:</span> We are
            passionate about empowering individuals to transform their lives
            through the power of coding. We believe that everyone should have
            access to high-quality, affordable coding education, regardless of
            their background or experience.
            <br /> <br />
            <span className="text-[#E855DE] font-bold">What:</span> We provide a
            comprehensive range of online programming courses, from
            beginner-level Web Development to advanced CSE Fundamentals and
            Advanced Programming Courses. Our courses are designed to be
            engaging, effective, and tailored to the needs of today's learners.
            <br /> <br />
            <span className="text-[#E855DE] font-bold">How:</span> We nurture
            our students in a personalized and supportive environment that
            fosters confidence and success. Our friendly and dedicated
            instructors are always available to guide and mentor our students,
            ensuring they receive the support they need to achieve their coding
            goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
