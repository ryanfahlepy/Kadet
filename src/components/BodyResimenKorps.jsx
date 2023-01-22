const BodyResimenKorps = () => {
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
                                            <img className="" src="images/3star.png" alt="star1">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 3 Start*/}
                                    <div className="grid grid-cols-5 mx-10 lg:grid-cols-3 xl:grid-cols-9">
                                        <div className="col-span-2 lg:col-1 lg:col-end-2 xl:col-start-2 xl:col-end-4">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">DANMENKORPS</h1>
                                            <img src="images/danmenkor.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">SMDK ROY ENVITO</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-start-4 col-span-2 lg:col-start-3 xl:col-start-7 xl:col-end-9">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">WADANMENKORPS</h1>
                                            <img src="images/wadanmenkor.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">SMDK RIYANTI PUTRI</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">KIMIA</h1>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 3 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/2star.png" alt="star2">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 2 Start*/}
                                    <div className="grid grid-cols-3 mx-10 gap-3 md:grid-cols-6 ">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 1</h1>
                                            <img src="images/danyon1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NAUFAL AUDADI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 2</h1>
                                            <img src="images/danyon2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ANGELINA DEVA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANYON 3</h1>
                                            <img src="images/danyon3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK SANJI SATHYA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 1</h1>
                                            <img src="images/wadanyon1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. REY RENOULT</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK ELEKTRO</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 2</h1>
                                            <img src="images/wadanyon2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ARDIMAN HASUDUNGAN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FISIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WADANYON 3</h1>
                                            <img src="images/wadanyon3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NAFRIZAL FAKHRUZAIN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 2 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/1star.png" alt="star3">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 1 Start*/}
                                    <div className="grid grid-cols-3 mx-10 gap-3 md:grid-cols-9">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A1</h1>
                                            <img src="images/dankia1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK HAMAMANDA AURA</h1>
                                            <h1 className="font-medium text-xs">BIOLOGI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B1</h1>
                                            <img src="images/dankib1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK AGUNG HIRAWAN</h1>
                                            <h1 className="font-medium text-xs">FISIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C1</h1>
                                            <img src="images/dankic1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK NOVRIZAL RAMADHANI</h1>
                                            <h1 className="font-medium text-xs">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A2</h1>
                                            <img src="images/dankia2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK AYUMAS QONITA</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B2</h1>
                                            <img src="images/dankib2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK M. ABDITYA ARGHANIE</h1>
                                            <h1 className="font-medium text-xs">TEKNIK ELEKTRO</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C2</h1>
                                            <img src="images/dankic2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SMDK GARY FERDINAND</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs">DANKI A3</h1>
                                            <img src="images/dankia3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK MORGAN ENRYO</h1>
                                            <h1 className="font-medium text-xs">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI B3</h1>
                                            <img src="images/dankib3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK FAJRIN YUDA</h1>
                                            <h1 className="font-medium text-xs">FARMASI</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs">DANKI C3</h1>
                                            <img src="images/dankic3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs">SK ABIGAIL TIFANI</h1>
                                            <h1 className="font-medium text-xs">INFORMATIKA</h1>
                                        </div>
                                    </div>
                                    {/* Pokdo Bintang 1 End*/}
                                </div>

                                {/* Poktaf */}
                                <div className="tab-pane fade" id="pills-poktaf" role="tabpanel" aria-labelledby="pills-profile-tab3">
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/2star.png" alt="star4">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Poktaf Bintang 2 Start*/}
                                    <div className="grid grid-cols-5 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">SEKRETARIS</h1>
                                            <img src="images/sekretaris.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK CHIQUITA JASMINE</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">BENDAHARA</h1>
                                            <img src="images/bendahara.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. NURALIFFUDIN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FISIKA</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI PAM</h1>
                                            <img src="images/kasi1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK YANDI PERMANA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI OPS</h1>
                                            <img src="images/kasi2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK DAFFA MANDALA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI PERS</h1>
                                            <img src="images/kasi3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK RIGO GINTING</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">BIOLOGI</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">WASEKRETARIS</h1>
                                            <img src="images/wasekretaris.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK NADYA SANTI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WABENDAHARA</h1>
                                            <img src="images/wabendahara.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK JA'FAR ELYAS</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI PAM</h1>
                                            <img src="images/wakasi1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK SEFTIAN CANDRA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI OPS</h1>
                                            <img src="images/wakasi2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK ADRIEL REGGINALD</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI PERS</h1>
                                            <img src="images/wakasi3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK ATHALIA CHRISTINA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MATEMATIKA</h1>
                                        </div>
                                    </div>
                                    <div className="my-20"></div>
                                    <div className="grid grid-cols-5 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI LOG</h1>
                                            <img src="images/kasi4.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ALLESANDRO ISSAC</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI OR</h1>
                                            <img src="images/kasi5.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK YESAYA PUTRA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI ROH</h1>
                                            <img src="images/kasi6.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. SATRIA UTAMA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI SBT</h1>
                                            <img src="images/kasi7.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK SHAVINA TRIYANA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KIMIA</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">KASI RISET</h1>
                                            <img src="images/kasi8.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">ALFIANO DENI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI LOG</h1>
                                            <img src="images/wakasi4.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK ELVIRA ROSMAWARI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI OR</h1>
                                            <img src="images/wakasi5.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK DAMARIS EASTER</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI ROH</h1>
                                            <img src="images/wakasi6.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK M.IKHSAN ADIL</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI SBT</h1>
                                            <img src="images/wakasi7.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK GAMELIA PUTRI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">BIOLOGI</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">WAKASI RISET</h1>
                                            <img src="images/wakasi8.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK BIMO WIRATOMO</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                    </div>
                                    {/* Poktaf Bintang 2 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/1star.png" alt="star5">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Poktaf Bintang 1 Start */}
                                    <div className="grid grid-cols-7 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-10">
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR PROTOKOL</h1>
                                            <img src="images/kaurprotokol.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ARYA MUDITAMA </h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR HUMAS</h1>
                                            <img src="images/kaurhumas.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK RAHMATUL FAJRI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR PENMAS</h1>
                                            <img src="images/kaurpenmas.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ABDUL AZIZ</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR KESEHATAN</h1>
                                            <img src="images/kaurkesehatan.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NAUFAL DIMAS</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR ADMINLOG</h1>
                                            <img src="images/kauradminlog.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ARINI FITRIA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FISIKA</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR BEKAL</h1>
                                            <img src="images/kaurperbekalan.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK NOVIA SELLI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR ANGKUTAN</h1>
                                            <img src="images/kaurangkutan.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK DECINTA JAYA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">BIOLOGI</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR TRADISI</h1>
                                            <img src="images/kaurtradisi.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ILHAM RIZKI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                        <div className="col-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR ISLAM</h1>
                                            <img src="images/wakasi2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. IRCHAM ATAMI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK MESIN</h1>
                                        </div>
                                        <div className="col-5">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR PROTESTAN</h1>
                                            <img src="images/kaurprotestan.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK MICHAEL HAM</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">FARMASI</h1>
                                        </div>
                                        <div className="col-1">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR KATOLIK</h1>
                                            <img src="images/kaurkatolik.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK ADRIEL OMARPADU</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR HINDU</h1>
                                            <img src="images/kaurhindu.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK I KOMANG TRI</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                        <div className="col-3">
                                            <h1 className="font-semibold text-xs xl:text-lg">KAUR BUDDHA</h1>
                                            <img src="images/kaurbuddha.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SK RICKY CHAN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                    </div>
                                    {/* Poktaf Bintang 1 End */}
                                </div>

                                {/* Lemus */}
                                <div className="tab-pane fade" id="pills-lemus" role="tabpanel" aria-labelledby="pills-contact-tab3">
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/3star.png" alt="star6">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Lemus Bintang 3 Start */}
                                    <div className="grid grid-cols-6 mx-10 lg:grid-cols-6 xl:grid-cols-10">
                                        <div className="col-start-3 col-span-2 lg:col-start-3 xl:col-start-5 xl:col-end-7">
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">KALEMUSKAD</h1>
                                            <img src="images/kalemus.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs lg:text-xl md:text-lg">SMDK DENNISA PUTRI</h1>
                                            <h1 className="font-medium text-xs lg:text-xl md:text-lg">BIOLOGI</h1>
                                        </div>
                                    </div>
                                    {/* Lemus Bintang 3 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/2star.png" alt="star7">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Lemus Bintang 2 Start*/}
                                    <div className="grid grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-span-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">KALEMMUS YON 1</h1>
                                            <img src="images/wakasi6.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK PATRICYA INGGRID</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KIMIA</h1>
                                        </div>
                                        <div className="col-span-2 col-start-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">KALEMMUS YON 2</h1>
                                            <img src="images/wakasi7.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. WAHYU SAPUTRA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">BIOLOGI</h1>
                                        </div>
                                        <div className="col-span-2 col-start-7">
                                            <h1 className="font-semibold text-xs xl:text-lg">KALEMMUS YON 3</h1>
                                            <img src="images/wakasi8.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK RENDY CAHYA</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">INFORMATIKA</h1>
                                        </div>
                                    </div>
                                    {/* Lemus Bintang 2 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/1star.png" alt="star8">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Lemus Bintang 1 Start */}
                                    {/* Lemus Bintang 1 End */}
                                </div>

                                {/* POLKAD */}
                                <div className="tab-pane fade" id="pills-polkad" role="tabpanel" aria-labelledby="pills-contact-tab3">
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/2star.png" alt="star9">
                                            </img>
                                        </div>
                                    </div>
                                    {/* Polkad Bintang 2 Start */}
                                    <div className="grid grid-cols-8 mx-2 gap-2 gap-y-6 md:gap-3 md:mx-3 lg:gap-6 lg:mx-6 xl:gap-10 xl:mx-60">
                                        <div className="col-span-2">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANPOLKAD YON 1</h1>
                                            <img src="images/danpolkadtk3.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK M. AZKA FIRDAUS</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">TEKNIK ELEKTRO</h1>
                                        </div>
                                        <div className="col-span-2 col-start-4">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANPOLKAD YON 2</h1>
                                            <img src="images/danpolkadtk2.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK HABBAN RIAWAN</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">MATEMATIKA</h1>
                                        </div>
                                        <div className="col-span-2 col-start-7">
                                            <h1 className="font-semibold text-xs xl:text-lg">DANPOLKAD YON 3</h1>
                                            <img src="images/danpolkadtk1.jpg" alt="picture" style={{ borderRadius: "25% 0% 25% 0%" }}></img>
                                            <h1 className="font-semibold text-xs xl:text-lg">SMDK CALVIN GIPSY</h1>
                                            <h1 className="font-medium text-xs xl:text-lg">KEDOKTERAN</h1>
                                        </div>
                                    </div>
                                    {/* Polkad Bintang 2 End */}
                                    <div className="my-10"></div>
                                    <div className="grid grid-cols-3">
                                        <div className="col-start-2">
                                            <img src="images/1star.png" alt="star10">
                                            </img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BodyResimenKorps;
