import axios from "axios";
import { Layouy } from "../components/Layouy";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Images.module.css";

const Homepage = ({ products }) => {
  const router = useRouter();

  return (
    <Layouy>
      <div className={styles.apa}>
        <h1 className="text-lg font-semibold text-center text-3xl font-bold my-8 text-[2pc] ">
          🖼️ List of Images 🖼️
        </h1>

        <div className={styles.cno}>
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
                className="w-full"
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
    </Layouy>
  );
};

export const getServerSideProps = async (context) => {
  const { data: products } = await axios.get(
    "http://localhost:3000/api/products"
  );

  return {
    props: {
      products,
    },
  };
};

export default Homepage;
