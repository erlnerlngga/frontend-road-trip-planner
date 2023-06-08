"use client";

import { useRouter } from "next/navigation";
import { ValueTypes, signUpValidation } from "@/utils/validate";
import { useFormik } from "formik";
import { Toaster } from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { FormEvent } from "react";
import axios from "axios";
import env from "@/utils/constan";

const createAccount = async ({
  user_name,
  email,
}: {
  user_name: string;
  email: string;
}) => {
  return axios
    .post(
      `${env.url_api}/signup`,
      {
        user_name: user_name.toLowerCase(),
        email,
      },
      {
        withCredentials: true,
        headers: { "Content-Type": "appplication/json" },
      }
    )
    .then((res) => res.data);
};

export default function FormSignUp() {
  const route = useRouter();

  const mutation = useMutation({
    mutationFn: createAccount,
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validate: signUpValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values: ValueTypes) => {
      mutation.mutate({
        user_name: `${values.name}`,
        email: `${values.email}`,
      });
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
        <div className="flex flex-col gap-1 mb-6">
          <label className="text-gray-400" htmlFor="name">
            Name
          </label>
          <input
            {...formik.getFieldProps("name")}
            id="name"
            name="name"
            type="text"
            className="outline-none py-1.5 px-4 tracking-wider rounded-lg border-2 border-gray-400"
          />
        </div>

        <div className="flex flex-col gap-1 mb-8">
          <label className="text-gray-400" htmlFor="email">
            Email
          </label>
          <input
            {...formik.getFieldProps("email")}
            id="email"
            name="email"
            type="email"
            className="outline-none py-1.5 px-4 tracking-wider rounded-lg border-2 border-gray-400"
          />
        </div>

        <button
          type="submit"
          className="px-8 py-1.5 w-full tracking-widest font-bold rounded-lg bg-red-400 text-white transition hover:bg-red-700 mb-2"
        >
          Sign Up
        </button>

        <div className="flex items-center gap-1 justify-center">
          <p className="text-gray-400">Already have a account?</p>
          <p
            onClick={() => route.push("/signin")}
            className="cursor-pointer transition text-red-300 hover:text-red-700"
          >
            Sign In
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
