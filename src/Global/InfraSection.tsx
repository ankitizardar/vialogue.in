interface InfraHighlight {
  title: string;
  description: string;
}

interface ApiInfraData {
  badge: string;
  heading: string;
  image: string;
  highlights: InfraHighlight[];
}

const ApiInfraSection: React.FC<{ data: ApiInfraData }> = ({ data }) => {
  return (
    <section className="w-full pt-20 bg-[#f5f5f7]">
      <div className="mx-auto">
        
        {/* TOP BADGE */}
        {/* <div className="flex justify-center items-center gap-3 mb-5">
          <div className="w-16 h-[1px] bg-purple-400" />
          <span className="text-purple-600 font-medium tracking-wide text-sm">
            {data.badge}
          </span>
          <div className="w-16 h-[1px] bg-purple-400" />
        </div> */}

        {/* HEADING */}
        <h2 className="text-center heading-two text-2xl md:text-4xl font-medium text-gray-900 max-w-4xl mx-auto leading-tight mb-5">
          {data.heading}
        </h2>

        {/* MAIN GRID */}
        <div className="grid py-16 px-4 sm:px-10 lg:px-40 grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT IMAGE */}
          <div className="flex justify-center">
            <img
              src={data.image}
              alt="API Infrastructure"
              className="w-full max-w-[520px] rounded-xl"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            {/* <h3 className="text-3xl md:text-4xl heading-two font-medium mb-6 text-black">
              Infrastructure Highlights
            </h3> */}

            <ul className="space-y-10 sm:space-y-4">
              {data.highlights.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="mt-[6px] text-black text-2xl sm:block hidden">•</span>
                  <p className="text-gray-800 grid sm:block leading-relaxed text-xl paragraph">
                    <span className="font-medium">{item.title}:</span>{" "}
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ApiInfraSection;