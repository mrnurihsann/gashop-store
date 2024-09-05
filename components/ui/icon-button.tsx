import { cn } from "@/lib/utils";
import React, { MouseEventHandler } from "react";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ReactElement;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition"
      )}
    ></button>
  );
};

export default IconButton;
