"use client";

import img from "../../../../../public/404IMG.jpg";
import Image from "next/image";
import LinkCustom from "@/app/components/LinkCustom";

export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <section className="h-screen w-full grid place-items-center">
      <div className="relative w-2/3 h-2/3 mb-10">
        <Image fill src={img} alt="error img" className="rounded-lg" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-gray-300 font-semibold tracking-wider">
          {error.message}
        </h1>
        <LinkCustom
          href="/"
          className="capitalize text-lg px-8 py-2.5 tracking-widest rounded-lg text-white bg-red-400 font-bold transition hover:bg-red-700"
        >
          Back home
        </LinkCustom>
      </div>
    </section>
  );
}
