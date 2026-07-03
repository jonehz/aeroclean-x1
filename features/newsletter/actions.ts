"use server";

import { newsletterSchema } from "./schema";

export async function subscribeNewsletter(
  email: string,
) {
  const result =
    newsletterSchema.safeParse({
      email,
    });

  if (!result.success) {
    return {
      success: false,
      message:
        result.error.issues[0].message,
    };
  }

  console.log(
    "Newsletter subscription:",
    email,
  );

  return {
    success: true,
    message:
      "Successfully subscribed!",
  };
}