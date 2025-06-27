import Image from "next/image";
import React from "react";

export default function Service() {
  return (
    <div className="flex flex-row mx-auto items-center w-screen h-[500px] justify-between gap-5 px-10 my-10">
      <div className="flex flex-row w-6/12 h-[500px] gap-5">
        <div className=" flex flex-col relative w-[50%] h-[100%]] gap-5">
          <div className="flex items-center justify-center relative w-[100%] h-[50%] bg-cover bg-[url('/images/asset_3(3).jpeg')] rounded-xl">
            <span className="text-white text-3xl text-center">
              MICE Program
            </span>
          </div>
          <div className="flex items-center justify-center relative w-[100%] h-[50%] bg-cover bg-[url('/images/pict_1.jpg')] rounded-xl">
            <span className="text-white text-3xl text-center">Apply Visa</span>
          </div>
        </div>
        <div className=" flex flex-col relative w-[50%] h-[100%]] gap-5">
          <div className="flex items-center justify-center relative w-[100%] h-[50%] bg-cover bg-[url('/images/asset(4).jpeg')] rounded-xl">
            <span className="text-white text-3xl text-center">
              Travel Accomodation
            </span>
          </div>
          <div className="flex items-center justify-center relative w-[100%] h-[50%] bg-cover bg-[url('/images/asset_3(9).jpeg')] rounded-xl">
            <span className="text-white text-3xl text-center">
              Group Ticket
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-6/12 h-full justify-between">
        <div className="w-[100%] flex flex-col mb-3 gap-2">
          <span className="text-4xl sm:text-6xl underline decoration-solid decoration-red-600 decoration-8">
            Service
          </span>
          <span className="text-4xl sm:text-6xl">We</span>
          <span className="text-4xl sm:text-6xl">Provide</span>
        </div>
        <p className="font-normal text-justify text-2xl">
          Providing end to end services is our goal, we breakdown our main
          services into four points.
        </p>
      </div>
    </div>
  );
}
