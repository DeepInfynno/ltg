import { Dispatch, ReactNode, SetStateAction } from "react";
import Slider from "react-slick";

const SliderComponenet = ({
  setCurrentIndex,
  sliderFor,
  componenetData,
}: {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  componenetData: ReactNode;
  sliderFor: ReactNode;
}) => {
  const careerSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "545px",
    slidesToShow: 1,
    speed: 500,
    onSwipe: function () {},
    afterChange: function (index: number) {
      setCurrentIndex(index);
    },
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "360px",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "160px",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 750,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "150px",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "100px",
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "30px",
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };
  const officeSettings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    onSwipe: function () {},
    afterChange: function (index: number) {
      setCurrentIndex(index);
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          infinite: true,
          slidesToShow: 3,
          speed: 500,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 3,
          speed: 500,
        },
      },
      {
        breakpoint: 750,
        settings: {
          infinite: true,
          slidesToShow: 2.05,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1.1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1.1,
          speed: 500,
        },
      },
      {
        breakpoint: 375,
        settings: {
          infinite: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  const settings = {
    infinite: true,
    slidesToShow: 2.05,
    speed: 500,
    onSwipe: function () {},
    afterChange: function (index: number) {
      setCurrentIndex(index);
    },
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          infinite: true,
          slidesToShow: 2.1,
          speed: 500,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          infinite: true,
          slidesToShow: 2.05,
          speed: 500,
        },
      },
      {
        breakpoint: 750,
        settings: {
          infinite: true,
          slidesToShow: 2.05,
          speed: 500,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 1.1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1.1,
          speed: 500,
        },
      },
      {
        breakpoint: 375,
        settings: {
          infinite: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
    ],
  };

  return (
    <div className="w-full">
      <div
        className="flex flex-row  mt-10"
        style={{
          display: "block",
        }}
      >
        {sliderFor === "careers" ? (
          <Slider {...careerSettings}>{componenetData}</Slider>
        ) : sliderFor === "office" ? (
          <Slider {...officeSettings}>{componenetData}</Slider>
        ) : (
          <Slider {...settings}>{componenetData}</Slider>
        )}
      </div>
    </div>
  );
};

export default SliderComponenet;
