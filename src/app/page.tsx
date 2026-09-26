import Banner from "@/components/homepage/Banner";
import Thelibrari from "@/components/homepage/Thelibrari";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <Suspense
        fallback={
          <div className="min-h-screen w-full flex items-center justify-center bg-black">
            <span className="loading loading-spinner loading-xl text-white"></span>
          </div>
        }
      >
        <Thelibrari />
      </Suspense>
    </div>
  );
}
