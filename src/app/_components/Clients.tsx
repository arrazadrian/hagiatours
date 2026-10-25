import Image from "next/image";

type Client = {
  path: string;
  alt: string;
};

const CLIENT_LIST: Client[] = [
  { path: "/logo_&_icon/mbf.jpg", alt: "MBF" },
  { path: "/logo_&_icon/infion.png", alt: "Infion" },
  { path: "/logo_&_icon/itrc.png", alt: "Intercipta" },
  { path: "/logo_&_icon/telkom.jpeg", alt: "Telkom" },
  { path: "/logo_&_icon/novell.png", alt: "Novell" },
  { path: "/logo_&_icon/pertamina.jpg", alt: "Pertamina" },
  { path: "/logo_&_icon/provetic.jpg", alt: "Provetic" },
  { path: "/logo_&_icon/prodia.jpeg", alt: "Prodia" },
];

export default function Clients() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="flex w-11/12 flex-col p-10 mx-auto"
    >
      <h2
        id="clients-heading"
        className="text-4xl leading-tight sm:text-6xl font-semibold underline decoration-red-600 decoration-4"
      >
        Trusted by Big Companies
      </h2>

      <ul className="mt-6 flex flex-wrap justify-center items-center gap-3">
        {CLIENT_LIST.map((client) => (
          <li
            key={client.path}
            className="relative h-[80px] w-[180px] md:h-[200px] md:w-[300px]"
          >
            <Image
              src={client.path}
              alt={client.alt}
              fill
              sizes="(max-width: 768px) 180px, 300px"
              className="object-contain object-center"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
