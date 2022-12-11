import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <circle cx="2.77586" cy="3.49998" r="2.77586" fill="#2669F5" />
      <circle cx="11.5" cy="3.49998" r="2.77586" fill="#2669F5" />
      <circle cx="20.2241" cy="3.49998" r="2.77586" fill="#2669F5" />
    </Svg>
  );
};

export default Icon;
