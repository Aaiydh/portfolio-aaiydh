import Image from "next/image";
import Hero from "@/components/Hero";

export default function Home() {
  return (
   <main className="relative bg-black-1OO flex justify-center items-center flex-col overflow-hidden ms-auto sm:px-10 px-5">
      <div className="max-w-7 w-full">
        <Hero />
      </div>

   </main>
  );
}
