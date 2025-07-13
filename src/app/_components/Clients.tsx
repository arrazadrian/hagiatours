import Image from "next/image";

export default function Clients() {
  const client_list = [
    {
      path: "/logo_&_icon/mbf.jpg",
      alt: "mbf",
    },
    {
      path: "/logo_&_icon/infion.png",
      alt: "infion",
    },
    {
      path: "/logo_&_icon/itrc.png",
      alt: "intercipta",
    },
    {
      path: "/logo_&_icon/telkom.jpeg",
      alt: "telkom",
    },
    {
      path: "/logo_&_icon/novell.png",
      alt: "novell",
    },
    {
      path: "/logo_&_icon/pertamina.jpg",
      alt: "pertamina",
    },
  ];

  return (
    <div className="flex flex-col p-10 w-11/12 mx-auto">
      <h1 className="font-semibold underline decoration-red-600 decoration-4">
        Trusted by Big Companies
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-3">
        {client_list.map((item, index) => {
          return (
            <div
              key={index}
              className="relative h-[80px] md:h-[200px] w-[180px] md:w-[400px]"
            >
              <Image
                src={item.path}
                alt={item.alt}
                fill
                priority
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
