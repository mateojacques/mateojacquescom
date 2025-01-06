const Banner = ({ imageSrc }: { imageSrc: string }) => (
  <img
    src={imageSrc}
    className="w-full h-full"
    style={{ aspectRatio: "3/1" }}
    alt="Banner"
  />
);

export default Banner;
