import CardWhyUs from "./CardWhyUs";

export default function WhyUs() {
  const reason_list = [
    {
      point: "Local and International",
      caption:
        "Your favorite places around the world or your lovely local places are our prioritize for you, let’s visit each of them.",
    },
    {
      point: "One Stop Service",
      caption:
        " Accommodating your administrations like visas and tickets are not somethings new to us, neither bringing groups of doctors across country.",
    },
    {
      point: "Competitive Price List",
      caption:
        "Compare to our competitor. Customizing your plan so it fits to your budget is our excellence.",
    },
  ];

  return (
    <div className="relative flex flex-col px-3 md:px-10 py-10 md:py-20 bg-cover bg-[url('/images/asset_3(8).jpeg')]">
      <div className="absolute z-100 inset-0 bg-red-900 opacity-50"></div>
      <div className="z-10 ">
        <p className="text-white text-5xl mb-5 underline text-center font-semibold">
          Why Hagia Tours?
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center m-auto gap-3">
          {reason_list.map((item, index) => {
            return (
              <CardWhyUs
                key={index}
                point={item.point}
                caption={item.caption}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
