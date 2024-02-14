function Bodygirl({ name }) {
  return (
    <div>
      <div className="bg-yellow-400 h-[600px] ">
        <h1
          className="text-black flex justify-center pt-20 font-extrabold text-[40px] "
          style={{ fontFamily: "Special Elite" }}
        >
          {name}
        </h1>
        <h2
          className="text-black flex justify-center pt-2 text-[28px] "
          style={{ fontFamily: "Special Elite" }}
        >
          Kittens was born: Leider sind noch keine Katzen verfügbar
        </h2>
      </div>
    </div>
  );
}
export default Bodygirl;
