"use client";

import { IoHomeOutline, IoBookmark, IoLogOutOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useState } from "react";

import FormAddBookmark from "./FormAddBookmark";

export default function NavBar({ tokenString }: { tokenString: string }) {
  const route = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex items-center px-4 justify-between mb-4">
        <button
          className="flex items-center gap-2"
          onClick={() => setIsOpen(true)}
        >
          <FaPlus className="h-5 w-5 text-red-400" />
          <span className="text-red-400">New bookmark</span>
        </button>

        <div className="flex items-center gap-3">
          <button onClick={() => route.push("/home")}>
            <IoHomeOutline className="h-6 w-6 text-red-400" />
          </button>

          <button onClick={() => route.push("/home/bookmarks")}>
            <IoBookmark className="h-6 w-6 text-red-400" />
          </button>

          <button onClick={() => route.push("/logout")}>
            <IoLogOutOutline className="h-6 w-6 text-red-400" />
          </button>
        </div>
      </div>

      {isOpen && (
        <FormAddBookmark closeForm={closeForm} tokenString={tokenString} />
      )}
    </>
  );
}
