
import React from "react"
 

          
      export default function Card() {
    return (
        <div class="grid grid-flow-row grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        <div class="shadow-lg rounded-lg">
          <a href="#">
            <img src="data:image/jpeg;base64,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" class="rounded-tl-lg rounded-tr-lg" />
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
     

    );
  }
