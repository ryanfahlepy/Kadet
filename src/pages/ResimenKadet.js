import Header from "../components/Header";
import Footer from "../components/Footer";

const ResimenKadet = () => {
  return (
    <>
      <div>
        <div
          className="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
          style={{
            backgroundImage: 'url("images/logo_menkad1.png")',
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div>
              <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
                RESIMEN KADET MAHASISWA
              </h1>
            </div>
            <div className="text-center">
              <ul className="nav nav-pills flex flex-col md:flex-row flex-wrap list-none place-content-center mb-4" id="pills-tab3" role="tablist">
                <li className="nav-item" role="presentation">
                  <button type="button" className="
  nav-link
  block
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:mr-2
  focus:outline-none focus:ring-0
  active
" id="pills-home-tab3" data-bs-toggle="pill" data-bs-target="#pills-pokdo" role="tab" aria-controls="pills-home3"
                    aria-selected="true">
                    Kelompok Komando
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="
  nav-link
  block
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:mx-2
  focus:outline-none focus:ring-0
" id="pills-profile-tab3" data-bs-toggle="pill" data-bs-target="#pills-poktaf" role="tab"
                    aria-controls="pills-profile3" aria-selected="false">
                    Kelompok Staf
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="
  nav-link
  block
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:ml-2
  focus:outline-none focus:ring-0
" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-lemus" role="tab"
                    aria-controls="pills-contact3" aria-selected="false">
                    Lembaga Musyawarah
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="
  nav-link
  block
  font-medium
  text-xs
  leading-tight
  uppercase
  rounded
  w-full
  md:w-auto
  px-6
  py-3
  my-2
  md:ml-2
  focus:outline-none focus:ring-0
" id="pills-contact-tab3" data-bs-toggle="pill" data-bs-target="#pills-polkad" role="tab"
                    aria-controls="pills-contact3" aria-selected="false">
                    Polisi Kadet
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="pills-tabContent3">
                <div className="tab-pane fade show active text-lg font-bold" id="pills-pokdo" role="tabpanel" aria-labelledby="pills-home-tab3">
                  KELOMPOK KOMANDO
                </div>
                <div className="">

                </div>
                <div className="tab-pane fade" id="pills-poktaf" role="tabpanel" aria-labelledby="pills-profile-tab3">
                  KELOMPOK STAF
                </div>
                <div className="tab-pane fade" id="pills-lemus" role="tabpanel" aria-labelledby="pills-contact-tab3">
                  LEMBAGA MUSYAWARAH
                </div>
                <div className="tab-pane fade" id="pills-polkad" role="tabpanel" aria-labelledby="pills-contact-tab3">
                  POLISI KADET
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResimenKadet;
