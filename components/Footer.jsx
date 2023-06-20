"use client";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Linkedin from "./Linkedin";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import Github from "./Github";

const Pie = () => {
  return (
    <>
      <footer className={styles.siteFooter}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.acerca}>
              <p>
                PicPorter es una aplicación web que permite a los usuarios
                gestionar y transferir imágenes de manera rápida y sencilla. La
                aplicación se centra en proporcionar una solución eficiente para
                subir, almacenar y compartir imágenes en línea.
                <br />
                <br />
                Con PicPorter, los usuarios pueden cargar imágenes desde su
                dispositivo local o mediante URL externas. La aplicación admite
                una variedad de formatos de imagen populares, como JPEG, PNG y
                GIF.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles.footerIco}>
          <div className={styles.footerIcon}>
            <div className={styles.col}>
              {" "}
              {/*className="col-md-8 col-sm-6 col-xs-12"*/}
              <p className={styles.copyrightText}>
                <span className={styles.vic}>PicPorter</span> &copy; 2023 Todos
                los derechos reservados por
                <a className={styles.navLink} href="#">
                  {" "}
                  Keyner Oswaldo Dela hoz Hincapie
                </a>
                .
              </p>
            </div>

            <div className={styles.colmd}>
              {" "}
              {/*className="col-md-4 col-sm-6 col-xs-12"*/}
              <ul className={styles.socialIcons}>
                <li>
                  <Facebook />
                </li>
                <li>
                  <Github />
                </li>
                <li>
                  <Linkedin />
                </li>
                <li>
                  <Instagram />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Pie;
