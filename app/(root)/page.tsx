'use client';
import { Model } from "@/components/ui/model";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

export default function SetupPage() {
  const onOpen = useStoreModal((state)=>state.onOpen);
  const isOpen = useStoreModal((state)=>state.isOpen);
  useEffect(() => {
    if(!isOpen){
      onOpen();
    }
  }, [isOpen,onOpen])
  
  return (
    <div className="p-4 ">
      
    </div>
  );
}
