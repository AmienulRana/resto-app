import { useEffect, useState } from "react";

interface IPropsTabs {
  tabActive: string;
  setTabActive: React.Dispatch<React.SetStateAction<string>>;
  labels: string[];
}

export default function Tabs({ tabActive, setTabActive, labels }: IPropsTabs) {
  const [indicator, setIndicator] = useState({
    width: 73,
    position: 24,
  });
  const handleNavigateTabs = (event: any, tabActive: string) => {
    const buttonWidth: number = event.target.clientWidth;
    const buttonPosition: number = event.target.offsetLeft;
    setIndicator({ width: buttonWidth, position: buttonPosition });
    setTabActive(tabActive);
  };
  useEffect(() => {
    setTabActive(labels[0]);
  }, []);
  return (
    <section className="flex border-b w-full overflow-x-auto hide-scrollbar sticky top-0 border-gray-c-100 px-6 py-4">
      <span
        className="absolute bottom-0 rounded border border-orange-c-100 duration-300"
        style={{
          left: `${indicator.position}px`,
          width: `${indicator.width}px`,
        }}
      />
      {labels.map((data, index) => (
        <button
          key={index}
          className={[
            "text-md mr-6 bg-transparent min-w-max duration-300",
            tabActive === data ? "text-orange-c-100" : "",
          ].join(" ")}
          onClick={(e) => handleNavigateTabs(e, data)}
        >
          {data}
        </button>
      ))}
    </section>
  );
}
