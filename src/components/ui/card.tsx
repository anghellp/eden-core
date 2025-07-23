import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={"rounded border p-2 " + className} {...props} />
);

export const CardContent: React.FC<CardProps> = ({ className = "", ...props }) => (
  <div className={className} {...props} />
);

