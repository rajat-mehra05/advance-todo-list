import React from "react";

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={` ${className} bg-white p-2 text-white rounded-lg hover:bg-slate-600 hover:text-white`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
