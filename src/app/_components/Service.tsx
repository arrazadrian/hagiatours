import Image from "next/image";

type Service = {
  title: string;
  image: string;
  alt: string;
};

const SERVICES: Service[] = [
  {
    title: "MICE Program",
    image: "/images/asset_3(3).jpeg",
    alt: "MICE program event",
  },
  {
    title: "Travel Accommodation",
    image: "/images/asset(4).jpeg",
    alt: "Travel accommodation",
  },
  {
    title: "Apply Visa",
    image: "/images/pict_1.jpg",
    alt: "Visa application service",
  },
  {
    title: "Group Ticket",
    image: "/images/asset_3(9).jpeg",
    alt: "Group ticketing",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      aria-labelledby="service-heading"
      className="mx-auto my-10 flex w-full flex-col items-center justify-between gap-5 px-3 md:h-[500px] md:flex-row md:px-10"
    >
      {/* Image grid */}
      <div className="grid w-full grid-cols-2 gap-5 md:h-[500px] md:w-6/12">
        {SERVICES.map(({ title, image, alt }) => (
          <div
            key={title}
            className="relative aspect-[4/5] overflow-hidden rounded-xl md:aspect-auto"
          >
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center"
            />
            {/* Dark overlay for readable text */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-2">
              <h3 className="text-center text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                {title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Text column */}
      <div className="flex h-full w-full flex-col justify-between md:w-6/12">
        <div className="mb-3 flex w-full flex-col gap-2">
          <h2
            id="service-heading"
            className="text-4xl leading-tight sm:text-6xl"
          >
            <span className="text-4xl leading-tight sm:text-6xl underline decoration-red-600 decoration-8">
              Service
            </span>{" "}
            <span className="text-4xl leading-tight sm:text-6xl block">We</span>
            <span className="text-4xl leading-tight sm:text-6xl block">
              Provide
            </span>
          </h2>
          <p className="text-justify text-2xl font-normal">
            Providing end-to-end services is our goal — we break our main
            services into four points.
          </p>
        </div>
      </div>
    </section>
  );
}
