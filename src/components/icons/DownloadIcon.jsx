import React from "react";

const DownloadIcon = (props) => {
  return (
    <>
      {props.selected ? (
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 11.25v.9c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-6.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 01-.984-.984c-.245-.48-.245-1.11-.245-2.371v-.9m10.5-3.75L9 11.25m0 0L5.25 7.5M9 11.25v-9"
            stroke="#FF9898"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.75 11.25v.9c0 1.26 0 1.89-.245 2.371-.216.424-.56.768-.984.984-.48.245-1.11.245-2.371.245h-6.3c-1.26 0-1.89 0-2.371-.245a2.25 2.25 0 01-.984-.984c-.245-.48-.245-1.11-.245-2.371v-.9m10.5-3.75L9 11.25m0 0L5.25 7.5M9 11.25v-9"
            stroke={props.isHovering ? "#FF9898" : "#3A3A47"}
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
};

export default DownloadIcon;
