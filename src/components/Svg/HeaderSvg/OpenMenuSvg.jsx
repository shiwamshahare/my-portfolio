import React from "react";

export default function OpenMenuSvg() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width={32}
        height={32}
        color="#000"
        fill="none"
        className="toggle-icon text-green-500"
      >
        <path
          d="M7 5h10M4 12h16M7 19h10"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}
