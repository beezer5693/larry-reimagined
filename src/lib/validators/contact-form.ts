import { ZodType, z } from "zod";

type ContactFormSchema = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  message?: string;
};

export const contactFormSchema: ZodType<ContactFormSchema> = z.object({
  firstName: z
    .string({
      required_error: "First name is required.",
    })
    .min(1, {
      message: "First name is required.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "First name must contain only letters.",
    }),
  lastName: z
    .string()
    .min(1, {
      message: "Last name is required.",
    })
    .regex(/^[a-zA-Z]+$/, {
      message: "Last name must contain only letters",
    }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  phoneNumber: z
    .string()
    .min(1, {
      message: "Phone number is required.",
    })
    .regex(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/, {
      message: "Please enter a valid phone number",
    }),
  message: z.string().optional(),
});
