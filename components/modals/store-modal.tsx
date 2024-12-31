"use client";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Model } from "../ui/model";

export const StoreModel = () => {
    const storeModel=useStoreModal();
    return <Model
    title="Create store"
    description="Add a new store to manage products and categories"
    isOpen={storeModel.isOpen}
    onClose={storeModel.onClose}
  >
    Future Create Store Form
  </Model>;
};
