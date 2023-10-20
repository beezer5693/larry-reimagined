import { ZodType, z } from "zod";

type SubscribeFormSchema = {
  email: string;
};

export const subscribeFormSchema: ZodType<SubscribeFormSchema> = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
});
