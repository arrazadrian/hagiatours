import Image from "next/image";

const YEAR = new Date().getFullYear();

const CONTACT = {
  phone: "+628121029668",
  whatsappUrl: "https://wa.me/628121029668",
  email: "hagiatours@gmail.com",
  instagram: "@hagiatours",
} as const;

const ADDRESS = "Cempaka Putih Barat 10520, Jakarta";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="flex w-full flex-col items-center justify-between gap-6 bg-gray-900 p-5 md:flex-row md:gap-3"
    >
      {/* Brand + contact */}
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <div className="relative h-[100px] w-[120px] shrink-0">
          <Image
            src="/logo_&_icon/hagia-white.png"
            alt="Hagia Tour logo"
            fill
            sizes="120px"
            className="object-contain object-center"
          />
        </div>

        <div className="flex flex-col items-center gap-2 md:items-start">
          <address className="text-center not-italic text-white md:text-left">
            {ADDRESS}
          </address>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chat on WhatsApp at ${CONTACT.phone}`}
            className="flex w-fit flex-row items-center rounded-full border-2 border-white px-4 py-1 text-left text-sm text-white transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Let&apos;s discuss {CONTACT.phone}
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="text-center text-white md:text-left">
        ©{YEAR} PT Haaliyah Hagia Perkasa
      </p>

      {/* Tagline + socials */}
      <div className="flex flex-col items-center gap-1 md:items-end">
        <p className="text-sm italic text-white md:text-lg">
          Accommodate from Corner to Corner
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 text-white md:justify-end">
          <a
            href={`mailto:${CONTACT.email}`}
            className="text-sm underline-offset-2 hover:underline"
          >
            {CONTACT.email}
          </a>
          <span aria-hidden="true" className="text-sm">
            |
          </span>
          <a
            href="https://instagram.com/hagiatours"
            target="_blank"
            rel="noreferrer"
            className="text-sm underline-offset-2 hover:underline"
          >
            {CONTACT.instagram}
          </a>
        </div>
      </div>
    </footer>
  );
}
