import React from "react";

export const Button = ({ children }: { children?: React.ReactNode }) => {
  return (
    <button
      className="py-2 px-4"
      style={{
        background: "#27ae60",
        color: "#fff",
        textDecoration: "none",
        borderRadius: 10,
        borderColor: "145a32",
      }}
    >
      {children}
    </button>
  );
};
