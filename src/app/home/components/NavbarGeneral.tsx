"use client";

import { FC } from "react";
import LinkCustom from "@/app/components/LinkCustom";
import { FaBars } from "react-icons/fa";

const NavBarGeneral: FC = () => {
  return (
    <div className="fixed top-4 right-4 rounded-full  2xl:hidden z-50">
      <div className="flex justify-end flex-1  bg-base-300 rounded-full">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost rounded-btn">
              <FaBars className="h-6 w-6 text-red-400" />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
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
};

export default NavBarGeneral;
