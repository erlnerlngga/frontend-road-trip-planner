import {
  IoHomeSharp,
  IoBookmarkOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import SearchButton from "./components/SearchButton";
import LinkCustom from "../components/LinkCustom";
import HomeMapLazy from "./components/HomeMapLazy";
import SearchBar from "./components/SearchBar";
import NavBarGeneral from "./components/NavbarGeneral";

export default function Page() {
  return (
    <section className="flex">
      <SearchButton />

      <NavBarGeneral />

      <div className="hidden h-screen 2xl:block w-1/3 px-6 pt-6 pb-12 z-10 bg-base-300">
        <SearchBar />

        <div className="flex items-center px-4 justify-end gap-3 mb-4">
          <LinkCustom href="/home">
            <IoHomeSharp className="h-6 w-6 text-red-400" />
          </LinkCustom>

          <LinkCustom href="/home/bookmarks">
            <IoBookmarkOutline className="h-6 w-6 text-red-400" />
          </LinkCustom>

          <LinkCustom href="/logout">
            <IoLogOutOutline className="h-6 w-6 text-red-400" />
          </LinkCustom>
        </div>

        <hr className="border-2 border-gray-500 mb-8" />

        <h1 className="mt-[65%] text-center text-2xl text-red-400 font-bold tracking-widest mb-8">
          Find your destionation ...
        </h1>

        <p className="text-red-400 font-medium text-center leading-relaxed tracking-wider">
          *current city available: <br /> malang, yogyakarta, east nusa
          tenggara, west nusa tenggara, bali, singapore, kuala lumpur, semarang,
          bandung, banyuwangi, bangkok
        </p>
      </div>

      <HomeMapLazy />
    </section>
  );
}
