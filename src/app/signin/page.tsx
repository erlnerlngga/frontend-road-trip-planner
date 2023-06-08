import Image from "next/image";

import loginIMG from "../../../public/loginIMG.jpg";
import FormSignIn from "./components/FormSignIn";

export default function Page() {
  return (
    <section className="px-0 md:py-12 lg:pt-12">
      <div className="container mx-auto px-4 lg:px-0 grid grid-cols-1 xl:grid-cols-8 justify-items-center items-center gap-14">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover xl:col-span-6">
          <Image
            fill
            src={loginIMG}
            alt="Background Form"
            className="rounded-lg"
          />
        </div>

        <div className="xl:col-span-2">
          <h3 className="text-3xl font-bold text-red-400 tracking-widest text-center mb-4">
            RoadTrip
          </h3>
          <p className="text-gray-300 tracking-widest leading-relaxed text-center mb-14">
            Welcome ...
          </p>

          <FormSignIn />
        </div>
      </div>
    </section>
  );
}
