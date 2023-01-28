const BodyResimenKadet = () => {
    return (
        <>
            <div className="pt-20">
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center h-screen"
                    style={{
                        backgroundImage: 'url("images/logo_menkad1.png")',
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
                                        KELOMPOK KOMANDO
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
                                        KELOMPOK STAF
                                    </button>
                                </li>

                            </ul>
                            <div className="tab-content" id="pills-tabContent3">
                                <div className="tab-pane fade show active text-lg font-bold" id="pills-pokdo" role="tabpanel" aria-labelledby="pills-home-tab3">
                                    {/* Danmenkad Start */}
                                    <div className="grid grid-cols-6 mx-10 lg:grid-cols-6 xl:grid-cols-10">
                                        <div className="col-start-3 col-span-2 lg:col-start-3 xl:col-start-5 xl:col-end-7">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">DANMENKAD</h1>
                                            <img src="images/profile_pic.jpg" alt="danmenkad" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">WERIJON, M.Si.Han., CIQnR.</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">KOLONEL (MAR)</h1>
                                        </div>
                                    </div>
                                    {/* Danmenkad End */}
                                    <div className=" my-20"></div>
                                    {/* Danyonkad Start*/}
                                    <div className="grid grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-span-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 1</h1>
                                            <img src="images/profile_pic.jpg" alt="danyon1" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">FATKHUL ZUHDI, S.Ag., M.Pd.I.</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">LETNAN KOLONEL (INF)</h1>
                                        </div>
                                        <div className="col-span-2 col-start-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 2</h1>
                                            <img src="images/profile_pic.jpg" alt="danyon2" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">KOSMAS PRAYOGO WIRA WIJAYA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">LETNAN KOLONEL (ZENI)</h1>
                                        </div>
                                        <div className="col-span-2 col-start-7">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 3</h1>
                                            <img src="images/profile_pic.jpg" alt="danyon3" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">RULLY RAMADHIANSYAH, S.Sos., M.Tr.Opsla.</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">LETNAN KOLONEL (KH)</h1>
                                        </div>
                                    </div>
                                    {/* Danyonkad End */}
                                </div>
                                <div className="tab-pane fade" id="pills-poktaf" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                    {/* Poktaf Start*/}
                                    <div className="grid grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-span-2 col-start-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASIPAMOPS</h1>
                                            <img src="images/profile_pic.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">TOTO SUTIADI, S.Sos., M.Han</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MAYOR (CPM)</h1>
                                        </div>
                                        <div className="col-span-2 col-start-6">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASIMINLOG</h1>
                                            <img src="images/profile_pic.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">M. TEGUH IMAM CAHYADI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MAYOR (INF)</h1>
                                        </div>
                                    </div>
                                    {/* Poktaf End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyResimenKadet;
