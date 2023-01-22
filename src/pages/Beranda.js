import BodyHome from "../components/BodyHome";
import Footer from "../components/Footer";
import { TabTitle } from "../utilities/Title";

const Beranda = () => {
  TabTitle('Beranda - Kadet')
  return (
    <>
      <BodyHome />
      <Footer />
    </>
  );
};

export default Beranda;
