import React from "react"


export default function Body() {
  return (
    
    <>
  


    <div className="bg-cover bg-center h-screen flex items-center " style={{backgroundImage: `url(${"img/img.jpg"})`}}>
      <div className="bg-opacity-70 p-8 rounded-lg">
        <h1 className="text-4xl text-black mb-4">New Arrivals</h1>
        <p className="text-lg text-black mb-6">For Mother's Day</p>
        <p className="text-lg text-black mb-6">Exclusive offer -10% off this week</p>
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">shop now</button>
      </div>
    </div>
  

          
          </>
  );
}
