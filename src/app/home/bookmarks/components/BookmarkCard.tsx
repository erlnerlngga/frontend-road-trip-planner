"use client";

import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { BookmarkType } from "@/utils/types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import env from "@/utils/constan";

interface dataType {
  bookmark: BookmarkType;
  tokenString: string;
}

const updateBookmarkName = async ({
  bookmark_id,
  newBookmarkName,
  tokenString,
  route,
}: {
  bookmark_id: string;
  newBookmarkName: string;
  tokenString: string;
  route: AppRouterInstance;
}) => {
  const res = await axios.put(
    `${env.url_api}/bookmark/${bookmark_id}`,
    {
      bookmark_name: newBookmarkName,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "appplication/json",
        Authorization: `Bearer ${tokenString}`,
      },
    }
  );

  if (res.status !== 200) throw new Error("failed to fecth");

  route.refresh();
};

const deleteBookmarkName = async ({
  bookmark_id,
  route,
  tokenString,
}: {
  bookmark_id: string;
  route: AppRouterInstance;
  tokenString: string;
}) => {
  const res = await axios.delete(`${env.url_api}/bookmark/${bookmark_id}`, {
    withCredentials: true,
    headers: {
      "Content-Type": "appplication/json",
      Authorization: `Bearer ${tokenString}`,
    },
  });

  const resData = res.data;

  if (!(resData.status === "success")) throw new Error("something went wrong");

  route.refresh();
};

export default function BookmarkCard({ bookmark, tokenString }: dataType) {
  const deleteMutation = useMutation({
    mutationFn: deleteBookmarkName,
  });

  const updateMutation = useMutation({
    mutationFn: updateBookmarkName,
  });

  const route = useRouter();
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [bookName, setBookName] = useState<string>(`${bookmark.bookmark_name}`);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBookName(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateMutation.mutate({
      bookmark_id: bookmark.bookmark_id,
      newBookmarkName: bookName,
      tokenString,
      route,
    });

    updateMutation.isSuccess && setIsEdit((cur) => !cur);
  };

  if (isEdit) {
    return (
      <div className="py-4 px-6 bg-gray-700 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            value={bookName}
            onChange={handleChange}
            className="outline-none py-1.5 px-4 border-2 border-gray-400 rounded-lg"
          />
          <div className="self-end">
            <button
              type="submit"
              className="py-1.5 px-4 rounded-lg bg-red-400 text-white mr-2"
            >
              Change
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="py-1.5 px-4 rounded-lg bg-red-400 text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="flex items-center bg-gray-700 justify-between py-4 px-6 rounded-lg shadow-md">
      <h1
        className="cursor-pointer text-lg text-gray-300 font-semibold hover:text-red-400 transition capitalize"
        onClick={() =>
          route.push(
            `/home/bookmarks/${bookmark.bookmark_name}/${bookmark.bookmark_id}`
          )
        }
      >
        {bookmark.bookmark_name}
      </h1>

      <div className="flex items-center gap-2">
        <FaRegEdit
          className="cursor-pointer text-gray-400 transition hover:text-gray-200"
          onClick={() => setIsEdit(true)}
        />
        <FaRegTrashAlt
          className="text-red-400 transition hover:text-red-200 cursor-pointer"
          onClick={() =>
            deleteMutation.mutate({
              bookmark_id: bookmark.bookmark_id,
              route,
              tokenString,
            })
          }
        />
      </div>
    </div>
  );
}
