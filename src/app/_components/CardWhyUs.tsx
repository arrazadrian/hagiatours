type Props = {
  point: string;
  caption: string;
};

export default function CardWhyUs({ point, caption }: Props) {
  return (
    <div className="flex flex-col w-[90%] md:w-[32%]">
      <div className="bg-white rounded-t p-2">
        <span className="text-red-800 text-3xl">{point}</span>
      </div>
      <div className="border rounded-b p-3">
        <p className="text-white font-normal text-justify">{caption}</p>
      </div>
    </div>
  );
}
