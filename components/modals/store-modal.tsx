"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios"

import { useStoreModal } from "@/hooks/use-store-modal";
import { Model } from "../ui/model";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(1),
});

export const StoreModel = () => {
  const storeModel = useStoreModal();
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
      try {
        setLoading(true)
        const response  = await axios.post("/api/stores",values)
        toast.success("Store Created Successfully. ")
        
      } catch (error) {
        toast.error("Something Went wrong.");

      }
      finally{
        setLoading(false);
      }

  };
  return (
    <Model
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModel.isOpen}
      onClose={storeModel.onClose}
    >
      <div>
        <div className="space-y-4 py-2 pb-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input disabled={loading} placeholder="Store" {...field} />
                    </FormControl>
                    <FormMessage/>
                  </FormItem>
                )}
              />
              <div className="pt-6 space-x-2 flex items-center justify-end w-full ">
                <Button disabled={loading} variant={"outline"} onClick={storeModel.onClose}>Cancel</Button>
                <Button disabled={loading} type="submit">Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </Model>
  );
};
