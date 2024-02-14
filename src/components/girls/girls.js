import Footer from "../navbar/footer";
import NavBar from "../navbar/navbar";
import Bodygirl from "./bodygirl";
import Kontact from "./kontact";
function Girls() {
  return (
    <div>
      <NavBar />
      <Bodygirl name="Mädchenkatzen" />
      <Kontact />
      <Footer />
    </div>
  );
}
export default Girls;
