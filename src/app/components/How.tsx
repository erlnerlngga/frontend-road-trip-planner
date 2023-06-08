import Image from "next/image";
import oneIMG from "../../../public/oneIMG.jpg";
import threeIMG from "../../../public/threeIMG.jpg";
import fourIMG from "../../../public/fourIMG.jpg";

export default function How() {
  return (
    <section className="px-0 py-28">
      <div className="container mx-auto px-8 lg:px-40 mb-16">
        <span className="block uppercase text-sm sm:text-base font-bold tracking-widest text-red-400 mb-2">
          how it works
        </span>
        <h2 className="text-2xl sm:text-4xl font-bold leading-[1.05] text-gray-300">
          Find your favorite destination in 3 steps
        </h2>
      </div>

      <div className="container mx-auto px-8 lg:px-40 grid gri-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center justify-items-center">
        <div>
          <span className="block text-7xl font-bold text-gray-500 mb-4">
            01
          </span>
          <h3 className="text-2xl font-bold text-gray-300 leading-[1.05] mb-8">
            Choose city what you visit
          </h3>
          <p className="text-gray-300 leading-relaxed tracking-wider">
            Just search city what you wanna visit or base current location to
            find destination is available in there.
          </p>
        </div>
        <div className="relative w-[300px] h-[300px]  sm:w-96 sm:h-96 object-cover">
          <Image fill src={threeIMG} alt="Choose City" className="rounded-lg" />
        </div>

        <div className="relative w-[300px] h-[300px]  sm:w-96 sm:h-96 object-cover">
          <Image
            fill
            src={oneIMG}
            alt="Add Destination"
            className="rounded-lg"
          />
        </div>
        <div className="row-start-3">
          <span className="block text-7xl font-bold text-gray-500 mb-4">
            02
          </span>
          <h3 className="text-2xl font-bold text-gray-300 leading-[1.05] mb-8">
            Add destination
          </h3>
          <p className="text-gray-300 leading-relaxed tracking-wider">
            Once you choose, city you will get list of destination in that city.
            You can add to save every destination you gonna visit.
          </p>
        </div>

        <div>
          <span className="block text-7xl font-bold text-gray-500 mb-4">
            03
          </span>
          <h3 className="text-2xl font-bold text-gray-300 leading-[1.05] mb-8">
            Get direction to destination
          </h3>
          <p className="text-gray-300 leading-relaxed tracking-wider">
            Now you can get direction to destination what you gonna visit from
            your current location.
          </p>
        </div>
        <div className="relative w-[300px] h-[300px]  sm:w-96 sm:h-96 object-cover">
          <Image
            fill
            src={fourIMG}
            alt="Get Direction"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
