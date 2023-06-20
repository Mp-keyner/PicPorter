import React from "react";
import Image from "next/image";
import Link from "next/link";

function StickyButton() {
  const handleClick = () => {
    // Acciones a realizar cuando se hace clic en el botón
  };

  return (
    <>
      <link href={"/New"}>
        <button
          className="fixed bottom-4 left-[95%] transform -translate-x-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClick}
        >
          +
          <Image src="/img/Pic.svg" width={50} height={50} />
        </button>
      </link>
    </>
  );
}

export default StickyButton;
