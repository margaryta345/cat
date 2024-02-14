import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function Footer() {
  return (
    <footer>
      <ScrollToTop />
      <div className="bg-black h-60 ">
        <h4 className="text-center pt-12 font-roboto text-white">
          Unser Zwinger ist registriert in: Name
        </h4>
        <ul className="mt-12 flex ml-[27%] ">
          <Link
            to="/"
            className="border-b mr-10 text-white no-underline  hover:text-yellow-400 hover:border-yellow-400"
          >
            Über uns
          </Link>
          <Link
            to="/kätzchen"
            className="border-b mr-10 text-white no-underline hover:text-yellow-400 hover:border-yellow-400"
          >
            Kätzchen
          </Link>
          <Link
            to="/Mädchenkatzen"
            className="border-b mr-10 text-white no-underline hover:text-yellow-400 hover:border-yellow-400"
          >
            Mädchenkatzen
          </Link>
          <Link
            to="/jungekätzchen"
            className="border-b mr-10  text-white no-underline hover:text-yellow-400 hover:border-yellow-400"
          >
            Jungekätzchen
          </Link>
          <Link
            to="/galerie"
            className="border-b mr-10 text-white no-underline hover:text-yellow-400 hover:border-yellow-400"
          >
            Galerie
          </Link>
          <Link
            to="/kontact"
            className="border-b mr-10 text-white no-underline hover:text-yellow-400 hover:border-yellow-400"
          >
            Kontakt
          </Link>
        </ul>
        <Link
          to="/kontact"
          className=" mt-4 flex items-center no-underline text-white justify-around hover:text-yellow-400 hover:border-yellow-400"
        >
          Murchik@gmail.com
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
