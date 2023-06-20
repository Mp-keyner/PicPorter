"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import Logo from "../public/img/logo-ko";
// import Pic from "../public/Pic.svg";

const Navart = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-custom-gray p-2 px-3 sm:px-3">
      <Link href={"/"}>
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Image src={"/img/logo-ko.svg"} alt="Logo" width={80} height={80} />
          <span className="font-semibold text-xl tracking-tight ml-2 cursor-pointer hover:shadow-lg">
            PicPorter
          </span>
          <Image src={"/img/Pic.svg"} width={24} height={24} alt="" />
        </div>
      </Link>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
        >
          <svg
            className="h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <g fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M0 3h20M0 9h20M0 15h20" />
            </g>
          </svg>
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <Link
            href={"/"}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer hover:shadow-lg"
          >
            Inicio
          </Link>
          <Link
            href={"/About"}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white mr-4 cursor-pointer hover:shadow-lg"
          >
            Sobre Picporter
          </Link>
          <Link
            href={"/New"}
            className="block mt-4 lg:inline-block lg:mt-0 text-gray-300 hover:text-white hover:shadow-lg"
          >
            Nueva Imagen
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navart;
