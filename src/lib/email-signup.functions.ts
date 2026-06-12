import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const submitEmailSignup = createServerFn({ method: "POST" })
  .inputValidator((data) =>
    z
      .object({
        email: z.string().email("Please enter a valid email address."),
      })
      .parse(data),
  )
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const { error } = await supabaseAdmin
      .from("email_signups")
      .insert({ email: data.email.toLowerCase().trim() });

    if (error) {
      if (error.code === "23505") {
        return { success: true, message: "You're already subscribed!" };
      }
      throw new Error("Something went wrong. Please try again.");
    }

    return { success: true, message: "Thanks for subscribing!" };
  });
