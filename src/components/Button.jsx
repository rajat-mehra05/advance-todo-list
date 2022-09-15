import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      className={` bg-white p-2 text-white rounded-lg hover:bg-slate-200`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
