import Image from "next/image";
import CardCircle from '@assets/images/Card_Circle.svg';
import Slider from "react-slick";

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
  const settings = {
		rows: 2,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
    responsive : [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
}

  return (
    <div className="mb-[76px] md:mb-[170px] sm:px-5">
      <div className="max-w-[863px] mx-auto px-[35px] md:px-0">
        <h3 className="uppercase text-black text-[20px] leading-[23px]">SOME NUMBERS</h3>
        <h1 className="md:mt-[41px] mt-[36px] font-bold  md:text-[35px] text-[22px] leading-[30px] text-black">Our Highlight Reel.</h1>
      </div>
      <div className="md:mt-[73px] mt-[46px] highlight-slider md:max-w-[1640px] w-full max-w-[322px] mx-auto sm:max-w-none">
        <Slider {...settings}>
          {data.map((d, i) => (
            <div
              key={i}
              className="overflow-hidden bg-gray-100 w-full box-border p-6 md:p-10 max-w-[536px] rounded-[10px] h-[237px] md:h-[287px] !flex flex-col relative"
            >
              <div className="absolute h-full -right-[120px] md:right-0 top-0">
                <Image 
                  src={CardCircle}
                  alt="card circle"
                  className="h-full"
                />
              </div>
              <div className="font-bold text-black max-w-[280px] text-[18px] md:text-2xl leading-[30px] flex-1">{d.title}</div>
              <div>
                <h3 className="text-[44px] md:text-[54px] leading-[49px] md:leading-[60px] text-black font-bold">{d.count}</h3>
                <p className="text-base md:text-xl text-black font-light leading-[23px] mt-[14px]">{d.time}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Stats;
