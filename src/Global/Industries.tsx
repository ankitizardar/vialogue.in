import Image from "next/image";

export interface Industry {
  id: number;
  title: string;
  image: string;
  bgColor: string; // tailwind bg color class
}

interface Props {
  heading?: string;
  items: Industry[];
  bgColor?: string;
}

const Industries: React.FC<Props> = ({
  heading = "Industries That Benefit",
  items,
  bgColor = "white",
}) => {
  return (
    <section className={`"w-full  py-16 sm:py-16" ${bgColor}`}>
      <div className="mx-auto px-4 sm:px-10 lg:px-40">
        {/* Heading */}
        <h2 className="text-center text-2xl heading-two md:text-4xl font-medium text-gray-800 mb-14">
          {heading}
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition duration-300`}
            >
              {/* Icon */}
              <div className="relative md:w-22 md:h-30 w-12 h-14 mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-xl font-semibold text-black-900">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;