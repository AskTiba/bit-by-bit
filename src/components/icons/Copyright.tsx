import * as React from "react";
import { SVGProps } from "react";

const Copyright = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`lucide lucide-copyright ${props.className || ""}`} {...props}><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>  
  );
};

export default Copyright;
