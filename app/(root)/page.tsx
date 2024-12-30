'use client';
import { Model } from "@/components/ui/model";
import { UserButton } from "@clerk/nextjs";

export default function SetupPage() {
  return (
    <div className="p-4 m-4">
      <Model title="vikash" isOpen={true} description="test 1" onClose={()=>{}}>
        Children
      </Model>
    </div>
  );
}
