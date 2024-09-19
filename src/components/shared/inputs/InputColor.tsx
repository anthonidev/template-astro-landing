import React from "react";

type Props = {} & React.InputHTMLAttributes<HTMLInputElement>;

const InputColor = (props: Props) => {
  return <input type="color" {...props} />;
};

export default InputColor;
