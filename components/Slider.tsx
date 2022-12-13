import { Dispatch, LegacyRef, ReactNode, SetStateAction, useRef, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import classNames from "classnames";

const SliderComponent = ({
  setCurrentIndex,
  currentIndex,
  showDots,
  showArrows,
  sliderFor,
  componentData,
}: {
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex?: number;
  showDots?: boolean;
  showArrows?: boolean;
  componentData: ReactNode;
  sliderFor: ReactNode;
}) => {

  const careerSlider: LegacyRef<Slider> | undefined = useRef(null);

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
    slidesToShow: 3,
    speed: 500,
    arrows: showArrows || false,
    dots: showDots || false,
    nextArrow: <FaArrowCircleRight color="#ea0000" size={"40px"} />,
    prevArrow: <FaArrowCircleLeft color="#ea0000" size={"40px"} />,
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
          slidesToShow: 2,
          speed: 500,
        },
      },
      {
        breakpoint: 640,
        settings: {
          infinite: true,
          slidesToShow: 1,
          speed: 500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
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

  useEffect(() => {
    careerSlider.current?.slickGoTo(currentIndex || 0);
  }, [currentIndex])
  

  return (
    <div className="w-full">
      <div
        className="flex flex-row  mt-10"
        style={{
          display: "block",
        }}
      >
        {sliderFor === "careers" ? (
          <Slider ref={careerSlider} {...careerSettings}>{componentData}</Slider>
        ) : sliderFor === "office" ? (
          <Slider {...officeSettings}>{componentData}</Slider>
        ) : (
          <Slider ref={careerSlider} {...settings}>{componentData}</Slider>
        )}
      </div>
    </div>
  );
};

export default SliderComponent;
