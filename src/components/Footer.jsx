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
              className="mx-auto w-60"
            ></img>

            <div className="mb-6 md:mb-0">
              <p className="mb-4 text-center">
                RESIMEN KORPS KADET UNHAN RI Merupakan wadah kadet mahasiswa
                UNHAN RI dalam belajar kepemimpinan, berorganisasi, dan
                membangun bangsa menuju Indonesia emas 2045
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-6 text-4xl font-bold uppercase">Kontak</h5>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex justify-center">
                  <img src="images/pin.png" className="h-10"></img>
                </div>
                <div className="col-span-2 text-justify">
                  <p>
                    Kawasan IPSC Sentul, Sukahati, Kabupaten Bogor, Provinsi
                    Jawa Barat, Inonesia
                  </p>
                </div>
                <div
                  className="flex justify-center
                "
                >
                  <img src="images/call.png" className="h-10"></img>
                </div>
                <div className="col-span-2 text-justify">
                  <p>(+62) 85161503047</p>
                </div>
                <div
                  className="flex justify-center
                "
                >
                  <img src="images/email.png" className="h-10"></img>
                </div>
                <div className="col-span-2 text-justify">
                  <p>ryanfahlepy@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-400">
          <div className="p-4 text-center text-white">
            © 2023 Resimen Korps Kadet Unhan RI
          </div>
        </div>
      </footer>
      <div
        className="
                bg-green-500
                sm:bg-yellow-500
                md:bg-purple-500
                lg:bg-red-500"
      >
        Screen Width Test{" "}
      </div>
    </>
  );
};

export default Footer;
