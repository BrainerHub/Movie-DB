import Image from "next/image";
import { Inter } from "next/font/google";
import router from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>{/* <Header/> */}</div>
      {/* <button
        onClick={() => {
          router.push("/main_page");
        }}
      >
        click
      </button> */}
    </>
  );
}
