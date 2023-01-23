const BodyHome = () => {
  return (
    <>
      <div>
        <div
          id="carouselExampleCrossfade"
          class="slide carousel carousel-fade relative transition-transform"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active float-left w-full">
              <img
                src="images/background_upacara.jpg"
                class="block w-full"
                alt="Wild Landscape"
              />
            </div>
            <div class="carousel-item float-left w-full">
              <video class="w-full shadow-lg" autoplay loop controls>
                <source src="videos/video_home.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <button
            class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="h-2 bg-red-900"></div>
      <div>
        <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
          KADET UNHAN
        </h1>
      </div>
      {/* Sevron Section Start */}
      <div className="grid grid-flow-row grid-cols-3">
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          Tingkat 1<br />
          Prajurit Kadet
        </h2>
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          Tingkat 2<br />
          Sersan Kadet
        </h2>
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          Tingkat 2<br />
          Sersan Mayor Dua Kadet
        </h2>
      </div>
      <div className="grid grid-flow-row grid-cols-3">
        <img
          className="2xl:py-18 py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:px-40"
          src="images/prajurit_kadet.png"
          alt="tk1"
        ></img>
        <img
          className="2xl:py-18 py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:px-40"
          src="images/sersan_kadet.png"
          alt="tk2"
        ></img>
        <img
          className="2xl:py-18 py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:px-40"
          src="images/sersan_mayor_dua_kadet.png"
          alt="tk3"
        ></img>
      </div>
      <div className="grid grid-flow-row grid-cols-3">
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          NARA NATYASAKA
        </h2>
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          NARA DYAVIKSATRA
        </h2>
        <h2 className="md:text-md py-2 px-1 text-center text-xs font-bold sm:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
          NARA ANKASA
        </h2>
      </div>
      {/* Sevron Section End */}
      <div>
        <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
          QUOTES
        </h1>
      </div>

      {/* Carousel Section Start */}
      <div className="container mx-auto px-10 lg:px-28 xl:px-72">
        <div
          id="carouselExampleCaptions"
          className="slide carousel relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="images/prabowo.jpeg"
                className="block w-full"
                alt="prabowo"
              />
              <div className="h-24 md:h-40">
                <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                  Jadilah pemimpin-pemimpin yang baik di masa depan dengan otak
                  yang cemerlang harus menghasilkan ilmu, inovasi, kemajuan,
                  terobosan dalam sains dan teknologi
                </p>
                <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                  - Prabowo Soebianto -
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="images/rektor.png"
                className="block w-full"
                alt="rektor"
              />
              <div className="h-24 md:h-40">
                <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                  Kadet Mahasiswa Unhan RI harus menjadi ilmuan TNI terkemuka di
                  dunia.
                </p>
                <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                  <br />- Amarulla Octavian -
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="images/werijon.png"
                className="block w-full"
                alt="danmenkad"
              />
              <div className="h-24 md:h-40">
                <p className="md:text-md text-center text-xs font-medium sm:text-sm lg:text-lg xl:text-xl">
                  Jika kadet tersiksa, maka didikan komandan benar dan komandan
                  senang.
                  <br />
                  URAA!!!
                </p>
                <p className="sm:text-md text-center text-sm font-bold md:text-lg lg:text-xl xl:text-2xl">
                  - Werijon -
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center border-0 p-0 text-center hover:no-underline hover:outline-none focus:no-underline focus:outline-none"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
          {/* Carousel Section End */}
        </div>
      </div>
      {/* Carousel Section End */}
    </>
  );
};

export default BodyHome;
