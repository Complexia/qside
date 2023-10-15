"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ReactPaginate from "react-paginate";
import Link from "next/link";
//import { supabase } from "@/lib/supabase-client";
import { set } from "date-fns";
import { supabase } from "@/lib/supabase-client";



const GalleryPage = (props) => {
    
  
  const divs = [
    {
      key: 1,
      name: "StarBoy",
      artist: "theWeeknd",
      image: "https://picsum.photos/150/150",
      id: 1,
    },
    {
      key: 2,
      name: "Heavens",
      artist: "Julia Macheals",
      image: "https://picsum.photos/150/150",
      id: 2,
    },
    {
      key: 3,
      name: "Sunshine",
      artist: "Ed Sheeran",
      image: "https://picsum.photos/150/150",
      id: 3,
    },
    {
      key: 4,
      name: "Galaxy",
      artist: "Beyoncé",
      image: "https://picsum.photos/150/150",
      id: 4,
    },
    {
      key: 5,
      name: "Stardust",
      artist: "Taylor Swift",
      image: "https://picsum.photos/150/150",
      id: 5,
    },
    // Add more mappings here
  ];

  const itemsPerPage = 6; // Number of items to show per page
  const pageCount = Math.ceil(divs.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const visibleDivs = divs.slice(startIndex, startIndex + itemsPerPage);
  let visibleCandyMachines = props.candyMachines.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="items-center justify-center">
      {/* for you songs */}
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl ml-3 mb-3 my-6">Available promos ✨</h1>
        {props.candyMachines.length > 6 && (
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"flex"}
            pageClassName={"mr-1"}
            previousClassName={"mr-1"}
            nextClassName={"ml-1"}
            activeClassName={"font-bold"}
            previousLinkClassName={
              "bg-transparent hover:opacity-30 px-3 py-1 rounded font-bold"
            }
            nextLinkClassName={
              "bg-transparent hover:opacity-30 px-3 py-1 rounded font-bold"
            }
            pageLinkClassName={
              "bg-transparent hover:opacity-30 px-3 py-1 rounded font-bold"
            }
          />
        )}
      </div>
      <div className="flex flex-row  flex-wrap">
        {visibleCandyMachines.map(({ name, symbol, image }, index) => (
        <Link href={"/collection/" + String(index + 1)}  key={index}>
            <div
              key={index}
              className="flex-col bg-gray-800 bg-opacity-30 h-[240px] pt-3 w-[180px] text-black mx-2 rounded-md hover:bg-purple-800 transition ease-in-out delay-100 duration-200 hover:scale-105"
            >
              <Image
                src={image}
                alt="Image"
                height={150}
                width={150}
                className="mx-auto rounded-lg"
              />
              <h1 className="text-lg font-bold pt-2 pl-4 text-white">{name}</h1>
              <h1 className="text-md font-semibold text-gray-400 pl-4 pb-2">
                {symbol}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      
    </div>
  );
};

export default GalleryPage;
