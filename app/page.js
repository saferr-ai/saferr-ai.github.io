import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-[#A0E4B0] ">

      <div className="max-w-6xl mx-auto h-screen text-foreground justify-center items-center flex md:flex-row flex-col">
      <div className="w-1/2 p-4">
        <h1>
          SafeRR AI lab
        </h1>
      </div>

      <div class="flex flex-col items-start space-y-4 p-4 w-1/2">
        <h1 class="text-xl font-bold">Pledged to align Generative AI towards</h1>
        <p class="text-4xl font-bold">Safe</p>
        <p class="text-4xl font-bold">Reliable</p>
        <p class="text-4xl font-bold">Robust</p>
        <p class="text-lg mt-4">Usage</p>
      </div>
      </div>

      
    </div>
  );
}
