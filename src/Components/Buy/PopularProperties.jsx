import React from "react";

const PopularProperties = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Popular Properties</h1>
        <p className="underline text-xl text-[#0059B1]">See all propeety</p>
      </div>
      <div className="flex gap-8 mx-auto items-center justify-center">
        <div className="my-8 flex gap-8">
          {/* card 1-stret */}
          <div className=" w-96 bg-[#F9FAFB] shadow-xl">
            <figure className="relative">
              <img
                className=" h-[200px]"
                src="https://i.ibb.co/6n6rDWZ/Banner-Image-1.png"
                alt="Shoes"
              />
            </figure>
            <div className="absolute -mt-12 ml-4 w-20 p-1  gap-4 flex text-center bg-[#FDF0E7] ">
              <img
                className=" w-8 h-8"
                src="https://i.ibb.co/SDTNgmN/Gallery.png"
                alt=""
              />
              <p className="font-bold text-xl">20</p>
            </div>
            <div className="card-body">
              <div className="flex justify-between">
                <button className="btn bg-[#C5E2FF] text-xl">Apartment</button>
                <div className="flex items-center gap-4">
                  <img
                    className="h-3 w-3"
                    src="https://i.ibb.co/jkZRxMY/Rectangle-26.png"
                    alt=""
                  />
                  <p className="font-bold text-xl">Ready to Move</p>
                </div>
              </div>
              <h2 className="card-title text-2xl font-bold">
                SunnySlope Suites
              </h2>
              <div className="flex gap-4">
                <img src="https://i.ibb.co/zNSH97p/fi-bs-marker.png" alt="" />
                <p>Meadowshire Park, Greenfield, USA</p>
              </div>

              <p className="font-bold text-3xl my-4">$ 250000</p>
            </div>
          </div>
          {/* card-end */}
          {/* card 2-stret */}
          <div className=" w-96 bg-[#F9FAFB] shadow-xl">
            <figure className="relative">
              <img
                className=" h-[200px]"
                src="https://i.ibb.co/jLSXXmd/Banner-Image-2.png"
                alt="Shoes"
              />
            </figure>
            <div className="absolute -mt-12 ml-4 w-20 p-1  gap-4 flex text-center bg-[#FDF0E7] ">
              <img
                className=" w-8 h-8"
                src="https://i.ibb.co/SDTNgmN/Gallery.png"
                alt=""
              />
              <p className="font-bold text-xl">20</p>
            </div>
            <div className="card-body">
              <div className="flex justify-between">
                <button className="btn bg-[#C5E2FF] text-xl">Apartment</button>
                <div className="flex items-center gap-4">
                  <img
                    className="h-3 w-3"
                    src="https://i.ibb.co/jkZRxMY/Rectangle-26.png"
                    alt=""
                  />
                  <p className="font-bold text-xl">Ready to Move</p>
                </div>
              </div>
              <h2 className="card-title text-2xl font-bold">
                SunnySlope Suites
              </h2>
              <div className="flex gap-4">
                <img src="https://i.ibb.co/zNSH97p/fi-bs-marker.png" alt="" />
                <p>Meadowshire Park, Greenfield, USA</p>
              </div>

              <p className="font-bold text-3xl my-4">$ 250000</p>
            </div>
          </div>
          {/* card-end */}
          {/* card 3-strat */}
          <div className=" w-96 bg-[#F9FAFB] shadow-xl">
            <figure className="relative">
              <img
                className=" h-[200px]"
                src="https://i.ibb.co/dtbDs14/Banner-Image-4.png"
                alt="Shoes"
              />
            </figure>
            <div className="absolute -mt-12 ml-4 w-20 p-1  gap-4 flex text-center bg-[#FDF0E7] ">
              <img
                className=" w-8 h-8"
                src="https://i.ibb.co/SDTNgmN/Gallery.png"
                alt=""
              />
              <p className="font-bold text-xl">20</p>
            </div>
            <div className="card-body">
              <div className="flex justify-between">
                <button className="btn bg-[#C5E2FF] text-xl">Apartment</button>
                <div className="flex items-center gap-4">
                  <img
                    className="h-3 w-3"
                    src="https://i.ibb.co/jkZRxMY/Rectangle-26.png"
                    alt=""
                  />
                  <p className="font-bold text-xl">Ready to Move</p>
                </div>
              </div>
              <h2 className="card-title text-2xl font-bold">
                SunnySlope Suites
              </h2>
              <div className="flex gap-4">
                <img src="https://i.ibb.co/zNSH97p/fi-bs-marker.png" alt="" />
                <p>Meadowshire Park, Greenfield, USA</p>
              </div>

              <p className="font-bold text-3xl my-4">$ 250000</p>
            </div>
          </div>
          {/* card-end */}
        </div>
      </div>
    </div>
  );
};

export default PopularProperties;
