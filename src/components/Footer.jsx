const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-900 text-center lg:text-left">
        <div className="container p-6 text-white">
          <div className="grid gap-4 lg:grid-cols-2">
            <img
              src="images/logo_menkor1.png"
              alt="Logo Menkor"
              className="mx-auto w-60"
            ></img>

            <div className="mb-6 md:mb-0">
              <p className="mb-4 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="mb-6 md:mb-0">
              <h5 className="mb-2 font-bold uppercase">Kontak</h5>
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="flex justify-center
                "
                >
                  <svg
                    width="50"
                    className="fill-current"
                    viewBox="-1.5 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M574,120 C575.324428,120 580,114.054994 580,110.833333 C580,107.611672 577.313708,105 574,105 C570.686292,105 568,107.611672 568,110.833333 C568,114.054994 572.675572,120 574,120 Z M574,113.333333 C575.420161,113.333333 576.571429,112.214045 576.571429,110.833333 C576.571429,109.452621 575.420161,108.333333 574,108.333333 C572.579839,108.333333 571.428571,109.452621 571.428571,110.833333 C571.428571,112.214045 572.579839,113.333333 574,113.333333 Z"
                        transform="translate(-568 -105)"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
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
                  <svg
                    width="50"
                    className="fill-current"
                    viewBox="-1.5 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M574,120 C575.324428,120 580,114.054994 580,110.833333 C580,107.611672 577.313708,105 574,105 C570.686292,105 568,107.611672 568,110.833333 C568,114.054994 572.675572,120 574,120 Z M574,113.333333 C575.420161,113.333333 576.571429,112.214045 576.571429,110.833333 C576.571429,109.452621 575.420161,108.333333 574,108.333333 C572.579839,108.333333 571.428571,109.452621 571.428571,110.833333 C571.428571,112.214045 572.579839,113.333333 574,113.333333 Z"
                        transform="translate(-568 -105)"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
                </div>
                <div className="col-span-2 text-justify">
                  <p>
                  (+62) 85161503047
                  </p>
                </div>
                <div
                  className="flex justify-center
                "
                >
                  <svg
                    width="50"
                    className="fill-current"
                    viewBox="-1.5 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                    stroke="#ffffff"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#ffffff"
                        fill-rule="evenodd"
                        d="M574,120 C575.324428,120 580,114.054994 580,110.833333 C580,107.611672 577.313708,105 574,105 C570.686292,105 568,107.611672 568,110.833333 C568,114.054994 572.675572,120 574,120 Z M574,113.333333 C575.420161,113.333333 576.571429,112.214045 576.571429,110.833333 C576.571429,109.452621 575.420161,108.333333 574,108.333333 C572.579839,108.333333 571.428571,109.452621 571.428571,110.833333 C571.428571,112.214045 572.579839,113.333333 574,113.333333 Z"
                        transform="translate(-568 -105)"
                      ></path>{" "}
                    </g>
                  </svg>{" "}
                </div>
                <div className="col-span-2 text-justify">
                  <p>
                    ryanfahlepy@gmail.com
                  </p>
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
