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
                    className="w-full rounded-none border-x-0 border-b border-t-0 border-slate-200/60 pl-1 ring-transparent 
                    placeholder:text-sm placeholder:text-slate-200/60 focus:border-white 
                    focus:ring-transparent"
                    placeholder="Your Email Address"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-transparent to-transparent p-0 text-sm text-white/80 transition duration-200 ease-in-out hover:text-white hover:brightness-125"
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
