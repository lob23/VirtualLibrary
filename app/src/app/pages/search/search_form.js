"use client"; // This is a client component 👈🏽

import { useState } from "react";
import {Link} from "react-scroll"
import _footer from "@/app/pages/wrapper/footer"

export default function search_form() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here and update searchResults state
    // For simplicity, let's just log the search term for now
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <div class="relative w-screen h-screen bg-cream overflow-y-auto">
        <div class="relative z-40 mx-40 ml-40 mr-40 mt-60 mb-20 rounded-md flex items-center h-12 rounded-lg bg-white overflow-hidden shadow-md shadow-blue-500/50">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
              </div>

              <input
              class="h-full w-full text-sm text-gray-700 border-0 focus:border-0 shadow-none py-20 placeholder:text-blue placeholder:text-opacity-50"
              type="text"
              id="search"
              placeholder="Enter a book" /> 
              <button
              class=" w-[120px] my-5 bg-blue p-3 border-none shadow-none text-yellow text-lg font-Gilroy_md"
              type="submit">
              Search
              </button>
          </div>
          
          <div class="z-10">
            <div class="absolute top-[200px] -right-[20px]  w-[250px] h-[250px]">
                <img
                  class="object-contain w-full h-full  "
                  src="/image/reg_cir.png"
                ></img>
              </div>
            <div class="absolute top-[200px] left-[-120px]  w-[300px] h-[300px]">
                <img
                  class="object-contain w-full h-full "
                  src="/image/reg_cir.png"
                ></img>
              </div>
            <div class="absolute top-[300px] left-[120px]  w-[150px] h-[150px]">
                <img
                  class="object-contain w-full h-full "
                  src="/image/reg_cir.png"
              ></img>
            </div>
            <div class="relative w-screen h-[2000px] bg-white"></div>
          </div>
          <div>
            <_footer/>
      </div>
      </div>
      
    </>
  );
}
