import { Layouy } from "@/components/Layouy";
import Image from "next/image";
import React from "react";

const indec = () => {
  return (
    <>
      <Layouy>
        <div className="flex items-center justify-center">
          <div>
            <h1 className="text-[2pc] font-bold">
              No se encontraron coincidencias..
            </h1>
            <Image src="/img/tiro.gif" width={300} height={300} />
          </div>
          <div>
            <Image src="/img/404.svg" width={400} height={400} />
          </div>
        </div>
      </Layouy>
    </>
  );
};

export default indec;
