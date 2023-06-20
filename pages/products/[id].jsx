import { Layouy } from "@/components/Layouy";
import axios from "axios";
import React from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Image from "next/image";

const ProductPage = ({ products }) => {
  const router = useRouter();

  console.log({ products });

  const handleDelete = async (id) => {
    try {
      await axios.delete("/api/products/" + id);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const copyToClipboard = (x) => {
    // const url = x; // Reemplaza esto con la URL que deseas copiar
    // url.select();
    // document.execCommand("copy");
    // alert("Texto copiado");
    console.log("cpy");
  };

  let Urldb = products.Url;
  if (Urldb.startsWith("https://")) {
    console.log("La URL contiene 'https://' al principio");
  } else {
    console.log("La URL no contiene 'https://' al principio");
    Urldb = "/img/URL-not.png";
  }

  return (
    <Layouy>
      <div className="min-h-[30pc] p-3 w-30 flex  items-center  rounded shadow-2xl sm:w-30 sm:justify-center  sm:min-h-200">
        <div>
          <div className=" rounded shadowx-md">
            <h1 className="text-lg font-semibold my-7 ">🖼️{products.name}</h1>
            <p>{products.description}</p>
            <button
              className="btn bg-green-600 px-3 w-30 h-10 m-3 rounded shadowx-md hover:bg-green-500"
              onclick={() => console.log("cpy")}
            >
              Copiar URL
            </button>
          </div>

          <button
            className="btn bg-red-600 px-3 w-30 h-10 m-3 rounded shadowx-md hover:bg-red-500"
            onClick={() => handleDelete(products.id)}
          >
            delete
          </button>

          <button
            className="btn bg-green-600 px-3 w-20 h-10 m-3 rounded shadowx-md hover:bg-green-500"
            onClick={() => router.push("/products/Update/" + products.id)}
          >
            Update
          </button>
        </div>
        <div className=" flex justify-center">
          <Image src={Urldb} width={200} height={100} />
        </div>
      </div>
    </Layouy>
  );
};

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products/" + context.query.id
  );

  return {
    props: {
      products,
    },
  };
};

export default ProductPage;
