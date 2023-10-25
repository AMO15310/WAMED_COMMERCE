
"use client"
import React from "react";
import Image from "next/image";
import { Data } from "@/utils/products";


const HomeShopping: React.FC = () => {
  return (
    <div className="pt-[6rem] w-screen">
      <div className="flex justify-center">
        <div className="flex bg-white rounded-xl w-[40%]">
          <Image src="/search.svg" alt="search" width={20} height={20} />
          <input
            type="search"
            name=""
            id=""
            className="p-3 border-none focus:outline-none h-[2rem] w-[100%] rounded-xl text-black"
          />
        </div>
      </div>
        <div className="text-white">Home</div>
      <div className=" p-3 my-[2rem] h-[12rem] overflow-clip  gap-4 bg-white flex justify-evenly">
        {Data.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex"> 
            {category.Home.map((item, index) => (
              <div key={index}>
                <img src={`/${item}.jpeg`} alt={item} />
              </div>
            ))}
          </div>
        ))}
      </div>
        <div className="text-white">Music</div>
      <div className=" p-3 my-[2rem] h-[12rem] gap-4  overflow-clip bg-white  justify-evenly flex">
        {Data.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex"> 
            {category.Music.map((item, index) => (
              <div key={index}>
                <img src={`/${item}.jpeg`} alt={item} className="w-min h-min" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-white">Phones</div>
      <div className=" p-3 my-[2rem] h-min gap-4  overflow-clip bg-white  justify-evenly flex">
        {Data.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex"> 
            {category.Phones.map((item, index) => (
              <div key={index}>
                <img src={`/${item}`} alt={item} className="w-min h-min" />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="text-white">More</div>
      <div className=" p-3 my-[2rem] h-min gap-4  overflow-clip bg-white  justify-evenly flex">
        {Data.map((category, categoryIndex) => (
          <div key={categoryIndex} className="flex"> 
            {category.More.map((item, index) => (
              <div key={index}>
                <img src={`/${item}`} alt={item} className="w-min h-min" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeShopping;
