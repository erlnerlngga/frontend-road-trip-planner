import Image from "next/image";
import fiveIMG from "../../../../public/fiveIMG.jpg";

export default function About() {
  return (
    <section className="py-52 px-0">
      <div className="container px-8 lg:px-40 mx-auto grid grid-cols-1 xl:grid-cols-2 items-center justify-items-center gap-28">
        <div className="relative h-[200px] sm:h-[400px] w-full md:w-[600px] object-cover">
          <Image
            fill
            src={fiveIMG}
            alt="about us picture"
            className="rounded-lg"
          />
        </div>

        <div className="justify-self-end">
          <h2 className="text-4xl leading-[1.05] font-bold text-gray-300 mb-16">
            About us
          </h2>
          <p className="text-gray-300 text-lg tracking-wider leading-relaxed">
            We help to every traveller wanna find really good destination in
            every city they visit.
          </p>
        </div>
      </div>
    </section>
  );
}
