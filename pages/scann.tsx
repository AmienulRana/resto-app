import { QrReader } from "react-qr-reader";
import { useState } from "react";
import LayoutUser from "../components/LayoutUser";
const Scann = () => {
  const [data, setData] = useState("No result");
  return (
    <LayoutUser>
      <section className="border border-orange-c-100">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.text);
            }
          }}
          style={{ width: "100%" }}
          videoContainerStyle={{ paddingTop: "75%" }}
        />
      </section>
      <section className="px-6 mt-4">
        <p className="text-gray-c-200 mb-1.5">
          Arahkan kamera ke Qrcode yang ada di meja
        </p>
        <p className="text-gray-c-200">
          Note : Jika Anda ragu untuk memberi izin website ini mengakses kamera
          anda, silahkan gunakan scanner pada hp anda
        </p>
      </section>
    </LayoutUser>
  );
};

export default Scann;
