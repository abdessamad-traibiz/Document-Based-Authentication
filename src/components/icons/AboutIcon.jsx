import React from "react";

const AboutIcon = (props) => {
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
          <g clipPath="url(#clip0_123_3322)">
            <path
              d="M9 12V9m0-3h.008M16.5 9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              stroke="#FF9898"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_123_3322">
              <path fill="#fff" d="M0 0H18V18H0z" />
            </clipPath>
          </defs>
        </svg>
      ) : (
        <svg
          width={18}
          height={18}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_123_3322)">
            <path
              d="M9 12V9m0-3h.008M16.5 9a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
              stroke={props.isHovering ? "#FF9898" : "#3A3A47"}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_123_3322">
              <path fill="#fff" d="M0 0H18V18H0z" />
            </clipPath>
          </defs>
        </svg>
      )}
    </>
  );
};

export default AboutIcon;
