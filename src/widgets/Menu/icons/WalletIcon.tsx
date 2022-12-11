import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M9.92525 0.827673C10.0594 0.6598 10.2255 0.520205 10.414 0.416967C10.6025 0.313729 10.8096 0.248899 11.0233 0.22623C11.2369 0.203561 11.453 0.223502 11.659 0.2849C11.8649 0.346299 12.0566 0.447934 12.223 0.583923L17.5238 4.91292C17.8153 5.15094 18.0151 5.48276 18.0892 5.85173C18.1633 6.2207 18.107 6.60395 17.93 6.93605C17.4666 6.79441 16.9846 6.72266 16.5 6.72317H16.0125L16.4967 6.17067L13.705 3.8908L11.4024 6.7248H9.30775L12.4456 2.8638L11.1944 1.84167L7.29762 6.72317H5.21763L9.92525 0.827673ZM14.0625 14.8482C13.847 14.8482 13.6403 14.9338 13.488 15.0861C13.3356 15.2385 13.25 15.4452 13.25 15.6607C13.25 15.8762 13.3356 16.0828 13.488 16.2352C13.6403 16.3876 13.847 16.4732 14.0625 16.4732H15.6875C15.903 16.4732 16.1097 16.3876 16.262 16.2352C16.4144 16.0828 16.5 15.8762 16.5 15.6607C16.5 15.4452 16.4144 15.2385 16.262 15.0861C16.1097 14.9338 15.903 14.8482 15.6875 14.8482H14.0625ZM1.875 7.53567C1.875 7.32018 1.9606 7.11352 2.11298 6.96115C2.26535 6.80878 2.47201 6.72317 2.6875 6.72317H3.59425L4.88613 5.09817H2.6875C2.04103 5.09817 1.42105 5.35498 0.963927 5.8121C0.506807 6.26922 0.25 6.88921 0.25 7.53567V17.2857C0.25 18.3631 0.678012 19.3964 1.43988 20.1583C2.20175 20.9202 3.23506 21.3482 4.3125 21.3482H16.5C17.362 21.3482 18.1886 21.0058 18.7981 20.3963C19.4076 19.7868 19.75 18.9601 19.75 18.0982V11.5982C19.75 10.7362 19.4076 9.90957 18.7981 9.30008C18.1886 8.69058 17.362 8.34817 16.5 8.34817H2.6875C2.47201 8.34817 2.26535 8.26257 2.11298 8.1102C1.9606 7.95782 1.875 7.75116 1.875 7.53567ZM1.875 17.2857V9.83505C2.1285 9.92442 2.40313 9.97317 2.6875 9.97317H16.5C16.931 9.97317 17.3443 10.1444 17.649 10.4491C17.9538 10.7539 18.125 11.1672 18.125 11.5982V18.0982C18.125 18.5292 17.9538 18.9425 17.649 19.2472C17.3443 19.552 16.931 19.7232 16.5 19.7232H4.3125C3.66603 19.7232 3.04605 19.4664 2.58893 19.0092C2.13181 18.5521 1.875 17.9321 1.875 17.2857Z"
        fill="#2669F5"
      />
    </Svg>
  );
};

export default Icon;