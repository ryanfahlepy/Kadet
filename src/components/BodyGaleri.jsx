import BodyGaleri2 from "./BodyGaleri2";

const BodyGaleri = () => {
    return (
        <>
            <div className="pt-20">
                {/* <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            class="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active float-left w-full">
                            <img
                                src="assets/4.JPG"
                                class="block w-full"
                                alt="Wild Landscape"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                                class="block w-full"
                                alt="Camera"
                            />
                        </div>
                        <div class="carousel-item float-left w-full">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                                class="block w-full"
                                alt="Exotic Fruits"
                            />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div> */}
                <div className="container px-5 mx-auto grid grid-cols-3 gap-10">
                    <div className="grid col-span-2 h-auto">
                        <div>
                            <h1 className=" text-center font-bold text-base py-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                Kegiatan Hari Ini
                            </h1>
                        </div>
                        <video autoPlay playsInline loop controls muted>
                            <source src="video_harian/video_harian.mp4" type="video/mp4" />
                        </video>
                    </div>
                    <div className="grid h-auto py-10">
                        <div>
                            <h1 className="text-center font-bold text-base py-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                                Combat Recaps
                            </h1>
                        </div>
                        <div
                            id="carouselExampleCrossfade"
                            class="carousel slide carousel-fade relative"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="0"
                                    class="active"
                                    aria-current="true"
                                    aria-label="Slide 1"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="1"
                                    aria-label="Slide 2"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="2"
                                    aria-label="Slide 3"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="3"
                                    aria-label="Slide 4"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="4"
                                    aria-label="Slide 5"
                                ></button>
                                <button
                                    type="button"
                                    data-bs-target="#carouselExampleCrossfade"
                                    data-bs-slide-to="5"
                                    aria-label="Slide 6"
                                ></button>



                            </div>
                            <div class="carousel-inner relative w-full overflow-hidden">
                                <div class="carousel-item active float-left w-full">
                                    <img
                                        src="recaps/recaps_1.jpg"
                                        class="block w-full"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div class="carousel-item float-left w-full">
                                    <img
                                        src="recaps/recaps_2.jpg"
                                        class="block w-full"
                                        alt="Camera"
                                    />
                                </div>
                                <div class="carousel-item float-left w-full">
                                    <img
                                        src="recaps/recaps_3.jpg"
                                        class="block w-full"
                                        alt="Exotic Fruits"
                                    />
                                </div>
                                <div class="carousel-item float-left w-full">
                                    <img
                                        src="recaps/recaps_4.jpg"
                                        class="block w-full"
                                        alt="Wild Landscape"
                                    />
                                </div>
                                <div class="carousel-item float-left w-full">
                                    <img
                                        src="recaps/recaps_5.jpg"
                                        class="block w-full"
                                        alt="Camera"
                                    />
                                </div>
                                <div class="carousel-item float-left w-full">
                                    <img
                                        src="recaps/recaps_6.jpg"
                                        class="block w-full"
                                        alt="Exotic Fruits"
                                    />
                                </div>
                            </div>
                            <button
                                class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="prev"
                            >
                                <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button
                                class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                                type="button"
                                data-bs-target="#carouselExampleCrossfade"
                                data-bs-slide="next"
                            >
                                <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <BodyGaleri2 />
                <div>
                    <h1 className="lg:mt-24 mt-8 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:text-4xl xl:text-5xl">
                        Foto Terbaru
                    </h1>
                </div>
                <section className="overflow-hidden text-gray-700">
                    <div className="container px-5 py-2 mx-auto lg:pt-4 lg:px-32">
                        <div className="flex flex-wrap -m-1 md:-m-2">
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"></img>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"></img>
                                </div>
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"></img>
                                </div>
                            </div>
                            <div className="flex flex-wrap w-1/2">
                                <div className="w-full p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"></img>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"></img>
                                </div>
                                <div className="w-1/2 p-1 md:p-2">
                                    <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
                                        src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BodyGaleri;