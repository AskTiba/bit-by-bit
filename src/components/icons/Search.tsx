import * as React from "react";
import { SVGProps } from "react";

const Search = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`lucide lucide-search ${props.className || ""}`}
      {...props}
    >
      {" "}
      <path d="M23 23L17 17" stroke="currentColor" />{" "}
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="currentColor"
      />{" "}
    </svg>
  );
};

export default Search;
