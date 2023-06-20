import React from "react";
import { toast } from "react-toastify";

function CopyToClipboardButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Texto copiado al portapapeles");
        toast.success("Texto copiado al portapapeles con exito");
      })
      .catch((error) => {
        console.log("Error al copiar el texto al portapapeles:", error);
      });
  };

  return (
    <button
      onClick={copyToClipboard}
      className="btn bg-green-600 px-3 w-30 h-10 m-3 rounded shadowx-md hover:bg-green-500"
    >
      Copiar al portapapeles
    </button>
  );
}

export default CopyToClipboardButton;
