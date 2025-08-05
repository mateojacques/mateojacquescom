import { Mail } from "lucide-react";

const Email = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3">
    <Mail className="w-[2rem] h-[2rem] lg:w-[3rem] lg:h-[3rem]" strokeWidth={1} />
    <p className="text-sm lg:text-lg uppercase">Contact me</p>
  </div>
);

export default Email;
