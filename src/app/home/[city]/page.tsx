import {
  IoHomeOutline,
  IoBookmarkOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import LinkCustom from "@/app/components/LinkCustom";
import env from "@/utils/constan";
import HomeMapLazy from "../components/HomeMapLazy";
import SearchBar from "../components/SearchBar";
import Card from "./components/Card";
import SearchButton from "../components/SearchButton";
import axios from "axios";
import { cookies } from "next/headers";
import NavBarGeneral from "../components/NavbarGeneral";

import { SendAllDestinationType } from "@/utils/types";

async function getDestination(city: string, tokenString: string) {
  const res = await axios.get(`${env.url_api}/destination/${city}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "appplication/json",
      Authorization: `Bearer ${tokenString}`,
    },
  });

  if (res.status !== 200) {
    throw new Error("Failed to fetch data");
  }

  return res.data;
}

export default async function Page({ params }: { params: { city: string } }) {
  const cookieStore = cookies();
  const tokenString = cookieStore.get("token-user")?.value;

  if (!tokenString) throw new Error("token is not found");

  const data = (await getDestination(
    params.city,
    tokenString
  )) as SendAllDestinationType;

  return (
    <section className="flex">
      <SearchButton />
      <NavBarGeneral />

      <div className="hidden 2xl:block  w-1/3 px-6 pt-6 pb-12 z-10 bg-base-300 ">
        <SearchBar />

        <div className="flex items-center px-4 justify-end gap-3 mb-4">
          <LinkCustom href="/home">
            <IoHomeOutline className="h-6 w-6 text-red-400" />
          </LinkCustom>

          <LinkCustom href="/home/bookmarks">
            <IoBookmarkOutline className="h-6 w-6 text-red-400" />
          </LinkCustom>

          <LinkCustom href="/logout">
            <IoLogOutOutline className="h-6 w-6 text-red-400" />
          </LinkCustom>
        </div>

        <hr className="border-2 border-gray-500 mb-8" />

        <div className="flex flex-col gap-10">
          {data.list_destination.map((val) => {
            const data = {
              id: val.destination_id,
              name: val.destination_name,
              image: val.image_url,
              url: val.destination_url,
            };

            return (
              <Card
                key={val.destination_id}
                dataMap={data}
                params={params.city}
                isBookmarkCard={false}
                tokenString={tokenString}
              />
            );
          })}
        </div>
      </div>

      <HomeMapLazy
        dataMap={data.list_destination}
        currentLoc={{ lat: data.city_lat, long: data.city_long }}
        params={params.city}
      />
    </section>
  );
}
