"use client";

import { FC, useState } from "react";
import SearchBar from "./SearchBar";
import { FaSearch } from "react-icons/fa";

const SearchButton: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 rounded-full  2xl:hidden z-50">
      {/* <div
        onClick={() => setIsOpen((cur) => !cur)}
        className="bg-base-300 p-4 rounded-full cursor-pointer"
      >
        <FaSearch className="h-5 w-5 text-red-400" />
      </div> */}
      <div
        className={`fixed  left-4 ${isOpen ? "left-4" : "-left-full"}  w-3/4`}
      >
        <SearchBar />
      </div>
    </div>
  );
};

export default SearchButton;
