import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="bg-gray-900 flex flex-col md:flex-row  w-100 items-center justify-between p-5 gap-3">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="relative w-[120px] h-[100px]">
          <Image
            src={"/logo_&_icon/hagia-white.png"}
            alt="Logo"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "center" }}
          />
        </div>
        <div>
          <p className="text-white mb-1">Cempaka Putih Barat 10520, Jakarta</p>
          <a
            href={"https://wa.me/628121029668"}
            rel="noreferrer"
            target="_blank"
            className="flex flex-row items-center w-fit border-2 border-white rounded-full py-1 px-4 text-left text-sm text-white"
          >
            Let&apos;s discuss +628121029668
          </a>
        </div>
      </div>
      <p className="text-white">©{year} PT Haaliyah Hagia Perkasa</p>
      <div>
        <p className="italic text-white text-sm md:text-lg">
          Accomodate from Corner to Corner
        </p>
        <div className="flex flex-row gap-2 text-white justify-center md:justify-end">
          <span className="text-sm">hagiatours@gmail.com</span>
          <span className="text-sm">| @hagiatours</span>
        </div>
      </div>
    </div>
  );
}
