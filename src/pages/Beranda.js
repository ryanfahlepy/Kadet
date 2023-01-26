import BodyHome from "../components/BodyHome";
import Footer from "../components/Footer";
import Program from "../components/Program";
import { TabTitle } from "../utilities/Title";

const Beranda = () => {
  TabTitle('Beranda - Kadet')
  return (
    <>
      <BodyHome />
      <Program />
      <Footer />
    </>
  );
};

export default Beranda;
