import Image from "next/image";

export default function CoverPlaces() {
  return (
    <div className="flex flex-col justify-between w-screen h-fit px-10 py-8">
      <div className="flex flex-row justify-between">
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/pict_7.jpg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset_4.jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset_5.jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset(2).jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
      <div className="my-4">
        <span className="text-6xl underline decoration-solid decoration-red-600 decoration-8">
          We Cover Various Places
        </span>
        <p className="text-2xl mt-5">
          You want to experience to something new like breathtaking nature or
          old city? We can cover both side.
        </p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset(1).jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset_3(5).jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset_3(7).jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="relative w-[280px] h-[170px]">
          <Image
            className="rounded-xl"
            src={"/images/asset(8).jpeg"}
            alt="Header"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
