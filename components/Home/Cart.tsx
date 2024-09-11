import React from 'react';
import HomeHeader from "@/components/Header";

const CartPage = () => {
  return (
    <><header className="fixed top-0 left-0 right-0 bg-white  text-gray-800 text-center py-4 shadow-md z-50">
      <h1 className="text-5xl font-ledger text-black">Spectrum ✦ Shift</h1>
    </header><div className="bg-gray-50 ">
        

          <div className="flex font-ledger ">
  {/* Left Half - Cart Section */}
  <div className="w-2/3 pl-20 max-w-4xl p-8 h-full">
    <div className="flex space-x-8 border-b mb-8 pt-20">
      <span className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-2">Cart</span>
      <span className="text-gray-500">Address</span>
      <span className="text-gray-500">Payment</span>
    </div>

    <h2 className="text-lg font-semibold mb-4">Your Cart</h2>

    {/* For Body */}
    <div className="mb-8">
  <h3 className="text-black font-semibold mb-2">For Mind</h3>
  <div className="bg-white rounded-lg flex items-start space-x-4 border-2 border-black">
    <div className="pt-10 pl-2">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
    </div>
    <div className="flex flex-col items-start flex-1">
    <img src="assets/image 92.png" alt="Course Image" className="w-20 h-10 object-contain mt-2" />
 
      <h4 className="text-lg font-semibold">Detox Wellness Program</h4>
      <p className="text-gray-500">With Barbara Olin | 3 days Course | Online</p>
      <p className="text-lg font-semibold">$299</p>
    </div>
    <img src="assets/bgcard1.png" alt="Course Image" className="w-40 h-40 object-cover" />
  </div>
  <div className="bg-gray-200 p-4 rounded-md">
    <p className="text-green-600 mt-2 text-lg">
      Note: You will get the booking details and enrollment details on registered Mobile number
    </p>
  </div>
</div>


    {/* For Mind */}
    <div className="mb-8">
  <h3 className="text-black font-semibold mb-2">For Mind</h3>
  <div className="bg-white rounded-lg flex items-start space-x-4 border-2 border-black">
    <div className="pt-10 pl-2">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
    </div>
    <div className="flex flex-col items-start flex-1">
    <img src="assets/image 93.png" alt="Course Image" className="w-20 h-10 object-contain mt-2" />
 
      <h4 className="text-lg font-semibold">The Champion Mindset</h4>
      <p className="text-gray-500">With Barbara Olin | 3 days Course | Online</p>
      <p className="text-lg font-semibold">$299</p>
    </div>
    <img src="assets/bgcard2.png" alt="Course Image" className="w-40 h-40 object-cover" />
  </div>
  <div className="bg-gray-200 p-4 rounded-md">
    <p className="text-green-600 mt-2 text-lg">
      Note: You will get the booking details and enrollment details on registered Mobile number
    </p>
  </div>
</div>


    {/* For Soul */}
    <div className="mb-8">
  <h3 className="text-black font-semibold mb-2">For Soul</h3>
  <div className="bg-white rounded-lg flex items-start space-x-4 border-2 border-black">
    <div className="pt-10 pl-2">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-purple-600" />
    </div>
    <div className="flex flex-col items-start flex-1">
    <img src="assets/image 94.png" alt="Course Image" className="w-10 h-10 object-cover mt-2" />
 
      <h4 className="text-lg font-semibold">A Yogi's Guide to Joy</h4>
      <p className="text-gray-500">With Barbara Olinn  |   3 days Course  |   Online   </p>
      <p className="text-lg font-semibold">$299</p>
    </div>
    <img src="assets/bgcard3.png" alt="Course Image" className="w-40 h-40 object-cover" />
  </div>
  <div className="bg-gray-200 p-4 rounded-md">
    <p className="text-green-600 mt-2 text-lg">
      Note: You will get the booking details and enrollment details on registered Mobile number
    </p>
  </div>
</div>



    <button className="w-full bg-black text-white text-lg py-3 rounded-lg shadow-md">Proceed To Address</button>
  </div>

  {/* Right Half - Empty Section */}

</div>

          {/* Order Summary Section */}
          <div className=" h-90  fixed right-0 top-0 bottom-0 pt-40 pr-20 pl-20 ">
            <div className="bg-gradient-to-tr from-pink-100 via-pink-200 to-blue-200 p-6 rounded-xl ">
  <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
  <div className="space-y-4">
    <div className="flex justify-between text-gray-600">
      <span>Items</span>
      <span>$903</span>
    </div>
    <div className="flex justify-between text-gray-600">
      <span>Delivery</span>
      <span>$0</span>
    </div>
    <div className="flex justify-between text-gray-600">
      <span>Total</span>
      <span>$903</span>
    </div>
    <div className="flex justify-between text-gray-600">
      <span>Tax - 18%</span>
      <span>$20</span>
    </div>
  </div>
  <div className="mt-6">
    <button className="bg-white pl-5  text-lg text-gray-700 border-dashed border-black border-2 w-full h-20 flex items-center justify-between space-x-2">
      <span>Apply Coupon</span>
      <svg /* arrow down icon */ />
    </button>
  </div>
  <div className="mt-8 flex justify-between text-lg font-semibold">
    <span>Order Total</span>
    <span>$923</span>
  </div>
</div>
</div>
        </div>
    </>
  );
};

export default CartPage;
