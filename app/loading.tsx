import { FC } from "react";
import loaderGif from "./img/Animation - 1735299465174.gif"
import Image from "next/image";

const Loader: FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
        <Image src={loaderGif} alt="Loading..." />
    </div>
  );
};

export default Loader;
