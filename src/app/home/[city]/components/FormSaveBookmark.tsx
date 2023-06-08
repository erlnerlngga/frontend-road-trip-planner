"use client";

import { FC, FormEvent, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { BookmarkType } from "@/utils/types";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import env from "@/utils/constan";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

const getAllBookmarkName = async (tokenString: string) => {
  const res = await axios.get(`${env.url_api}/bookmark`, {
    withCredentials: true,
    headers: {
      "Content-Type": "appplication/json",
      Authorization: `Bearer ${tokenString}`,
    },
  });
  return res.data as BookmarkType[];
};

const saveNewData = async ({
  destination_id,
  bookmark_id,
  tokenString,
  route,
}: {
  destination_id: string;
  bookmark_id: string;
  tokenString: string;
  route: AppRouterInstance;
}) => {
  const res = await axios.post(
    `${env.url_api}/bookmark/save`,
    {
      destination_id,
      bookmark_id,
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

  route.refresh();
};

interface PropType {
  closeForm: () => void;
  destination_id: string;
  tokenString: string;
}

const FormSaveBookmark: FC<PropType> = ({
  closeForm,
  destination_id,
  tokenString,
}) => {
  const route = useRouter();
  const { isLoading, data, isSuccess } = useQuery({
    queryKey: ["getAllBookmarkName"],
    queryFn: () => getAllBookmarkName(tokenString),
  });

  const mustation = useMutation({
    mutationFn: saveNewData,
  });

  const bookName = useRef<HTMLSelectElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (bookName.current !== null) {
      mustation.mutate({
        destination_id,
        bookmark_id: bookName.current.value,
        tokenString,
        route,
      });

      bookName.current.value = "";
    }
  };

  if (mustation.isSuccess) {
    return (
      <div className="grid place-items-center">
        <p className="text-center text-red-400 font-semibold text-lg tracking-wider">
          Success save it ❤️❤️
        </p>
      </div>
    );
  }

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
            <div className="flex flex-col gap-2">
              <label htmlFor="name_bookmark" className=" text-gray-100">
                Bookmark:
              </label>
              <select
                disabled={isLoading}
                ref={bookName}
                name="name_bookmark"
                id="name_bookmark"
                className="px-4 py-1.5 rounded-lg outline-none border-2 border-gray-400"
              >
                {isSuccess &&
                  data.map((val, idx) => {
                    return (
                      <option
                        key={idx}
                        value={val.bookmark_id}
                        className="text-gray-500 px-4 py-1.5 rounded-lg outline-none capitalize"
                      >
                        {val.bookmark_name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <button
              type="submit"
              className="self-end w-1/3 px-4 py-1.5 rounded-lg bg-red-400 text-white"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormSaveBookmark;
