import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Beranda from "./pages/Beranda";
import ResimenKadet from "./pages/ResimenKadet";
import ResimenKorps from "./pages/ResimenKorps";
import Galeri from "./pages/Galeri";
import Berita from "./pages/Berita";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Beranda />}></Route>
          <Route exact path="/resimenkadet" element={<ResimenKadet />}></Route>
          <Route exact path="/resimenkorps" element={<ResimenKorps />}></Route>
          <Route exact path="/galeri" element={<Galeri />}></Route>
          <Route exact path="/berita" element={<Berita />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
