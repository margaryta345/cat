import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav>
      <div className="bg-black h-20 flex justify-between items-center text-[24px] font-extrabold font-sans relative ">
        <div className="grid grid-cols-11">
          <Link
            to="/"
            className="col-span-3 flex justify-between items-center text-white ml-12 no-underline"
          >
            Murchik
          </Link>
          <Link
            to="/"
            className="col-span-1 flex justify-between text-white items-center no-underline"
          >
            Über uns
          </Link>
          <Link
            to="/kätzchen"
            className="col-span-1 flex justify-between items-center ml-6 text-yellow-400 no-underline"
          >
            Kätzchen
          </Link>
          <Link
            to="/Mädchenkatzen"
            className="col-span-1 flex justify-between text-white items-center  ml-10 no-underline "
          >
            Mädchenkatzen
          </Link>
          <Link
            to="/jungekätzchen"
            className="col-span-1 flex justify-between text-white items-center no-underline ml-[145px]"
          >
            Jungekätzchen
          </Link>
          <Link
            to="/galerie"
            className="col-span-1 flex justify-between  text-white items-center no-underline ml-[230px] "
          >
            Galerie
          </Link>
          <Link
            to="/kontact"
            className="col-span-1 flex justify-between text-white items-center no-underline ml-[215px] "
          >
            Kontakt
          </Link>
          <Link
            to="https://www.facebook.com/"
            className="col-span-1 flex justify-between text-white items-center no-underline ml-[200px] "
          >
            <img
              className="absolute"
              width="30"
              height="30"
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png"
              alt="facebook"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
