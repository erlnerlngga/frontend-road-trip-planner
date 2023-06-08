import NavBar from "./components/Navbar";
import HomeMapLazy from "../components/HomeMapLazy";
import SearchBar from "../components/SearchBar";
import BookmarkCard from "./components/BookmarkCard";
import { cookies } from "next/headers";
import { BookmarkType } from "@/utils/types";
import axios from "axios";
import env from "@/utils/constan";

const getAllBookmarkName = async ({ tokenString }: { tokenString: string }) => {
  const res = await axios.get(`${env.url_api}/bookmark`, {
    withCredentials: true,
    headers: {
      "Content-Type": "appplication/json",
      Authorization: `Bearer ${tokenString}`,
    },
  });

  if (res.status !== 200) throw new Error("failed to fecth data");

  return res.data;
};

export default async function Page() {
  const cookieStore = cookies();
  const tokenString = cookieStore.get("token-user")?.value;

  if (!tokenString) throw new Error("token is not found");

  const data = (await getAllBookmarkName({
    tokenString,
  })) as BookmarkType[];

  return (
    <section className="flex">
      <div className=" w-full  2xl:w-1/3  pt-6 pb-12 px-6">
        <SearchBar />

        <NavBar tokenString={tokenString} />

        <hr className="border-2 border-gray-500 mb-8" />

        <div className="flex flex-col gap-6">
          {data.map((val, idx) => {
            return (
              <BookmarkCard
                key={idx}
                bookmark={val}
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
