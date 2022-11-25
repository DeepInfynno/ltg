const data = [
  { title: "Tickets sold", count: "1M+", time: "As of December 2022" },
  {
    title: "#1 Rating amongst major ticketers",
    count: "4.3/5",
    time: "As of October, 2022. Trustpilot.com",
  },
  { title: "Venues", count: "1K+", time: "As of December 2022" },
  { title: "Partners", count: "10K+", time: "As of December 2022" },
  { title: "Years of Experience", count: "16", time: "Since 2006" },
  { title: "International Offices", count: "3", time: "As of December 2022" },
];

const Stats = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h3 className="uppercase text-gray-700">Some Numbers</h3>
        <h1 className="text-3xl font-semibold py-6">Our Highlight Reel.</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="md:grid grid-cols-3 gap-4">
          {data.map((d, i) => (
            <div
              key={i}
              className="bg-gray-100 p-8 rounded-lg h-56 flex flex-col my-4 md:my-0"
            >
              <div className="font-medium text-lg flex-1">{d.title}</div>
              <div>
                <h3 className="text-4xl font-medium">{d.count}</h3>
                <p className="text-gray-700 text-sm mt-2">{d.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
