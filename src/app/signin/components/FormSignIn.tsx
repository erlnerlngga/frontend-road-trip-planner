"use client";

import { ValueTypes, signInValidation } from "@/utils/validate";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { FormEvent } from "react";
import env from "@/utils/constan";

const createAccount = async ({ email }: { email: string }) => {
  return axios
    .post(
      `${env.url_api}/signin`,
      {
        email,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "appplication/json" },
      }
    )
    .then((res) => res.data);
};

export default function FormSignIn() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: createAccount,
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: signInValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValueTypes) => {
      mutation.mutate({ email: `${values.email}` });
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.handleSubmit(e);
  };

  if (mutation.isSuccess) {
    return (
      <p className="text-gray-300 tracking-widest leading-relaxed text-center mb-14">
        Check your email for sign in ... 😎
      </p>
    );
  }

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1 mb-8">
          <label className="text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            {...formik.getFieldProps("email")}
            type="email"
            id="email"
            name="email"
            className="outline-none py-1.5 px-4 tracking-wider rounded-lg border-2 border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-1.5 w-full tracking-widest font-bold rounded-lg bg-red-400 text-white transition hover:bg-red-700 mb-2"
        >
          Sign In
        </button>

        <div className="flex items-center gap-1 justify-center">
          <p className="text-gray-400">Not have a account?</p>
          <p
            onClick={() => router.push("/signup")}
            className="cursor-pointer transition text-red-300 hover:text-red-700"
          >
            Sign Up
          </p>
        </div>

        {mutation.isError && (
          <h3 className="text-red-400 font-semibold text-center mt-4">
            Something went wrong!
          </h3>
        )}
      </form>
    </>
  );
}
