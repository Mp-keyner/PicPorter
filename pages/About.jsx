import { Layouy } from "../components/Layouy";
import Image from "next/image";

function About() {
  return (
    <Layouy>
      <div
        className="flex w-100% h-[80vh] items-center justify-center flex-col  h-[100%]"
        data-aos="zoom-out"
      >
        <div className="p-[1pc] lg:w-1/2 xl:w-1/2">
          <p className="text-xl">
            PicPorter es una aplicación web que permite a los usuarios gestionar
            y transferir imágenes de manera rápida y sencilla. La aplicación se
            centra en proporcionar una solución eficiente para subir, almacenar
            y compartir imágenes en línea. Con PicPorter, los usuarios pueden
            cargar imágenes desde su dispositivo local o mediante URL externas.
            La aplicación admite una variedad de formatos de imagen populares,
            como JPEG, PNG y GIF.
          </p>
        </div>
        <div>
          <Image src="/img/ko-logo.svg" width={300} height={300} />
        </div>
      </div>
    </Layouy>
  );
}

export default About;

// <div className="p-[1pc] lg:w-1/2 xl:w-1/2 ">
//           <Image
//             src={"img/mark.svg"}
//             width={200}
//             height={200}
//             alt=""
//             className="w-[35vh] lg:w-[90vh] lg:h-[50vh] xl:h-[50vh] "
//           />
//         </div>
