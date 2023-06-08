"use client";

import { useState } from "react";
import FormSaveBookmark from "./FormSaveBookmark";

export default function SaveButton({
  destination_id,
  tokenString,
}: {
  destination_id: string;
  tokenString: string;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        className="px-4 py-1 text-white rounded-lg tracking-wider bg-red-400 transition hover:bg-red-700"
        onClick={() => setIsOpen(true)}
      >
        Save
      </button>

      {isOpen && (
        <FormSaveBookmark
          closeForm={closeForm}
          destination_id={destination_id}
          tokenString={tokenString}
        />
      )}
    </>
  );
}
