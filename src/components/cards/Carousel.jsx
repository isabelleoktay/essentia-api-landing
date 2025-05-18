import BackgroundCard from "./BackgroundCard";
import Marquee from "react-fast-marquee";

const Carousel = ({ images, className }) => {
  return (
    <BackgroundCard
      color="translucent"
      className={`inline-flex flex-nowrap ${className} overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]`}
    >
      <Marquee
        pauseOnHover="true"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.name}
            className="h-12 object-contain opacity-90 hover:opacity-100 transition duration-300 mx-8"
          />
        ))}
      </Marquee>
    </BackgroundCard>
  );
};

export default Carousel;
