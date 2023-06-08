"use client";

import img from "../../../public/404IMG.jpg";
import Image from "next/image";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="h-screen w-full grid place-items-center">
      <div className="flex flex-col gap-8 items-center">
        <div className="relative w-full lg:w-[600px] h-40 sm:h-96 lg:h-[600px]">
          <Image fill src={img} alt="error img" className="rounded-lg" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-center lg:text-xl text-gray-300 font-semibold tracking-wider">
            {error.message}
          </h1>
        </div>
      </div>
    </section>
  );
}
