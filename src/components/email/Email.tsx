import { Mail } from "lucide-react";

const Email = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3">
    <Mail style={{ width: "3rem", height: "3rem" }} strokeWidth={1} />
    <p className="text-lg uppercase">Contact me</p>
  </div>
);

export default Email;
