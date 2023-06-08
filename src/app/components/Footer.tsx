import LinkCustom from "./LinkCustom";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="px-0 py-28 border-t-2 border-gray-600">
      <div className="container mx-auto px-8 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.5fr_1.5fr_1fr_1fr_1fr] gap-10">
        <div>
          <LinkCustom
            href="/"
            className="block text-3xl text-red-400 tracking-widest font-bold mb-6"
          >
            RoadTrip
          </LinkCustom>

          <div className="flex gap-6 items-center mb-12">
            <Link href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="text-gray-300 h-6 w-6" />
            </Link>

            <Link href="https://www.facebook.com/" target="_blank">
              <FaFacebook className="text-gray-300 h-6 w-6" />
            </Link>

            <Link href="https://twitter.com/" target="_blank">
              <FaTwitter className="text-gray-300 h-6 w-6" />
            </Link>
          </div>

          <p className="text-sm text-gray-400">
            Copyright &copy; 2023 by RoadTrip, <br /> Inc. All rights reserved
          </p>
        </div>

        <div>
          <p className="text-gray-300 mb-6 text-lg font-bold">Contact us</p>
          <p className="text-gray-400 mb-4">
            623 Harrison St., 2nd Floor, <br /> San Francisco, CA 94107
          </p>
          <p className="text-gray-400">415-201-6370</p>
          <p className="text-gray-400">hello@roadtriip.com</p>
        </div>

        <div>
          <p className="text-gray-300 mb-6 text-lg font-bold">Account</p>
          <div className="flex flex-col gap-4">
            <LinkCustom href="/signup" className="text-gray-400">
              Sign up
            </LinkCustom>
            <LinkCustom href="/signin" className="text-gray-400">
              Sign in
            </LinkCustom>
          </div>
        </div>

        <div>
          <p className="text-gray-300 mb-6 text-lg font-bold">Company</p>
          <div className="flex flex-col gap-4">
            <LinkCustom href="/about" className="text-gray-400">
              About RoadTrip
            </LinkCustom>
            <p className="text-gray-400">For Business</p>
            <p className="text-gray-400">Careers</p>
          </div>
        </div>

        <div>
          <p className="text-gray-300 mb-6 text-lg font-bold">Resources</p>
          <div className="flex flex-col gap-4">
            <p className="text-gray-400">Help center</p>
            <p className="text-gray-400">Privacy & terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
