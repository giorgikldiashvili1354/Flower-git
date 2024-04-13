
import React from "react"
 

          
      export default function Card() {
    return (

      <div class="my-20">
      <div class="flex flex-row justify-between my-5">
        <h2 class="text-3xl">Featured Products</h2>
        
        <a href="#" class="flex flex-row justify-end text-lg hover:text-purple-700">
          View All
         
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
       
        </a>
        <a href="#" class="flex justify-end inline-grid text-lg hover:text-purple-700">
          View All
         
         
        </a>

        <a href="#" class="flex justify-items-center text-lg hover:text-purple-700">
          View All
         
         
        </a>
    
        </div>s
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div class="shadow-lg rounded-lg">
          <a href="#">
            <img src="" />
          </a>
          <div class="p-5">
            <h3><a hsref="#">Mens T-Shirt</a></h3>
            <div class="flex flex-rowsss my-3">
           
            </div>
            <div class="flex flex-row my-3">
      
            </div>
            <div class="flex flex-col xl:flex-row justify-between">
              <a class="flex flex-row justify-center" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 
                </svg>
               90.00$
              </a>
           
            </div>
          </div>
        </div>

        <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/product3.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Nike Shoes</a></h3>
          <div class="flex flex-row my-3">
      
          </div>
          <div class="flex flex-row my-3">
   
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class=" flex flex-row justify-center" href="#">
              <svg xmlns="" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              
              </svg>
             130.00$
            </a>
        
          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/product3.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Nike Shoes</a></h3>
          <div class="flex flex-row my-3">
      
          </div>
          <div class="flex flex-row my-3">
      
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class=" flex flex-row justify-center" href="#">
              <svg xmlns="" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               
              </svg>
             120.00$
            </a>

          </div>
        </div>
      </div>

      <div class="shadow-lg rounded-lg">
        <a href="#">
          <img src="./images/products/men/product3.jpg" class="rounded-tl-lg rounded-tr-lg" />
        </a>
        <div class="p-5">
          <h3><a href="#">Nike Shoes</a></h3>
          <div class="flex flex-row my-3">
         
          </div>
          <div class="flex flex-row my-3">
        
          </div>
          <div class="flex flex-col xl:flex-row justify-between">
            <a class=" flex flex-row justify-center" href="#">
              <svg xmlns="" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              
              </svg>
              100.00$
            </a>
           
             
          </div>
        </div>
      </div>
     </div>
     
     </div>
    );
  }
