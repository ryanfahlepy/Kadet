import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
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

            {/* Header */}
            <nav className="bg-red-900  shadow ">
                <div className="mx-auto max-w-7xl px-8">
                    <div className="flex h-16 sm:h-20 md:h-28 xl:h-32 items-center justify-between">
                        <div className="flex w-full items-center justify-between">
                            <Link className="flex-shrink-0" href="/">
                                <img
                                    className="h-16 sm:h-20 md:h-28 xl:h-32"
                                    src="images/logo_menkor1.png"
                                    alt="Workflow"
                                />
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <Link
                                        className="px-3 py-2 font-bold text-white  hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-500 dark:hover:text-white md:text-base lg:text-xl "
                                        href="/resimen"
                                    >
                                        Beranda
                                    </Link>
                                    <div className="dropdown relative ">
                                        <button
                                            className="px-3 py-2 font-bold text-white hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-500 dark:hover:text-white md:text-base lg:text-xl "
                                            type="button"
                                            id="dropdownMenuButton1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Struktur Organisasi
                                        </button>
                                        <div className="dropdown-menu absolute hidden">
                                            <ul
                                                className=" flex flex-col space-y-4 rounded-lg border-4  border-yellow-400 bg-red-900 p-2 text-center font-medium text-white "
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                <li className="rounded-lg transition hover:bg-white hover:text-red-900 ">
                                                    <Link
                                                        className="dropdown-item active:bg-transparent "
                                                        href="/pages/ResimenKadet.js"
                                                    >
                                                        Resimen Kadet Mahasiswa
                                                    </Link>
                                                </li>
                                                <li className="rounded-lg transition hover:bg-white hover:text-red-900 ">
                                                    <Link
                                                        className="dropdown-item active:bg-transparent "
                                                        href="/resimen"
                                                    >
                                                        Resimen Korps Kadet Mahasiswa
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link
                                        className="px-3 py-2 font-bold text-white hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-500 dark:hover:text-white md:text-base lg:text-xl"
                                        href="/resimen"
                                    >
                                        Galeri
                                    </Link>
                                    <Link
                                        className="px-3 py-2 font-bold text-white hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-500 dark:hover:text-white md:text-base lg:text-xl"
                                        href="/resimen"
                                    >
                                        Berita
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-yellow-300 focus:outline-none active:text-yellow-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <svg
                                    width="20"
                                    height="20"
                                    fill="currentColor"
                                    className="h-8 w-8"
                                    viewBox="0 0 1792 1792"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-2 bg-yellow-500"></div>

                <div className={`md:hidden  ${isOpen ? "" : "hidden"}`}>
                    <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                        <Link
                            className="block px-3 py-2 text-lg font-bold text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white"
                            href="/resimen"
                        >
                            Beranda
                        </Link>
                        <div className="dropdown relative ">
                            <button
                                className="block px-3 py-2 text-lg font-bold text-white hover:text-yellow-300 focus:text-yellow-300 active:text-yellow-500 dark:hover:text-white"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Struktur Organisasi
                            </button>
                            <div className="dropdown-menu absolute hidden">
                                <ul
                                    className=" flex flex-col space-y-4 rounded-lg border-4  border-yellow-400 bg-red-900 p-2 text-center font-medium text-white "
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li className="block rounded-lg transition hover:bg-white hover:text-red-900">
                                        <Link
                                            className="dropdown-item active:bg-transparent "
                                            href="/resimen"
                                        >
                                            Resimen Kadet Mahasiswa
                                        </Link>
                                    </li>
                                    <li className="block rounded-lg transition hover:bg-white hover:text-red-900">
                                        <Link
                                            className="dropdown-item active:bg-transparent "
                                            href="/resimen"
                                        >
                                            Resimen Korps Kadet Mahasiswa
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Link
                            className="block px-3 py-2 text-lg font-bold text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white"
                            href="/resimen"
                        >
                            Galeri
                        </Link>
                        <Link
                            className="block px-3 py-2 text-lg font-bold text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white"
                            href="/resimen"
                        >
                            Berita
                        </Link>
                    </div>
                </div>
            </nav>
            <header>
                {/* <!-- Background image --> */}
                {/* <div className="relative overflow-hidden bg-no-repeat bg-cover" 
            style={{
                backgroundPosition: "50%",
                backgroundImage: "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
                height: "350px",
            }}>
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                style={{backgroundColor:"rgba(0, 0, 0, 0.75)"}}>
                <div className="flex justify-center items-center h-full">
                    <div className="text-center text-white px-6 md:px-12">
                    <h1 className="text-5xl font-bold mt-0 mb-6">Heading</h1>
                    <h3 className="text-3xl font-bold mb-8">Subeading</h3>
                    <button type="button"
                        className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        data-mdb-ripple="true" data-mdb-ripple-color="light">
                        Get started
                    </button>
                    </div>
                </div>
                </div>
            </div> */}
                {/* <!-- Background image --> */}
            </header>
            {/* Header */}

            {/*  */}
        </>
    );
};

export default Header;
