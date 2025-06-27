import Image from "next/image";

export default function Clients() {
  return (
    <div className="flex flex-col p-10 w-11/12 mx-auto">
      <h1 className="font-semibold underline decoration-red-600 decoration-4">
        Trusted by Big Companies
      </h1>
      <div className="flex flex-row justify-between items-center">
        <Image
          className="w-[18%]"
          src={"/logo_&_icon/infion.jpg"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Image
          className="w-[18%]"
          src={"/logo_&_icon/intercipta.png"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Image
          className="w-[18%]"
          src={"/logo_&_icon/telkom.jpeg"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Image
          className="w-[18%]"
          src={"/logo_&_icon/novell.png"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
        <Image
          className="w-[18%]"
          src={"/logo_&_icon/pertamina.jpg"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
    </div>
  );
}
