"use client";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { contactFormSchema } from "@/lib/validators/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  currencyFormatter,
  dateFormatter,
  phoneNumberFormatter,
} from "@/utils/formatters/formatter";
import { Textarea } from "@/components/ui/TextArea";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [invitationSentSuccessfully, setInvitationSentSuccessfully] =
    useState(false);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      eventDate: "",
      eventLocation: "",
      speakerBudget: "",
      eventDescription: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    const contactFormValues = {
      ...values,
      eventDate: values.eventDate
        ? dateFormatter(new Date(values.eventDate))
        : "",
    };

    setIsSubmitting(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactFormValues),
      });
      form.reset();
      setInvitationSentSuccessfully(true);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-5">
          <div className="flex gap-5">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    First Name<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn("border-gray-300", {
                        "border-red-500 focus:border-red-500 focus-visible:ring-red-500":
                          form.formState.errors.firstName,
                      })}
                      placeholder="First Name*"
                      disabled={isSubmitting}
                      {...field}
                      ref={ref}
                    />
                  </FormControl>
                  <FormMessage className="ml-1 text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    Last Name<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className={cn("border-gray-300", {
                        "border-red-500 focus:border-red-500 focus-visible:ring-red-500":
                          form.formState.errors.lastName,
                      })}
                      placeholder="Last Name*"
                      disabled={isSubmitting}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="ml-1 text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Email<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn("border-gray-300", {
                      "border-red-500 focus:border-red-500 focus-visible:ring-red-500":
                        form.formState.errors.email,
                    })}
                    placeholder="Email*"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  Phone Number<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn("border-gray-300", {
                      "border-red-500 focus:border-red-500 focus-visible:ring-red-500":
                        form.formState.errors.phoneNumber,
                    })}
                    placeholder="Phone Number*"
                    disabled={isSubmitting}
                    {...field}
                    onChange={(e) =>
                      field.onChange(phoneNumberFormatter(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage className="ml-1 text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300"
                    placeholder="Company Name"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Event Date</FormLabel>
                <FormControl>
                  <Input
                    type="date"
                    className="border-gray-300"
                    placeholder="Company Name"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventLocation"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Event Location</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300"
                    placeholder="Event Location"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="speakerBudget"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Estimated Speaker Budget</FormLabel>
                <FormControl>
                  <Input
                    className="border-gray-300"
                    placeholder="Estimated Speaker Budget"
                    disabled={isSubmitting}
                    {...field}
                    value={field.value ? `$${field.value}` : ""}
                    onChange={(e) =>
                      field.onChange(currencyFormatter(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDescription"
            render={({ field }) => (
              <FormItem className="w-full pt-3">
                <FormLabel>
                  Tell me a little about your event and audience.
                </FormLabel>
                <FormControl>
                  <Textarea disabled={isSubmitting} {...field} />
                </FormControl>
                <FormMessage className="ml-1" />
              </FormItem>
            )}
          />
        </div>
        <Button
          disabled={isSubmitting}
          type="submit"
          className={cn("mt-10 w-full hover:brightness-125", {
            "bg-gradient-to-br from-green-500 to-green-600 hover:brightness-100 disabled:cursor-not-allowed":
              invitationSentSuccessfully,
          })}
        >
          {invitationSentSuccessfully ? (
            <span className="inline-flex items-center gap-1.5">
              <Check size={20} /> Contact Information Sent Successfully
            </span>
          ) : (
            <span className="inline-flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className={cn("animate-spin")} size={20} />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
