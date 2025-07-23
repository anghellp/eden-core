import React from "react";

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ScrollArea: React.FC<ScrollAreaProps> = ({ className = "", ...props }) => (
  <div className={"overflow-auto " + className} {...props} />
);

