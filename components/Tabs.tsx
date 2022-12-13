import { useState, useRef } from "react";

interface Props {
  labels: string[];
  tabActive: string;
  setTabActive: React.Dispatch<React.SetStateAction<string>>;
}

const Tabs = (props: Props) => {
  const { tabActive, setTabActive } = props;
  const [indicator, setIndicator] = useState({
    width: 73,
    position: 24,
  });
  const handleNavigateTabs = (button: any, tabActiveParam: string) => {
    const buttonWidth = button.target.clientWidth;
    const buttonPosition = button.target.offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
    setTabActive(tabActiveParam);
  };
  return (
    <section className="flex border-b w-full overflow-x-auto hide-scrollbar sticky top-0 border-gray-c-100 px-6 py-4">
      <span
        className="absolute bottom-0 rounded border border-black duration-700"
        style={{
          left: `${indicator.position}px`,
          width: `${indicator.width}px`,
        }}
      />
      {props.labels.map((data, index) => (
        <button
          key={index}
          className={[
            "text-md mr-6 bg-transparent min-w-max duration-700",
            tabActive === data ? " font-bold" : "",
          ].join(" ")}
          onClick={(e) => handleNavigateTabs(e, data)}
        >
          {data}
        </button>
      ))}
    </section>
  );
};

export default Tabs;
