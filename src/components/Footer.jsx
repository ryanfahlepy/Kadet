const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-900 text-center lg:text-left">
        <div className="h-2 bg-white"></div>
        <div className="container p-6 text-white mx-auto">
          <div className="grid gap-4 md:grid-cols-3">
            <img
              src="images/logo_menkor1.png"
              alt="Logo Menkor"
              className="mx-auto w-40 md:my-auto lg:w-56"
            ></img>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-6 text-2xl lg:text-4xl font-bold uppercase md:text-center"   >Tentang</h5>
              <p className="mb-4 text-center text-sm sm:text-md md:text-md md:text-left xl:text-justify lg:text-left lg:text-lg ">
                Resimen Korps Kadet Unhan RI merupakan wadah bagi kadet mahasiswa
                Unhan RI untuk berorganisasi, belajar kepemimpinan, dan membentuk karakter serta mental kadet mahasiswa dalam
                menyongsong Indonesia emas tahun 2045
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-6 text-2xl lg:text-4xl font-bold uppercase md:text-center"   >Kontak</h5>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center">
                  <img src="images/pin.png" className="h-8 my-auto"></img>
                </div>
                <div className="col-span-2 text-justify text-sm sm:text-md md:text-md lg:text-lg ">
                  <p>
                    Kawasan IPSC Sentul, Sukahati, Kabupaten Bogor, Provinsi
                    Jawa Barat, Indonesia
                  </p>
                </div>
                <div
                  className="flex justify-center
                "
                >
                  <img src="images/call.png" className="h-8 my-auto"></img>
                </div>
                <div className="col-span-2 text-justify text-sm sm:text-md md:text-md lg:text-lg ">
                  <p>(+62) 85161503047</p>
                </div>
                <div
                  className="flex justify-center
                "
                >
                  <img src="images/email.png" className="h-8 my-auto"></img>
                </div>
                <div className="col-span-2 text-justify text-sm sm:text-md md:text-md lg:text-lg ">
                  <p>ryanfahlepy@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400">
          <div className="p-3 text-center text-white ">
            © 2023 Resimen Korps Kadet Unhan RI
          </div>
        </div>
      </footer>
      <div
        className="
                bg-blue-500
                sm:bg-green-500
                md:bg-yellow-500
                lg:bg-orange-500
                xl:bg-red-500"

      >
        Screen Width Test{" "}
      </div>
    </>
  );
};

export default Footer;
