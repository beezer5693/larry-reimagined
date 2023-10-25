"use client";

import { Button } from "@/components/ui/Button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import { subscribeFormSchema } from "@/lib/validators/subscribe-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const SubscribeForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof subscribeFormSchema>) => {
    setIsSubmitting(true);

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      form.reset();
      setIsSubscribed(true);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div>
          <div className="group relative">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      disabled={isSubmitting}
                      className={cn(
                        "w-full border-gray-200/60 px-3 py-2 placeholder:text-sm placeholder:text-gray-200/60 focus:border-[#2e42c4]",
                        {
                          "placeholder:text-white": isSubscribed,
                        },
                      )}
                      placeholder={
                        isSubscribed
                          ? "Thanks for subscribing!"
                          : "Your Email Address"
                      }
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button
              disabled={isSubmitting || isSubscribed}
              className={cn(
                "absolute right-2 top-1/2 -translate-y-1/2 bg-gradient-to-br from-transparent to-transparent p-0 text-sm text-white/80 transition duration-200 ease-in-out hover:text-white hover:brightness-125",
                {
                  "cursor-not-allowed text-green-400 opacity-100 hover:text-green-400 hover:brightness-100":
                    isSubscribed,
                },
              )}
              type="submit"
            >
              {isSubmitting ? (
                <Loader2
                  size={16}
                  className={cn("animate-spin", {
                    hidden: !isSubmitting,
                  })}
                />
              ) : (
                <>
                  {isSubscribed ? (
                    <span className="inline-flex items-center gap-1">
                      <Check size={15} /> Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </>
              )}
            </Button>
          </div>
          {form.formState.errors?.email?.message && (
            <p className="mt-2 text-sm text-red-500">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>
      </form>
    </Form>
  );
};

export default SubscribeForm;
