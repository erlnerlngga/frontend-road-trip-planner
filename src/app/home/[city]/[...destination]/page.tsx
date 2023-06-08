import { FaDirections } from "react-icons/fa";
import Link from "next/link";
import env from "@/utils/constan";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SaveButton from "../components/SaveButton";
import { SpecificDestinationType } from "@/utils/types";
import ImageSlide from "./components/ImageSlide";
import axios from "axios";
import { cookies } from "next/headers";

const getListImage = async (bookmark_id: string, tokenString: string) => {
  const res = await axios.get(
    `${env.url_api}/destination/specific/${bookmark_id}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "appplication/json",
        Authorization: `Bearer ${tokenString}`,
      },
    }
  );

  if (res.status !== 200) {
    throw new Error("Fecth data failed.");
  }

  return res.data;
};

export default async function Page({
  params,
}: {
  params: { destination: string[] };
}) {
  const cookieStore = cookies();
  const tokenString = cookieStore.get("token-user")?.value;

  if (!tokenString) throw new Error("token is not found");

  const data = (await getListImage(
    params.destination[1],
    tokenString
  )) as SpecificDestinationType;

  return (
    <>
      <NavBar />
      <section className="container mx-auto py-20 px-8 lg:px-36 ">
        <div className="px-4">
          <h1 className="capitalize text-2xl lg:text-3xl tracking-widest font-bold text-red-400 mb-4">
            {data.destination_name}
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <SaveButton
              destination_id={data.destination_id}
              tokenString={tokenString}
            />

            <Link
              href={data.destination_url}
              target="_blank"
              className="px-3 py-2 rounded-lg bg-red-400 transition hover:bg-red-700"
            >
              <FaDirections className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        <hr className="border-2 border-gray-500 mb-12" />

        <div className="mb-8">
          <ImageSlide list_image={data.list_image} />
        </div>
      </section>

      <Footer />
    </>
  );
}
