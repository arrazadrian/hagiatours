import Image from "next/image";
import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import About from "./_components/About";
import WhyUs from "./_components/WhyUs";
import CoverPlaces from "./_components/CoverPlaces";
import Service from "./_components/Service";
import Clients from "./_components/Clients";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col h-screen w-screen">
        <Navbar />
        <Hero />
      </div>
      <About />
      <WhyUs />
      <CoverPlaces />
      <Service />
      <Clients />
      <div className="flex flex-col p-10 w-11/12 gap-y-3 mx-auto">
        <div className="flex flex-row gap-x-3">
          <Image
            className="w-[20%] h-[12rem] rounded-lg"
            src={"/images/pict_1.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Image
            className="w-[30%] h-[12rem] rounded-lg"
            src={"/images/pict_2.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Image
            className="w-[20%] h-[12rem] rounded-lg"
            src={"/images/pict_3.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Image
            className="w-[30%] h-[12rem] rounded-lg"
            src={"/images/pict_4.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
        <div className="flex flex-row gap-x-3">
          <Image
            className="w-[40%] h-[12rem] rounded-lg"
            src={"/images/pict_6.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Image
            className="w-[30%] h-[12rem] rounded-lg"
            src={"/images/pict_7.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <Image
            className="w-[30%] h-[12rem] rounded-lg"
            src={"/images/pict_8.jpg"}
            alt="Pict"
            width={900}
            height={900}
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
