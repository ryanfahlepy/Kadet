import Header from "../components/Header";
import Footer from "../components/Footer";

const ResimenKorps = () => {
    return (
        <>
            <div className="">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen"
                    style={{
                        backgroundImage: 'url("images/logo_menkor1.png")',
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        height: "500vh",
                        backgroundAttachment: "fixed"

                    }}
                >
                    <div
                        className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
                        style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
                    >
                        <div>
                            <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
                                RESIMEN KORPS KADET MAHASISWA
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
                                <div className="tab-pane fade show active  pb-8" id="pills-pokdo" role="tabpanel" aria-labelledby="pills-home-tab3">

                                    <div className="grid grid-cols-3">

                                        <div className="col-start-2">
                                            <img className="" src="images/3star.png">
                                            </img>

                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 3 Start*/}
                                    <div className="grid grid-cols-5 mx-10 lg:grid-cols-3 xl:grid-cols-9">
                                        <div className="col-span-2 lg:col-1 lg:col-end-2 xl:col-start-2 xl:col-end-4">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">DANMENKORPS</h1>
                                            <img src="images/danmenkor.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">SMDK ROY ENVITO U</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-start-4 col-span-2 lg:col-start-3 xl:col-start-7 xl:col-end-9">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">WADANMENKORPS</h1>
                                            <img src="images/wadanmenkor.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">SMDK RIYANTI PUTRI</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">KIMIA</h1>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 3 End */}
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/2star.png">
                                            </img>

                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 2 Start*/}
                                    <div className="grid grid-cols-3 mx-3 gap-3 md:grid-cols-6 ">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 1</h1>
                                            <img src="images/danyon1.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NAUFAL AUDADI T</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 2</h1>
                                            <img src="images/danyon2.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ANGELINA DEVA A</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 3</h1>
                                            <img src="images/danyon3.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK SANJI SATHYA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 1</h1>
                                            <img src="images/wadanyon1.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. REY RENOULT</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK ELEKTRO</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 2</h1>
                                            <img src="images/wadanyon2.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ARDIMAN HASUDUNGAN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FISIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 3</h1>
                                            <img src="images/wadanyon3.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NAFRIZAL FAKHRUZAIN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                    </div>


                                    {/* Pokdo Bintang 2 End */}
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/1star.png">
                                            </img>

                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 1 Start*/}
                                    <div className="grid grid-cols-3 mx-3 gap-3 md:grid-cols-9">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A1</h1>
                                            <img src="images/dankia1.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK HAMAMANDA AURA D</h1>
                                            <h1 className="font-medium text-xs">BIOLOGI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B1</h1>
                                            <img src="images/dankib1.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK AGUNG HIRAWAN</h1>
                                            <h1 className="font-medium text-xs">FISIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C1</h1>
                                            <img src="images/dankic1.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK NOVRIZAL RAMADHANI</h1>
                                            <h1 className="font-medium text-xs">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A2</h1>
                                            <img src="images/dankia2.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK AYUMAS QONITA S</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B2</h1>
                                            <img src="images/dankib2.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK M. ABDITYA ARGHANIE</h1>
                                            <h1 className="font-medium text-xs">TEKNIK ELEKTRO</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C2</h1>
                                            <img src="images/dankic2.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK GARY FERDINAND W</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A3</h1>
                                            <img src="images/dankia3.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK MORGAN ENRYO C</h1>
                                            <h1 className="font-medium text-xs">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B3</h1>
                                            <img src="images/dankib3.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK FAJRIN YUDA F</h1>
                                            <h1 className="font-medium text-xs">FARMASI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C3</h1>
                                            <img src="images/dankic3.jpg" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK ABIGAIL TIFANI M</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 1 End*/}
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

        </>
    );
};

export default ResimenKorps;
