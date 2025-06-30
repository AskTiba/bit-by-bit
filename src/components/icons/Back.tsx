import * as React from "react";
import { SVGProps } from "react";

const Back = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`lucide lucide-back ${props.className || ""}`} {...props}><path d="M6 8L2 12L6 16"/><path d="M2 12H22"/></svg>  
  );
};

export default Back;
