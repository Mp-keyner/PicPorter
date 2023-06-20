import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Images.module.css";

const Carrusel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  //   console.log(products[0].Url);
  return (
    <div className=" sm:w-[50%] flex flex-col justify-center items-center w-[100%]">
      <h1 className=" font-bold text-3xl m-2 text-center">Imagenes Subidas</h1>
      <div
        className={`max-h-[400px] overflow-auto w-[100%] sm:w-[22pc] ${styles.scrool}`}
      >
        {products.map((product) => {
          let Urldb = product.Url;

          if (Urldb.startsWith("https://")) {
            console.log("La URL contiene 'https://' al principio");
          } else {
            console.log("La URL no contiene 'https://' al principio");
            Urldb = "/img/URL-not.png";
          }

          return (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="w-full m-3"
              data-aos="fade-up"
            >
              <div
                className={`bg-cover h-[11pc] w-[18pc] bg-gray-200 mx-auto rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out min-h-[7pc] bg-center ${styles.imageUno}`}
                style={{
                  backgroundImage: `url(${Urldb})`,
                  transition: "all 0.9s ease-in-out",
                }}
              >
                <div className="w-full h-full bg-black bg-opacity-50 text-white flex flex-col items-center p-3 ">
                  <h1 className="text-lg font-semibold">{product.name}</h1>
                  <p>{product.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Carrusel;
