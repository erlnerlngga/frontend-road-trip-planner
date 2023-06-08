import logoIMG from "../../../../../../public/logoIMG.png";
import LinkCustom from "@/app/components/LinkCustom";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import ButtonBack from "./ButtonBack";

export default function NavBar() {
  return (
    <div className="navbar h-20 bg-base-300 rounded-box px-8">
      <ButtonBack />
      <div className="flex-1 px-2 lg:flex-none ml-8">
        <LinkCustom href="/" className="relative h-12 w-12">
          <Image fill src={logoIMG} alt="Logo" />
        </LinkCustom>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              <FaBars className="h-7 w-7" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-300 p-2 shadow  rounded-box w-52 mt-4"
            >
              <li>
                <LinkCustom className="active:bg-red-400" href="/home">
                  Home
                </LinkCustom>
              </li>
              <li>
                <LinkCustom
                  className="active:bg-red-400"
                  href="/home/bookmarks"
                >
                  Bookmarks
                </LinkCustom>
              </li>
              <li>
                <LinkCustom className="active:bg-red-400" href="/logout">
                  Logout
                </LinkCustom>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
