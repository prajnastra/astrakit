import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g clipPath="url(#clip0_42_1003)">
        <path
          d="M4 12L5.6 10.3333H18.4L20 12V20.3333L18.4 22H5.6L4 20.3333V12ZM5.6 12V20.3333H18.4V12H5.6ZM16.8 10.3333V7C16.8 5.67392 16.2943 4.40215 15.3941 3.46447C14.4939 2.52678 13.273 2 12 2C10.727 2 9.50606 2.52678 8.60589 3.46447C7.70571 4.40215 7.2 5.67392 7.2 7V10.3333H8.8V7C8.8 6.11594 9.13714 5.2681 9.73726 4.64298C10.3374 4.01786 11.1513 3.66667 12 3.66667C12.8487 3.66667 13.6626 4.01786 14.2627 4.64298C14.8629 5.2681 15.2 6.11594 15.2 7V10.3333H16.8Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 14.125C14.3075 14.125 12.125 16.3075 12.125 19C12.125 21.6925 14.3075 23.875 17 23.875C19.6925 23.875 21.875 21.6925 21.875 19C21.875 16.3075 19.6925 14.125 17 14.125ZM17.375 16C17.375 15.9005 17.3355 15.8052 17.2652 15.7348C17.1948 15.6645 17.0995 15.625 17 15.625C16.9005 15.625 16.8052 15.6645 16.7348 15.7348C16.6645 15.8052 16.625 15.9005 16.625 16V19C16.625 19.207 16.793 19.375 17 19.375H19.25C19.3495 19.375 19.4448 19.3355 19.5152 19.2652C19.5855 19.1948 19.625 19.0995 19.625 19C19.625 18.9005 19.5855 18.8052 19.5152 18.7348C19.4448 18.6645 19.3495 18.625 19.25 18.625H17.375V16Z"
          fill="black"
        />
        <path d="M17 15.5V19H20" stroke="white" strokeLinecap="round" />
      </g>
      <defs>
        <clipPath id="clip0_42_1003">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;