import React from "react";

const Meet = () => {
  return (
    <div>
      <div className="hero h-[304px] bg-white my-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="w-[384px] h-[304px] rounded-lg shadow-2xl"
          />
          <div>
            <div className="flex gap-2 justify-start text-center">
              <p className="w-[51px] h-[4px] bg-[#E61] mt-4"></p>
              <h2 className="text-3xl text-[#EE6611]">
                Meet the Team For Book Consultation
              </h2>
            </div>
            <h1 className="text-5xl font-bold">
              Meet the stewards of your <br /> heritage journey
            </h1>
            <p className="py-6">
              each member an embodiment of expertise and warmth, dedicated to
              guiding you <br /> home, every step of the way. et a id nisi.
            </p>
            <div className="">
              <button className=" bg-[#0059B1] p-4 text-white">
                Book Consultation Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
