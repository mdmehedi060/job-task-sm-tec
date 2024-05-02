import React from "react";
import Card from "./Card";
import Loan from "./Loan";
import Testimonials from "./Testimonials";

const BuyerSearch = () => {
  return (
    <div>
      <div className="flex gap-10 my-16">
        <div className="">
          <button className=" bg-[#0059B1] p-4 text-white">
            properties (400)
          </button>
        </div>
        <div>
          <button className="p-4 bg-[#ECF5FF] text-black">
            New Projects (400)
          </button>
        </div>
        <div>
          <button className="p-4 bg-[#ECF5FF] text-black">Secondary</button>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold">400 results for rental property</h2>
      </div>
      <Card></Card>
      <Loan></Loan>
      <Testimonials></Testimonials>
    </div>
  );
};

export default BuyerSearch;
