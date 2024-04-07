import React from "react"


export default function Nav() {
    return (
        <header className="header-area clearfix">
       <div className="container mx-auto p-5">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
      <h6 className="text-black">Default welcome msg</h6>
      </div>
      <div className="mt-2 ">
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">My account</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">$Dollar</a>
        <a href="#" className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4">English</a>
        
            </div>
        </div>
    </div>
   
        
        </header>
     
    );
  }
  
  
  
