import Image from "next/image";
import twoIMG from "../../../public/twoIMG.jpg";
import LinkCustom from "./LinkCustom";

export default function Hero() {
  return (
    <section className="px-0 lg:px-20 pt-28 pb-40">
      <div className="container mx-auto py-0 px-8 xl:px-14 grid grid-cols-1 xl:grid-cols-2 justify-items-center	items-center gap-20 lg:gap-40">
        <div>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] text-gray-300 font-bold mb-12">
            Came to wonderfull destination in every city
          </h1>
          <p className="text-gray-300 text-md md:text-lg leading-relaxed tracking-wider mb-8">
            The beautiful place you can visit in every city that will make you
            wanna comeback again. Find your unforgottable destination you wanna
            experience it.
          </p>

          <LinkCustom
            href="/signup"
            className="capitalize text-xl px-8 py-2.5 tracking-widest rounded-lg text-white bg-red-400 font-bold transition hover:bg-red-700"
          >
            try for free
          </LinkCustom>
        </div>

        <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] object-cover xl:justify-self-end">
          <Image src={twoIMG} fill alt="Hero Image" className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}
