import { Dispatch, ReactNode, SetStateAction } from "react";
import Slider from "react-slick";

const SliderComponenet = ({
  setCurrentIndex,
  componenetData,
}: {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  componenetData: ReactNode;
}) => {
  const settings = {
    speed: 500,
    // className: "slider variable-width",
    // centerMode: true,
    // variableWidth: false,
    // leftPadding: "60px",
    slidesToShow: 2.05,
    slidesToScroll: 1,
    onSwipe: function () {},
    afterChange: function (index: number) {
      setCurrentIndex(index);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full ">
      <div
        className="flex flex-row  mt-10"
        style={{
          display: "block",
        }}
      >
        <Slider {...settings}>{componenetData}</Slider>
      </div>
    </div>
  );
};

export default SliderComponenet;
