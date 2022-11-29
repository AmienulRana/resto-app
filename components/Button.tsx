interface Props {
  text: string;
  classNameProps?: string;
}

const Button = ({ text, classNameProps = "" }: Props) => {
  return (
    <button
      className={[
        "w-full font-bold text-center py-2.5 rounded-md hover:opacity-70",
        classNameProps,
      ].join(" ")}
    >
      {text}
    </button>
  );
};

export default Button;
