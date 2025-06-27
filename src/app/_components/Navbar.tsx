import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center py-3 px-5 h-fit w-screen">
      <Image
        src={"/logo_&_icon/Logo-Hagia-01.png"}
        alt="Header"
        width={120}
        height={60}
        priority
        style={{ objectFit: "contain", objectPosition: "center" }}
      />
      <div className="flex flex-row gap-8">
        <div>
          <span className="cursor-link">About</span>
        </div>
        <div>
          <span className="cursor-link">Service</span>
        </div>
        <div>
          <span className="cursor-link">Client</span>
        </div>
        <div>
          <span className="cursor-link">Gallery</span>
        </div>
        <div>
          <span className="cursor-link">Contact</span>
        </div>
      </div>
    </div>
  );
}
