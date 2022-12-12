import Link from "next/link";
import Button from "./form/Button";

const WhoWeAre = () => {
  return (
    <div className="w-full max-w-[90%] lg:max-w-[563px] xl:max-w-[663px] 2xl:max-w-[863px] mx-auto mt-[52px] mb-[69px] md:mb-[134px] px-[35px] md:px-0">
      <h3 className="uppercase text-black text-[18px] 2xl:text-[20px] leading-[23px]">
        WHO WE ARE
      </h3>
      <p className="mt-[46px] font-bold text-[18px] 2xl:text-[26px] leading-[30px] text-black">
        LiveTicketGroup is a live entertainment platform that’s making it easier
        for fans to purchase tickets to live matches and events. We’re
        delivering a seamless experience so the only thing fans need to worry
        about is enjoying their live event.
      </p>
      <br />
      <br />
      <h3 className="font-bold text-[16px] xl:text-[18px] 2xl:text-[26px] leading-[30px] text-black">
        Our consumer marketplace
      </h3>
      <br />
      <p className="font-light text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[30px] text-black">
        We work with trusted ticketing partners in order to give fans the
        highest quality customer service possible. We are committed to becoming
        the most trusted ticketing platform in the UK and Europe.
      </p>
      <br />
      <br />
      <h3 className="font-bold text-[16px] xl:text-[18px] 2xl:text-[26px] leading-[30px] text-black">
        Connecting buyers and sellers
      </h3>
      <br />
      <p className="font-light text-[16px] xl:text-[18px] 2xl:text-[20px] leading-[30px] text-black">
        This is our specialty. Through our platform, we connect buyers and
        sellers and make sure the experience is seamless from sale to seat.
      </p>
      <Link href="/about">
        <Button className="block mx-auto md:mx-0 mt-[73px] md:mt-[54px]">
          learn more
        </Button>
      </Link>
    </div>
  );
};

export default WhoWeAre;
