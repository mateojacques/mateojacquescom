import { File } from "lucide-react";

const Cv = () => (
  <div className="w-full h-full flex flex-col justify-center items-center gap-3">
    <File style={{ width: "3rem", height: "3rem" }} strokeWidth={1} />
    <p className="text-lg uppercase">Download CV</p>
  </div>
);

export default Cv;
