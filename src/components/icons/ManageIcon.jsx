import React from "react";

const ManageIcon = (props) => {
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
            d="M8.25 11.25H6c-1.398 0-2.097 0-2.648.228a3 3 0 00-1.624 1.624c-.228.551-.228 1.25-.228 2.648M11.625 2.468A3.001 3.001 0 0113.5 5.25M9 16.125l1.519-.304c.132-.026.198-.04.26-.064a.754.754 0 00.155-.083c.055-.038.102-.085.198-.18l4.993-4.994a1.06 1.06 0 10-1.5-1.5l-4.993 4.993c-.096.096-.143.143-.181.198a.75.75 0 00-.083.155 1.576 1.576 0 00-.064.26L9 16.125zM10.125 5.25a3 3 0 11-6 0 3 3 0 016 0z"
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
            d="M8.25 11.25H6c-1.398 0-2.097 0-2.648.228a3 3 0 00-1.624 1.624c-.228.551-.228 1.25-.228 2.648M11.625 2.468A3.001 3.001 0 0113.5 5.25M9 16.125l1.519-.304c.132-.026.198-.04.26-.064a.754.754 0 00.155-.083c.055-.038.102-.085.198-.18l4.993-4.994a1.06 1.06 0 10-1.5-1.5l-4.993 4.993c-.096.096-.143.143-.181.198a.75.75 0 00-.083.155 1.576 1.576 0 00-.064.26L9 16.125zM10.125 5.25a3 3 0 11-6 0 3 3 0 016 0z"
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

export default ManageIcon;
