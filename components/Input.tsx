import React from "react";
import { Typography } from "@mui/material";

interface Props {
  type: React.HTMLInputTypeAttribute;
  placeholder: string | undefined;
  label: String;
  classNameInput?: string | undefined;
  classNameContainer?: string | undefined;
}

const Input = (props: Props) => {
  const { label, type, placeholder, classNameInput, classNameContainer } =
    props;
  return (
    <div className={classNameContainer}>
      <Typography component="label" className="mb.1-5">
        {label}
      </Typography>
      <input
        type={type}
        placeholder={placeholder}
        className={[
          "w-full rounded-md border-black border p-2.5 text-sm",
          classNameInput,
        ].join(" ")}
      />
    </div>
  );
};

export default Input;
