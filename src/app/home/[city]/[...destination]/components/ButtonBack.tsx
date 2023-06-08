"use client";

import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function ButtonBack() {
  const route = useRouter();
  return (
    <button onClick={() => route.back()}>
      <FaArrowLeft className="h-8 w-8 text-gray-400 hover:text-red-400 transition" />
    </button>
  );
}
