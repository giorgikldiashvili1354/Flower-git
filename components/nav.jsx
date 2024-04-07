import React from "react"


export default function Nav() {
    return (
        <header className="header-area clearfix bg-slate-50">
       <div className="container mx-auto p-5">
    <div className="md:flex md:flex-row md:justify-between text-center text-sm sm:text-base">
      <div className="flex flex-row justify-center">
      <h6 className="text-black">Default welcome msg</h6>
      </div>
      <div className="mt-2 ">

      <select className="mr-7 focus:none" id="" name="cars">  
        <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="My Account">My Account</option>
        <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"  value="Login">Login</option>
        <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="Register">Register</option>
        <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="Wishlist"> Wishlist</option>
        </select>

      <select  className=" mr-7" id="cars" name="cars">      
        <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="$Doller(US)">$Doller(US)</option>
        <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"  value="Taka(BDT)">Taka(BDT)</option>
        <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="Riyal(SAR)">Riyal(SAR)</option>
        <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"  value="Rupee(INR)">Rupee(INR)</option>
        <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="fiat">Dirham(AED)</option>
    
        </select>
      <select  id="cars" name="cars">
    <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="volvo">Bangla</option>
    <option className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4"  value="saab">Arabic</option>
    <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="fiat">Hindi</option>
    <option  className="text-gray-600 hover:text-purple-600 p-4 px-3 sm:px-4" value="fiat">Spanish</option>
    </select>
            </div>
        </div>
    </div>
   
        
        </header>
     
    );
  }
  
  
  
