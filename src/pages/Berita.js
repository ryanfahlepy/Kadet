import BodyBerita from "../components/BodyBerita";
import Header from "../components/Header";
import { TabTitle } from "../utilities/Title";
const Berita = () => {
   TabTitle('Berita - Kadet')
   return (
      <>
         <Header />
         <BodyBerita />
      </>
   );
};

export default Berita;
