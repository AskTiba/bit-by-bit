import * as React from "react"
import { SVGProps } from "react"
const Redo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={200}
    height={200}
    viewBox="0 0 512 512"
    {...props}
  >
    <path d="M512 192V21.3l-64.9 64.9C400.3 33.4 332.2 0 256 0 114.6 0 0 114.6 0 256s114.6 256 256 256c70.7 0 134.7-28.6 181-75l-45.3-45.2C357 426.5 309 448 256 448c-106 0-192-85.9-192-192S150 64 256 64c58.5 0 110.4 26.5 145.5 67.8L341.3 192H512z" />
  </svg>
)
export default Redo
