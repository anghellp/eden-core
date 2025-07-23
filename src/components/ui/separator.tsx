import React from "react";

export const Separator: React.FC<React.HTMLAttributes<HTMLHRElement>> = ({ className = "", ...props }) => (
  <hr className={"border-t my-2 " + className} {...props} />
);

