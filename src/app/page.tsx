import Image from "next/image";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen w-screen">
        <Image
          className="absolute h-screen w-screen -z-10"
          src={"/images/padar.png"}
          alt="Header"
          width={900}
          height={900}
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="flex flex-col m-auto text-center w-full">
          <h1 className="text-2xl md:text-5xl text-white">
            Travel Every Corner
          </h1>
          <h3 className="text-base md:text-2xl text-white">
            Visit your dream places with us
          </h3>
          <div className="border-2 rounded-md p-1 w-fit border-white mt-2 self-center hover:cursor-pointer hover:bg-sky-700">
            <span className="text-white font-normal">Let's Discuss</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row mx-auto items-center w-11/12 justify-between p-10">
        <div className="w-5/12">
          <h1>Welcome to Our Site</h1>
          <p className="text-justify">
            Hagia Tour is a travel agent based in Jakarta, Indonesia. We serve
            both domestic and international trips. From small groups to large
            groups. Any plan for outing or honeymoon? Let’s talk!
          </p>
        </div>
        <Image
          className="w-5/12"
          src={"/images/asset_one.png"}
          alt="Asset"
          width={900}
          height={900}
          priority
          style={{ objectFit: "contain", objectPosition: "center" }}
        />
      </div>
      <div className="flex bg-red-500 w-screen">
        <div className="flex flex-col w-11/12 p-10 mx-auto">
          <h1 className="text-white mb-3">Services We Provide</h1>
          <div className="flex flex-row justify-between items-center w-full mb-3">
            <div className="bg-white p-3 w-[48%] h-[10rem] rounded-lg">
              <h2>1. MICE Program</h2>
              <p>
                Are you going to important event? Well we can organize your
                itinerary based on what you need.
              </p>
            </div>
            <div className="bg-white p-3 w-[48%] h-[10rem] rounded-lg">
              <h2>3. Apply Visa</h2>
              <p>
                We have experiences getting Visa from many country, no need to
                worry about your trip.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full mb-3">
            <div className="bg-white p-3 w-[48%] h-[10rem] rounded-lg">
              <h2>2. Travel Accommodation</h2>
              <p>
                Moving and staying from one place to another feels enjoyoable
                with hour services.
              </p>
            </div>
            <div className="bg-white p-3 w-[48%] h-[10rem] rounded-lg">
              <h2>4. Group Ticket</h2>
              <p>
                Ticket is your gate to start a wonderful trip, even in a big
                number. You can count on us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-10 w-11/12 mx-auto">
        <h1>Our Clients</h1>
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
      <div className="flex flex-col p-10 w-11/12 gap-y-3 mx-auto">
        <h1 className="mb-5">Gallery</h1>
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
