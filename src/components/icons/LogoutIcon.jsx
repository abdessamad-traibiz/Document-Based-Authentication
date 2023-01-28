import React from "react";

const LogoutIcon = (props) => {
  return (
    <>
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 12.75L15.75 9m0 0L12 5.25M15.75 9h-9m0-6.75h-.9c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 00-.984.984c-.245.48-.245 1.11-.245 2.371v6.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h.9"
          stroke={props.isHovering ? "#FF9898" : "#3A3A47"}
          strokeOpacity={0.7}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default LogoutIcon;
