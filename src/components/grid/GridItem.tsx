import { MouseEventHandler, ReactNode } from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface IGridItem {
  component: ReactNode;
  classes?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  tooltip?: string;
}

const ExternalLinkButton = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Button
      variant="ghost"
      className="absolute right-[10px] top-[10px]"
      size="icon"
    >
      <ExternalLink style={{ width: "1.5rem", height: "1.5rem" }} />
    </Button>
  </a>
);

const GridButton = ({ component, onClick, tooltip }: IGridItem) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full h-full">
        <Button
          className="w-full h-full gap-0"
          variant="ghost"
          onClick={onClick}
        >
          {component}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="text-lg">{tooltip || ""}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const GridItem = (props: IGridItem) => {
  const gridComponents: { [key: string]: any } = {
    button: <GridButton {...props} />,
    default: props.component,
  };

  return (
    <div className={`${`grid-item ${props.classes || ""}`.trim()}`}>
      <div className="content">
        {gridComponents[props.type || "default"]}
        {props.href && <ExternalLinkButton href={props.href} />}
      </div>
    </div>
  );
};

export default GridItem;
