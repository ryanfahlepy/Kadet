import { BrowserRouter, Routes, Route } from "react-router-dom";

import Beranda from "./pages/Beranda";
import Profil from "./pages/Profil";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Beranda />}></Route>
               <Route path="/profil" element={<Profil />}></Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
