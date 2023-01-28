import React from "react";

const UploadIcon = (props) => {
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
                d="M6 12l3-3m0 0l3 3M9 9v6.75m6-3.193a4.125 4.125 0 00-2.625-7.307.464.464 0 01-.4-.227 5.625 5.625 0 10-8.834 6.822"
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
                d="M6 12l3-3m0 0l3 3M9 9v6.75m6-3.193a4.125 4.125 0 00-2.625-7.307.464.464 0 01-.4-.227 5.625 5.625 0 10-8.834 6.822"
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

export default UploadIcon;
