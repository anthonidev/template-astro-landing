import React from "react";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

const InputNumber = (props: Props) => {
  return (
    <div>
      <input
        type="number"
        style={{
          width: "60px",
          height: "30px",
          textAlign: "center",
          backgroundColor: "white",
          color: "black",
          border: "1px solid black",
          borderRadius: "5px",
          fontSize: "1rem",
        }}
        {...props}
      />
      <span className="text-sm px-2 text-black">px</span>
    </div>
  );
};

export default InputNumber;
