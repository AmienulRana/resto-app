interface PropsButton {
  children: React.ReactNode;
  classNameProps?: string;
}
const Button = ({ children, classNameProps = "", ...restProps }: PropsButton) => {
  return (
    <button
      className={[
        "w-full font-bold text-center py-2.5 rounded-md hover:opacity-70",
        classNameProps,
      ].join(" ")}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
