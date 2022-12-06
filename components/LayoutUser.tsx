import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const LayoutUser = (props: Props) => {
  return (
    <section className="w-full h-screen flex justify-center">
      <main className="md:w-96 h-full overflow-y-auto bg-gray-c-100">
        {props.children}
      </main>
    </section>
  );
};

export default LayoutUser;
