import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function StickyButton() {
  const router = useRouter();
  const handleClick = () => {
    // Acciones a realizar cuando se hace clic en el botón
    router.push("/New");
  };

  return (
    <div>
      <button
        className="fixed bottom-4 left-[91%] sm:left-[95%] transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        +
        <Image src="/img/Pic.svg" width={50} height={50} />
      </button>
    </div>
  );
}

export default StickyButton;
