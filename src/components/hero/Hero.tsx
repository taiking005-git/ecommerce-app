import Image from "next/image";
import Card from "../Card";
// import flashImg from "../../public/assets/images/FLASH.gif";

const Hero = () => {
  return (
    <div className="flex-1 h-full w-full">
      <Card>
        <figure className="relative w-full h-full">
          {/* <Image
            src={flashImg}
            alt="flashsale"
            loading="lazy"
            fill
          /> */}
        </figure>
      </Card>
    </div>
  );
};

export default Hero;
