import React from "react";

const Team = () => {
  return (
    <div>
      <div>
        <div className="flex gap-2 justify-start text-center">
          <p className="w-[51px] h-[4px] bg-[#E61] mt-4"></p>
          <h2 className="text-3xl text-[#EE6611]">Our Teem</h2>
        </div>
        <h1 className="text-4xl font-bold">
          Discover the Faces Behind Our Success
        </h1>
      </div>
      <div className="flex gap-4 justify-center my-6">
        <img
          className="h-[417px] w-[384px] "
          src="https://i.ibb.co/zX0Zjp0/mehedi-picture.jpg"
          alt=""
        />
        <img
          className="h-[417px] w-[384px] "
          src="https://i.ibb.co/zX0Zjp0/mehedi-picture.jpg"
          alt=""
        />
        <img
          className="h-[417px] w-[384px] "
          src="https://i.ibb.co/zX0Zjp0/mehedi-picture.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Team;
