import img1 from "../../assets/Image/tech/8.png"
import img2 from "../../assets/Image/tech/image 34.png"
import img3 from "../../assets/Image/tech/6.png"
import img4 from "../../assets/Image/tech/image 29.png"
import img5 from "../../assets/Image/tech/image 23.png"

function DealsOffers() {
  return (
    <div className="w-[85dvw] lg:w-[77dvw] mx-auto border border-gray-200 bg-white rounded-md p-3 lg:p-4 mt-3">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-start h-full">
        {/* Left section - Title and Countdown */}
        <div className="col-span-1 lg:col-span-3 flex flex-col p-3 gap-4">
          <div>
            <h2 className="text-lg font-bold text-gray-800">Deals and offers</h2>
            <h3 className="text-sm text-gray-500">Hygiene equipments</h3>
          </div>
          
          <div className="flex gap-2">
            <div className="bg-gray-800 text-white rounded-md p-2 w-14 flex flex-col items-center">
              <span className="text-2xl font-bold">04</span>
              <span className="text-xs mt-1">Days</span>
            </div>
            <div className="bg-gray-800 text-white rounded-md p-2 w-14 flex flex-col items-center">
              <span className="text-2xl font-bold">13</span>
              <span className="text-xs mt-1">Hour</span>
            </div>
            <div className="bg-gray-800 text-white rounded-md p-2 w-14 flex flex-col items-center">
              <span className="text-2xl font-bold">34</span>
              <span className="text-xs mt-1">Min</span>
            </div>
            <div className="bg-gray-800 text-white rounded-md p-2 w-14 flex flex-col items-center">
              <span className="text-2xl font-bold">56</span>
              <span className="text-xs mt-1">Sec</span>
            </div>
          </div>
        </div>

        {/* Right section - Product Cards */}
        <div className="col-span-1 lg:col-span-9 flex items-center justify-center h-full">
          <div className="flex w-full justify-around ">
            {/* Product 1 */}
            <div className="flex flex-col items-center">
              <img src={img1} alt="Smart watches" className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">Smart watches</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] text-xs font-bold rounded-full px-3 py-1">-25%</span>
            </div>
            
            {/* Product 2 */}
            <div className="flex flex-col items-center">
              <img src={img2} alt="Laptops" className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">Laptops</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] text-xs font-bold rounded-full px-3 py-1">-15%</span>
            </div>
            
            {/* Product 3 */}
            <div className="flex flex-col items-center">
              <img src={img3} alt="GoPro cameras" className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">GoPro cameras</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] text-xs font-bold rounded-full px-3 py-1">-40%</span>
            </div>
            
            {/* Product 4 */}
            <div className="flex flex-col items-center">
              <img src={img4} alt="Headphones" className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">Headphones</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] text-xs font-bold rounded-full px-3 py-1">-25%</span>
            </div>
            
            {/* Product 5 */}
            <div className="flex flex-col items-center">
              <img src={img5} alt="Canon cameras" className="w-20 h-20 object-contain mb-2" />
              <p className="text-sm font-medium text-gray-700 mb-1">Canon cameras</p>
              <span className="bg-[#FFE3E3] text-[#EB001B] text-xs font-bold rounded-full px-3 py-1">-25%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealsOffers;
