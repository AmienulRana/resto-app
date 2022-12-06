import React from 'react';

interface Props {
  children: React.ReactNode;
  classNameProps?: string;
}

const Button = ({ children, classNameProps = "" }: Props) => {
  return (
    <button
      className={[
        "w-full font-bold text-center py-2.5 rounded-md hover:opacity-70",
        classNameProps,
      ].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
