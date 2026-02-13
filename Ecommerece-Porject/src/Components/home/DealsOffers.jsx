import React from "react";

function DealsOffers() {
  return (
    <div className="w-[85dvw] h-[30dvh] lg:w-[77dvw] mx-auto border border-gray-300 bg-white rounded-md p-3 lg:p-4 mt-3 ">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start h-full">
        <div className="sideBox col-span-3 flex flex-col p-3 gap-3">
          <div className="msg ">
            <h2 className="text-xl font-bold">Deals and offers</h2>
            <h3 className="text-gray-500">Hygiene equipments</h3>
          </div>
          <div className="countDown flex">
            <div className=" w-15 broder-2 border-[#606060] bg-[#606060] text-white font-bold rounded-[4px] mr-1 p-1  text-center ">
              04 <span className="font-medium"> Days </span>
            </div>
            <div className=" w-15 broder-2 border-[#606060] bg-[#606060] text-white font-bold rounded-[4px] mr-1 p-1  text-center ">
              13 <span className="font-medium">Hour</span>
            </div>
            <div className="w-15 broder-2 border-[#606060] bg-[#606060] text-white font-bold rounded-[4px] mr-1 p-1  text-center ">
              34 <span className="font-medium">Min</span>
            </div>
            <div className=" w-15 broder-2 border-[#606060] bg-[#606060] text-white font-bold rounded-[4px] mr-1 p-1  text-center ">
              56 <span className="font-medium">Second</span>
            </div>
          </div>
        </div>
        <div className="products h-full border-2 border-red-500 col-span-9">
          <div className="w-full flex">
            <div className="col-span-1 w-[20%] h-[24dvh] border-2 border-black">
              a
            </div>
            <div className="col-span-1 w-[20%] h-[24dvh] border-2 border-black">
              a
            </div>
            <div className="col-span-1 w-[20%] h-[24dvh] border-2 border-black">
              a
            </div>
            <div className="col-span-1 w-[20%] h-[24dvh] border-2 border-black">
              a
            </div>
            <div className="col-span-1 w-[20%] h-[24dvh] border-2 border-black">
              a
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsOffers;
