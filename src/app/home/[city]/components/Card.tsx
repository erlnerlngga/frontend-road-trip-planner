"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import env from "@/utils/constan";
import { FaDirections, FaTrashAlt } from "react-icons/fa";
import SaveButton from "./SaveButton";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import LinkCustom from "@/app/components/LinkCustom";
import Link from "next/link";

const deleteBookmarkCard = async ({
  user_save_id,
  route,
  tokenString,
}: {
  user_save_id: string;
  route: AppRouterInstance;
  tokenString: string;
}) => {
  const res = await axios.delete(
    `${env.url_api}/bookmark/specific/${user_save_id}`,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "appplication/json",
        Authorization: `Bearer ${tokenString}`,
      },
    }
  );
  const resData = res.data;

  if (!(resData.status === "success")) throw new Error("something went wrong");

  route.refresh();
};

interface propMap {
  params: string;
  dataMap: {
    id: string;
    name: string;
    image: string;
    url: string;
    user_save_id?: string;
  };
  isBookmarkCard: boolean;
  tokenString: string;
}

export default function Card({
  dataMap,
  params,
  isBookmarkCard,
  tokenString,
}: propMap) {
  const route = useRouter();
  const mutation = useMutation({
    mutationFn: deleteBookmarkCard,
  });

  return (
    <div className="flex gap-8 sm:py-4 py-2 px-3 sm:px-6 bg-gray-700 items-center rounded-lg shadow-md">
      <div className="relative w-full h-36 object-cover">
        <Image
          fill
          className="rounded-lg shadow-md"
          src={dataMap.image}
          alt={dataMap.name}
          sizes="100vw"
        />
      </div>

      <div className="basis-2/3">
        <h4 className="capitalize text-md font-bold tracking-widest text-red-400 mb-4">
          {dataMap.name}
        </h4>

        <div className="flex items-center gap-4">
          {!isBookmarkCard && (
            <SaveButton destination_id={dataMap.id} tokenString={tokenString} />
          )}
          <LinkCustom
            href={`/home/${params}/${dataMap.name}/${dataMap.id}`}
            className="px-4 py-1 text-white rounded-lg tracking-wider bg-red-400 transition hover:bg-red-700"
          >
            Detail
          </LinkCustom>

          <Link
            href={dataMap.url}
            target="_blank"
            className="px-3 py-2 rounded-lg bg-red-400 transition hover:bg-red-700"
          >
            <FaDirections className="h-4 w-4 text-white" />
          </Link>

          {isBookmarkCard && (
            <button
              disabled={mutation.isLoading}
              className="px-3 py-2 rounded-lg bg-red-400 transition hover:bg-red-700"
              onClick={() => {
                if (dataMap.user_save_id) {
                  mutation.mutate({
                    user_save_id: dataMap.user_save_id,
                    route,
                    tokenString,
                  });
                }
              }}
            >
              <FaTrashAlt className="h-4 w-4 text-white" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
