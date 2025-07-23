import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge: React.FC<BadgeProps> = ({ className = "", ...props }) => (
  <span className={"px-2 py-1 text-xs font-semibold bg-gray-200 rounded " + className} {...props} />
);

