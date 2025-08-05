import { Button } from "../ui/button";
import { X } from "lucide-react";

const RepositoryModal = ({
  repository,
  setIsFullscreen,
}: {
  repository: any;
  setIsFullscreen?: (isFullscreen: boolean) => void;
}) => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between">
        <h1 className="text-5xl font-semibold">{repository.title}</h1>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => {
            if (setIsFullscreen) setIsFullscreen(false);
          }}
        >
          <X style={{ width: 32, height: 32 }} />
        </Button>
      </div>
    </div>
  );
};

export default RepositoryModal;
