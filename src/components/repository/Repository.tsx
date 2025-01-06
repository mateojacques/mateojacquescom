const Repository = ({ logoSrc, size = 80 }: { logoSrc: string, size?: number }) => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3">
    <img
      height={size}
      width={size}
      src={logoSrc}
    />
  </div>
);

export default Repository;
