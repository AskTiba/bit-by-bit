import * as React from "react";
import { SVGProps } from "react";
const Naught = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={4}
    className="lucide lucide-circle-icon lucide-circle"
    {...props}
  >
    <circle cx={12} cy={12} r={9} />
  </svg>
);
export default Naught;
