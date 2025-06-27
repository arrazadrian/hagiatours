import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="sm:text-6xl text-4xl sm:border-b-8 border-b-4 border-red-600 sm:mb-6 mb-4">
        ACCOMODATE
      </span>
      <span className="absolute sm:text-4xl text-xl z-50 sm:top-[170px] top-[140px]">
        FROM CORNER TO CORNER
      </span>
      <div className="relative w-[95%] sm:h-[70vh] h-[75vh] rounded-lg">
        <Image
          className="rounded-xl"
          src={"/images/padar.png"}
          alt="Header"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
