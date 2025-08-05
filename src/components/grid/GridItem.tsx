import { MouseEventHandler, ReactElement, useState } from "react";
import { Button } from "../ui/button";
import { ExternalLink } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import React from "react";

interface IGridItem {
  component: ReactElement;
  classes?: string;
  type?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  href?: string;
  tooltip?: string;
  childComponent?: ReactElement;
}

interface IGridButton extends IGridItem {
  setIsFullscreen: (isFullscreen: boolean) => void;
}

const ExternalLinkButton = ({ href }: { href: string }) => (
  <a href={href} target="_blank" rel="noreferrer">
    <Button
      variant="ghost"
      className="absolute right-[10px] top-[10px]"
      size="icon"
    >
      <ExternalLink className="w-[1rem] h-[1rem] lg:w-[1.5rem] lg:h-[1.5rem]" />
    </Button>
  </a>
);

const GridButton = ({
  component,
  onClick,
  tooltip,
  setIsFullscreen,
}: IGridButton) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className="w-full h-full">
        <Button
          className="w-full h-full gap-0"
          variant="ghost"
          onClick={(e) => {
            setIsFullscreen(true);
            if (onClick) onClick(e);
          }}
        >
          {component}
        </Button>
      </TooltipTrigger>
      <TooltipContent className="text-lg">{tooltip || ""}</TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

const GridItem = (props: IGridItem) => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const gridComponents: { [key: string]: any } = {
    button: <GridButton {...props} {...{ setIsFullscreen }} />,
    default: props.component,
  };

  return (
    <div
      className={`${`grid-item ${isFullscreen ? "fullscreen-item" : ""} ${
        props.classes || ""
      }`.trim()}`}
    >
      <div className="content">
        {isFullscreen && props.childComponent
          ? React.cloneElement(props.childComponent, { setIsFullscreen })
          : gridComponents[props.type || "default"]}
        {props.href && <ExternalLinkButton href={props.href} />}
      </div>
    </div>
  );
};

export default GridItem;
