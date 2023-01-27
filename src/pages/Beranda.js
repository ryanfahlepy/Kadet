import Header from "../components/Header";
import BodyHome from "../components/BodyHome";
import Footer from "../components/Footer";
import Program from "../components/Program";
import { TabTitle } from "../utilities/Title";

const Beranda = () => {
  TabTitle('Beranda - Kadet')
  return (
    <>
      <Header />
      <BodyHome />
      <Program />
      <Footer />
    </>
  );
};

export default Beranda;
