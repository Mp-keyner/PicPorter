import PruductFrom from "../components/PruductFrom";
import { Layouy } from "../components/Layouy";
import Carrusel from "../components/Carrusel";

function NewPage() {
  return (
    <Layouy>
      <div className="flex w-[100%] sm:flex-row flex-col justify-center items-center ">
        <PruductFrom />
        <Carrusel />
      </div>
    </Layouy>
  );
}

export default NewPage;
