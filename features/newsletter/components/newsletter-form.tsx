"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  newsletterSchema,
  NewsletterInput,
} from "../schema";

import { subscribeNewsletter } from "../actions";

export function NewsletterForm() {
  const [message, setMessage] =
    useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<NewsletterInput>({
    resolver:
      zodResolver(newsletterSchema),
  });

  async function onSubmit(
    data: NewsletterInput,
  ) {
    const result =
      await subscribeNewsletter(
        data.email,
      );

    setMessage(result.message);

    if (result.success) {
      reset();
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        mx-auto
        mt-12
        max-w-xl
      "
    >
      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
        "
      >
        <input
          {...register("email")}
          placeholder="Enter your email"
          className="
            flex-1
            rounded-full
            border
            px-6
            py-4
            outline-none
          "
        />

        <button
          disabled={isSubmitting}
          className="
            rounded-full
            bg-green-500
            px-8
            py-4
            font-medium
            text-white
            transition
            hover:bg-green-600
          "
        >
          Subscribe
        </button>
      </div>

      {errors.email && (
        <p
          className="
            mt-3
            text-sm
            text-red-500
          "
        >
          {errors.email.message}
        </p>
      )}

      {message && (
        <p
          className="
            mt-4
            text-green-500
          "
        >
          {message}
        </p>
      )}
    </form>
  );
}