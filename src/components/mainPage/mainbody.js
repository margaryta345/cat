import { Link } from "react-router-dom";
function Mainbody() {
  return (
    <div
      className="bg-black"
      style={{
        backgroundImage: "url('/ca.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="h-[800px] bg-gray-950 bg-opacity-70">
        <h1
          className="text-white pl-40 pt-40 font-extrabold text-[70px] "
          style={{ fontFamily: "Special Elite" }}
        >
          Murchik
        </h1>
        <h2
          className="text-white pl-40 text-[30px] "
          style={{ fontFamily: "Special Elite" }}
        >
          - Maine Coon{" "}
        </h2>
        <Link
          className="text-yellow-400 text-[40px] no-underline pl-40"
          style={{ fontFamily: "Caveat" }}
          to="/kätzchen"
        >
          Neu Kätzchen
        </Link>
      </div>
    </div>
  );
}
export default Mainbody;
