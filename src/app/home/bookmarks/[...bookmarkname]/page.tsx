import SearchBar from "../../components/SearchBar";
import HomeMapLazy from "../../components/HomeMapLazy";
import Card from "../../[city]/components/Card";
import { SendDataUser_SaveType } from "@/utils/types";
import { cookies } from "next/headers";
import NavBar from "./components/Navbar";
import axios from "axios";
import env from "@/utils/constan";

const getBookmarkdata = async (bookmark_id: string, tokenString: string) => {
  const res = await axios.get(
    `${env.url_api}/bookmark/specific/${bookmark_id}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "appplication/json",
        Authorization: `Bearer ${tokenString}`,
      },
    }
  );

  if (res.status !== 200) throw new Error("failed to fecth");

  return res.data;
};

export default async function Page({
  params,
}: {
  params: { bookmarkname: string[] };
}) {
  const cookieStore = cookies();
  const tokenString = cookieStore.get("token-user")?.value;

  if (!tokenString) throw new Error("token is not found");

  const data = (await getBookmarkdata(
    params.bookmarkname[1],
    tokenString
  )) as SendDataUser_SaveType[];

  return (
    <section className="flex">
      <div className="w-full  2xl:w-1/3  pt-6 pb-12 px-6">
        <SearchBar />

        <NavBar />

        <hr className="border-2 border-red-100 mb-8" />

        <div className="flex flex-col gap-10">
          {data.map((val, idx) => {
            const data = {
              id: val.destination_id,
              name: val.destination_name,
              image: val.image_url,
              url: val.destination_url,
              user_save_id: val.user_save_id,
            };

            return (
              <Card
                key={idx}
                dataMap={data}
                params={val.city_name}
                isBookmarkCard={true}
                tokenString={tokenString}
              />
            );
          })}
        </div>
      </div>

      <div className="hidden 2xl:block">
        <HomeMapLazy />
      </div>
    </section>
  );
}
