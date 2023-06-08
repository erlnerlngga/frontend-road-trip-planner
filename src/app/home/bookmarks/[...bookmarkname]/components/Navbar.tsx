"use client";

import { IoHomeOutline, IoBookmark, IoLogOutOutline } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const route = useRouter();

  return (
    <div className="flex items-center px-4 justify-between mb-4">
      <button
        onClick={() => route.push("/home/bookmarks")}
        className="flex items-center gap-2"
      >
        <FaArrowLeft className="h-5 w-5 text-red-400" />
        <span className="text-red-400">Back</span>
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
  );
}
