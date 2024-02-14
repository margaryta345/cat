import Bodygirl from "../girls/bodygirl";
import Kontact from "../girls/kontact";
import Footer from "../navbar/footer";
import NavBar from "../navbar/navbar";

function Boy() {
  return (
    <div>
      <NavBar />
      <Bodygirl name="Jungekätzchen" />
      <Kontact />
      <Footer />
    </div>
  );
}
export default Boy;
