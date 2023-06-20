import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

function PruductFrom() {
  const [images, setimages] = useState({
    name: "",
    description: "",
    Url: "",
  });
  const router = useRouter();

  const handleSubit = async (e) => {
    e.preventDefault();

    try {
      if (router.query.id) {
        await axios.put("/api/products/" + router.query.id, images);
        toast.success("Product updated successfully");
      } else {
        await axios.post("/api/products/", images);
        toast.success("Product save successfully");
      }

      router.push("/");
    } catch (error) {
      console.log(error);
      toast.error(
        "Verifica que todos los datos esten bien !ERROR¡ " + error.message
      );
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setimages({ ...images, [name]: value });
  };

  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/api/products/" + router.query.id);
      setimages({
        name: data.name,
        description: data.description,
        Url: data.Url,
      });
    };

    if (router.query?.id) {
      getProduct(router.query.id);
    }
  }, [router.query.id]);
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xs">
        <form
          onSubmit={handleSubit}
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        >
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name:
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={images.name}
          />

          <label
            htmlFor="Url"
            className="block text-gray-700 font-bold mt-4 mb-2"
          >
            Url:
          </label>
          <input
            type="text"
            name="Url"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={images.Url}
          />

          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mt-4 mb-2"
          >
            Description:
          </label>
          <textarea
            name="description"
            rows="2"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={images.description}
          ></textarea>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-8 rounded shadow-md focus:outline-none focus:shadow-outline">
            {router.query.id ? "UpDate Product" : "Save Product"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PruductFrom;
