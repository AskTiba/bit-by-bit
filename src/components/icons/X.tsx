import * as React from "react";
import { SVGProps } from "react";

const X = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`lucide lucide-x ${props.className || ""}`} {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>  
  );
};

export default X;
