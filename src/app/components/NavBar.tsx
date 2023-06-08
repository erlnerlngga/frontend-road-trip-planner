import logoIMG from "../../../public/logoIMG.png";
import LinkCustom from "./LinkCustom";
import Image from "next/image";
import { FaBars } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="navbar h-20 bg-base-300 rounded-box px-8">
      <div className="flex-1 px-2 lg:flex-none">
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
              className="menu dropdown-content p-2 shadow bg-base-300 rounded-box w-52 mt-4 z-10"
            >
              <li>
                <LinkCustom href="/" className="active:bg-red-400 text-lg">
                  Home
                </LinkCustom>
              </li>
              <li>
                <LinkCustom href="/about" className="active:bg-red-400 text-lg">
                  About us
                </LinkCustom>
              </li>
              <li>
                <LinkCustom
                  href="/signin"
                  className="active:bg-red-400 text-lg"
                >
                  Sign in
                </LinkCustom>
              </li>
              <li>
                <LinkCustom
                  href="/signup"
                  className="active:bg-red-400 text-lg"
                >
                  Sign up
                </LinkCustom>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
