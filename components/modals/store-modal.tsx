"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Model } from "../ui/model";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  name:z.string().min(1)
})

export const StoreModel = () => {
    const storeModel=useStoreModal();
    const form =useForm<z.infer<typeof formSchema>>({
      resolver:zodResolver(formSchema),
      defaultValues:{
        name:""
      }
    })
    const onSubmit = async(values:z.infer<typeof formSchema>)=>{
      console.log(values)
    }
    return <Model
    title="Create store"
    description="Add a new store to manage products and categories"
    isOpen={storeModel.isOpen}
    onClose={storeModel.onClose}
  >
    <div>
    <div className="space-y-4 py-2 pb-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField control={form.control} name="name" render={({field})=>(
<FormItem>
  <FormLabel>Name</FormLabel>
  <FormControl>

  <Input placeholder="store" {...field}/>
  </FormControl>

</FormItem>
          )}/>

        </form>
      </Form>
    </div>

    </div>
  </Model>;
};
