"use client";

import { FC, FormEvent, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import env from "@/utils/constan";

const addNewBookmark = async ({
  bookmark_name,
  route,
  tokenString,
}: {
  bookmark_name: string;
  route: AppRouterInstance;
  tokenString: string;
}) => {
  const res = await axios.post(
    `${env.url_api}/bookmark`,
    {
      bookmark_name,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "appplication/json",
        Authorization: `Bearer ${tokenString}`,
      },
    }
  );

  if (res.status !== 200) throw new Error("failed to post data");

  const resData = res.data;

  if (!(resData.status === "success")) throw new Error("something went wrong");

  route.refresh();
};

interface PropType {
  closeForm: () => void;
  tokenString: string;
}

const FormAddBookmark: FC<PropType> = ({ closeForm, tokenString }) => {
  const mutation = useMutation({
    mutationFn: addNewBookmark,
  });

  const route = useRouter();
  const bookName = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (bookName.current !== null) {
      mutation.mutate({
        bookmark_name: bookName.current.value,
        route,
        tokenString,
      });

      bookName.current.value = "";
    }
  };

  return (
    <>
      <div
        onClick={closeForm}
        className="fixed top-0 left-0 right-0 bottom-0 z-40 w-full bg-gray-900 bg-opacity-50 grid place-content-center"
      ></div>

      <div className="max-w-sm lg:max-w-md fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full">
        <div className="relative bg-gray-700 rounded-lg shadow p-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-gray-300 text-lg font-bold">
              Add new bookmark
            </h1>
            <IoClose
              onClick={closeForm}
              className="w-6 h-6 cursor-pointer text-gray-300 hover:text-red-500 transition"
            />
          </div>

          <hr className="border-2 border-gray-500 mb-6" />

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              ref={bookName}
              type="text"
              className="outline-none py-1.5 px-4 rounded-lg border-2 border-gray-400"
            />
            <button
              type="submit"
              className="self-end w-1/3 px-4 py-1.5 rounded-lg bg-red-400 text-white"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormAddBookmark;
