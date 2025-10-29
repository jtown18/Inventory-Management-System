import * as React from "react";

export function FileDocumentIcon({
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
      viewBox="0 0 1024 1024"
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M 32,48 V 207.9236" />
      <path d="M 224,96 V 208" />
      <path d="m 64,16 h 80" />
      <path d="M 64,240 H 192" />
      <path d="m 224,208 c 0.0874,15.98169 -16,32 -32,32" />
      <path d="m -32,208 c -10e-7,16 -16,32 -32,32" transform="scale(-1 1)" />
      <path
        d="M -32,-47.976784 C -32,-32 -48,-16.356322 -63.999997,-16.000002"
        transform="scale(-1)"
      />
      <path d="M 223.91257,96.071779 144,16" />
      <path
        d="m -144,64 c -0.0492,15.912926 -16.06452,31.999995 -32,32"
        transform="scale(-1 1)"
      />
      <path d="M 144,64 V 16" />
      <path d="m 176,96 h 48" />
      <path d="m 64,208 h 48" />
      <path d="m 64,176 h 80" />
      <path d="m 64,144 h 48" />
    </svg>
  );
}
