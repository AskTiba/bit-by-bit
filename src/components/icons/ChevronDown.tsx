import * as React from "react";
import { SVGProps } from "react";

const ChevronDown = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`lucide lucide-chevron-down ${props.className || ""}`} {...props}><path d="m6 9 6 6 6-6"/></svg>  
  );
};

export default ChevronDown;
