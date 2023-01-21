const BodyHome = () => {
  return (
    <>
      <div>
        <img
          className="w-full xl:w-full 2xl:w-full"
          src="images/background_upacara.jpg"
        ></img>
      </div>
      <hr className="border-t-8 border-red-900"></hr>

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
        ></img>
        <img
          className="2xl:py-18 py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:px-40"
          src="images/sersan_kadet.png"
        ></img>
        <img
          className="2xl:py-18 py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:px-40"
          src="images/sersan_mayor_dua_kadet.png"
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
      <div
        id="carouselExampleCaptions"
        className="slide carousel relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 mb-4 flex justify-center p-0">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="active carousel-item relative float-left w-full">
            <img src="images/prabowo.jpeg" className="block w-full" alt="..." />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="images/rektor.png" className="block w-full" alt="..." />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img src="images/werijon.png" className="block w-full" alt="..." />
            <div className="carousel-caption absolute hidden text-center md:block">
              <h5 className="text-xl">Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
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
    </>
  );
};

export default BodyHome;
