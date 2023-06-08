"use client";

import { FormEvent, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const cityName = useRef<HTMLInputElement>(null);
  const route = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (cityName.current !== null) {
      let city = cityName.current.value;
      route.push(`/home/${city}`);
    }
  };

  return (
    <form
      className="sticky top-6 flex items-center mb-16 z-20"
      onSubmit={handleSubmit}
    >
      <input
        ref={cityName}
        type="text"
        className="outline-none w-full px-4 py-2.5 tracking-wider  text-gray-300 bg-base-300  rounded-l-lg border-y-4 border-l-4 border-red-400 shadow"
        placeholder="City e.g., yogyakarta"
      />
      <button
        type="submit"
        className="px-6 py-3.5 bg-red-400 rounded-r-lg border-y-4 border-r-4 border-red-400 shadow"
      >
        <FaSearch className="text-base-300" />
      </button>
    </form>
  );
}
