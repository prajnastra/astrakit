import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M4 12L5.6 10.3333H18.4L20 12V20.3333L18.4 22H5.6L4 20.3333V12ZM5.6 12V20.3333H18.4V12H5.6ZM16.8 10.3333V7C16.8 5.67392 16.2943 4.40215 15.3941 3.46447C14.4939 2.52678 13.273 2 12 2C10.727 2 9.50606 2.52678 8.60589 3.46447C7.70571 4.40215 7.2 5.67392 7.2 7V10.3333H8.8V7C8.8 6.11594 9.13714 5.2681 9.73726 4.64298C10.3374 4.01786 11.1513 3.66667 12 3.66667C12.8487 3.66667 13.6626 4.01786 14.2627 4.64298C14.8629 5.2681 15.2 6.11594 15.2 7V10.3333H16.8Z" />
    </Svg>
  );
};

export default Icon;
