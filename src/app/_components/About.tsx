import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row mx-auto items-center w-screen h-[500px] justify-between gap-5 px-10 my-10">
      <div className="flex flex-col w-5/12 h-full justify-between">
        <div className="w-[100%] flex flex-col mb-3 gap-2">
          <span className="text-4xl sm:text-6xl underline decoration-solid decoration-red-600 decoration-8">
            What You
          </span>
          <span className="text-4xl sm:text-6xl">Need for</span>
          <span className="text-4xl sm:text-6xl">Traveling</span>
        </div>
        <p className="font-normal text-2xl text-justify">
          Hagia Tour is a travel agent based in Jakarta, Indonesia. We serve
          both domestic and international tourism types. From small groups to
          large groups. We accommodate custom request from our client so we can
          deliver the best experience.
        </p>
      </div>
      <div className="flex flex-row w-7/12 h-[500px] gap-5">
        <div className="relative w-[50%] h-[100%]">
          <Image
            className="rounded-t-2xl"
            src={"/images/asset_3(2).jpeg"}
            alt="ship"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className=" flex flex-col relative w-[50%] h-[100%]] gap-5">
          <div className="relative w-[100%] h-[50%]">
            <Image
              className="rounded-tl-2xl"
              src={"/images/asset(5).jpeg"}
              alt="home"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
          <div className="relative w-[100%] h-[50%]">
            <Image
              className="rounded-br-3xl"
              src={"/images/asset(6).jpeg"}
              alt="home"
              fill
              priority
              style={{ objectFit: "cover", objectPosition: "right" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
