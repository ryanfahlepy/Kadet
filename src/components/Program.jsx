const Program = () => {
    return (
        <>
            <div>
                <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
                    PROGRAM
                </h1>
                <h2 className="lg:mt-4 mt-2 mb-2 text-center text-sm font-normal sm:mt-12 sm:mb-8 sm:text-sm md:mt-16 md:mb-12 md:text-md lg:mb-12 lg:text-lg xl:text-xl">
                    Kadet Mahasiswa dididik dan dilatih dengan program pembinaan karakter, akademik, fisik, dan militer.
                </h2>
            </div>
            <div>
                <div class="justify-center grid lg:grid-cols-4 grid-cols-1 gap-6 mx-8">
                    <div class="flex flex-col lg:flex-row lg:w-full rounded-lg lg:col-span-3 lg:col-start-2 bg-white shadow-xl">
                        <img class=" w-full object-cover lg:w-1/2 rounded-r-lg rounded-l-lg" src="assets/1.JPG" alt="karakter" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl lg:text-2xl font-bold mb-2">Pengembangan Karakter</h5>
                            <p class="text-gray-700 text-base lg:text-lg mb-4">
                                Karakter yang baik adalah dasar yang harus dimiliki oleh setiap kadet mahasiswa agar menjadi pribadi yang disiplin, loyal, dan memiliki integritas
                            </p>
                            <p class="text-gray-600 text-xs"></p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row-reverse lg:w-full rounded-lg lg:col-span-3 bg-white shadow-xl">
                        <img class=" w-full object-cover lg:w-1/2 rounded-r-lg rounded-l-lg" src="assets/physical.JPG" alt="akademik" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl lg:text-2xl font-bold mb-2">Keunggulan Akademik</h5>
                            <p class="text-gray-700 text-base lg:text-lg mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium reiciendis commodi dolore hic expedita accusamus debitis facere incidunt dolorem laudantium. Ex repellendus, sunt eum officiis deserunt recusandae facere harum hic!
                            </p>
                            <p class="text-gray-600 text-xs"></p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row lg:w-full rounded-lg lg:col-span-3 lg:col-start-2 bg-white shadow-xl">
                        <img class=" w-full object-cover lg:w-1/2 rounded-r-lg rounded-l-lg" src="assets/physical.JPG" alt="fisik" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl lg:text-2xl font-bold mb-2">Pelatihan Fisik</h5>
                            <p class="text-gray-700 text-base lg:text-lg mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium reiciendis commodi dolore hic expedita accusamus debitis facere incidunt dolorem laudantium. Ex repellendus, sunt eum officiis deserunt recusandae facere harum hic!
                            </p>
                            <p class="text-gray-600 text-xs"></p>
                        </div>
                    </div>
                    <div class="flex flex-col lg:flex-row-reverse lg:w-full rounded-lg lg:col-span-3 bg-white shadow-xl">
                        <img class=" w-full object-cover lg:w-1/2 rounded-r-lg rounded-l-lg" src="assets/military.JPG" alt="militer" />
                        <div class="p-6 flex flex-col justify-start">
                            <h5 class="text-gray-900 text-xl lg:text-2xl font-bold mb-2">Kepemimpinan Militer</h5>
                            <p class="text-gray-700 text-base lg:text-lg mb-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium reiciendis commodi dolore hic expedita accusamus debitis facere incidunt dolorem laudantium. Ex repellendus, sunt eum officiis deserunt recusandae facere harum hic!
                            </p>
                            <p class="text-gray-600 text-xs"></p>
                        </div>
                    </div>
                    <div className="py-20">

                    </div>
                </div>
            </div>
        </>
    );
};

export default Program;