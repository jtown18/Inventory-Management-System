import * as React from "react";

export function ChartIcon({
  size = 24,
  color = "currentColor",
  strokeWidth = 2,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & {
  size?: number;
  color?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 160,192 V 112" />
      <path d="M 192,192 V 64" />
      <path d="M 64,192 V 160" />
      <path d="M 96,128 V 192" />
      <path d="M 128,144 V 192" />
      <path d="M 32,192 H 224" />
      <path d="M 32,32 V 192" />
    </svg>
  );
}
