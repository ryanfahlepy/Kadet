const BodyGaleri2 = () => {
    return (
        <>
            <div className="container px-5 mx-auto grid grid-cols-3 gap-10">
                <div className="grid col-start-3 h-auto">
                    <div>
                        <h1 className="text-center font-bold text-base py-2 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                            Menkorps Recaps
                        </h1>
                    </div>
                    <div
                        id="carouselExampleCrossfade2"
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
                                data-bs-target="#carouselExampleCrossfade2"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade2"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade2"
                                data-bs-slide-to="3"
                                aria-label="Slide 4"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade2"
                                data-bs-slide-to="4"
                                aria-label="Slide 5"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCrossfade2"
                                data-bs-slide-to="5"
                                aria-label="Slide 6"
                            ></button>



                        </div>
                        <div class="carousel-inner relative w-full overflow-hidden">
                            <div class="carousel-item active float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_1.jpg"
                                    class="block w-full"
                                    alt="Wild Landscape"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_2.jpg"
                                    class="block w-full"
                                    alt="Camera"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_3.jpg"
                                    class="block w-full"
                                    alt="Exotic Fruits"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_4.jpg"
                                    class="block w-full"
                                    alt="Wild Landscape"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_5.jpg"
                                    class="block w-full"
                                    alt="Camera"
                                />
                            </div>
                            <div class="carousel-item float-left w-full">
                                <img
                                    src="menkorpsrecaps/menkorpsrecaps_6.jpg"
                                    class="block w-full"
                                    alt="Exotic Fruits"
                                />
                            </div>
                        </div>
                        <button
                            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade2"
                            data-bs-slide="prev"
                        >
                            <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button
                            class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleCrossfade2"
                            data-bs-slide="next"
                        >
                            <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>);
};

export default BodyGaleri2;