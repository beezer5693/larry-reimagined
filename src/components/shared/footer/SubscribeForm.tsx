"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { subscribeFormSchema } from "@/lib/validators/subscribe-form";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const SubscribeForm = () => {
  const form = useForm<z.infer<typeof subscribeFormSchema>>({
    resolver: zodResolver(subscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: z.infer<typeof subscribeFormSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="relative">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="w-full rounded-none border-x-0 border-b border-t-0 border-neutral-200/60 pl-1 ring-transparent 
                    placeholder:text-sm focus:border-white 
                    focus:ring-transparent"
                    placeholder="Your Email Address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="absolute bottom-1 right-0 px-2.5 py-1.5 text-sm transition duration-200 ease-in-out hover:brightness-125"
            type="submit"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SubscribeForm;
