import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);



    return (  
        <>
            <div className="
                bg-green-500
                sm:bg-yellow-500
                md:bg-purple-500
                lg:bg-red-500">
                Screen Width Test </div>

            {/* Header */}
            <nav className="bg-red-900 dark:bg-gray-800  shadow ">
                <div className="px-8 mx-auto max-w-7xl">
                    <div className="flex items-center justify-between h-40">
                        <div className="w-full justify-between flex items-center">
                            <Link className="flex-shrink-0" href="/">
                                <img className="w-35 h-40" src="images/logo_menkor1.png" alt="Workflow"/>
                            </Link>
                            <div className="hidden md:block">
                                <div className="flex items-baseline ml-10 space-x-4">
                                    <Link className="text-white hover:text-yellow-300 active:text-yellow-500 focus:text-yellow-300  dark:hover:text-white px-3 py-2 md:text-base lg:text-xl font-bold " href="/resimen">
                                        Beranda
                                    </Link>
                                    <div className="dropdown relative ">
                                        <button className="text-white hover:text-yellow-300 active:text-yellow-500 focus:text-yellow-300 dark:hover:text-white px-3 py-2 md:text-base lg:text-xl font-bold " type="button"id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Struktur Organisasi
                                        </button>
                                        <div className="dropdown-menu absolute hidden">
                                            <ul className=" rounded-lg p-2 flex flex-col space-y-4  bg-red-900 text-center text-white font-medium border-4 border-yellow-400 " aria-labelledby="dropdownMenuButton1">
                                                <li className="rounded-lg hover:bg-white hover:text-red-900 transition ">
                                                    <Link className="dropdown-item active:bg-transparent " href="/resimen">Resimen Kadet Mahasiswa</Link>
                                                </li>
                                                <li className="rounded-lg hover:bg-white hover:text-red-900 transition ">
                                                    <Link className="dropdown-item active:bg-transparent " href="/resimen">Resimen Korps Kadet Mahasiswa</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="dropdown relative ">
                                        <button className="text-white hover:text-yellow-300 active:text-yellow-500 focus:text-yellow-300 dark:hover:text-white px-3 py-2 md:text-base lg:text-xl font-bold " type="button"id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Program Studi
                                        </button>
                                        <div className="dropdown-menu absolute hidden">
                                            <ul className=" rounded-lg p-2 flex flex-col space-y-4  bg-red-900 text-center text-white font-medium border-4 border-yellow-400 " aria-labelledby="dropdownMenuButton1">
                                                <li className="rounded-lg hover:bg-white hover:text-red-900 transition ">
                                                    <Link className="dropdown-item active:bg-transparent " href="/resimen">Fakultas Ilmu Kedokteran dan Ilmu Kesehatan</Link>
                                                </li>
                                                <li className="rounded-lg hover:bg-white hover:text-red-900 transition ">
                                                    <Link className="dropdown-item active:bg-transparent " href="/resimen">Fakultas Sains dan Teknologi Pertahanan</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link className="text-white hover:text-yellow-300 active:text-yellow-500 focus:text-yellow-300 dark:hover:text-white px-3 py-2 md:text-base lg:text-xl font-bold" href="/resimen">
                                        UKM
                                    </Link>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="flex -mr-2 md:hidden">
                            <button className="text-white hover:text-yellow-300 active:text-yellow-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
                            onClick={()=> setIsOpen(!isOpen)}>
                                <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="h-2 bg-yellow-300"></div>

                <div className = {`md:hidden  ${isOpen?"":"hidden"}`} >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link className="text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white block px-3 py-2 text-lg font-bold" href="/resimen">
                            Beranda
                        </Link>
                        <Link className="text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white block px-3 py-2 text-lg font-bold" href="/resimen">
                        Struktur Organisasi
                        </Link>
                        <Link className="text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white block px-3 py-2 text-lg font-bold" href="/resimen">
                        Program Studi
                        </Link>
                        <Link className="text-white hover:text-yellow-300 active:text-yellow-500 dark:hover:text-white block px-3 py-2 text-lg font-bold" href="/resimen">
                        Ukm
                        </Link>
                    </div>
                </div>
            </nav>
            <header>

            {/* <!-- Background image --> */}
            <div className="relative overflow-hidden bg-no-repeat bg-cover" 
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
            </div>
            {/* <!-- Background image --> */}
            </header>
            {/* Header */}

            <div className="flex justify-center">
            <div>
                <div className="dropdown relative">
                <button
                    className="
                    dropdown-toggle
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg active:text-white
                    transition
                    duration-150
                    ease-in-out
                    flex
                    items-center
                    whitespace-nowrap
                    "
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Dropdown button
                    <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="caret-down"
                    className="w-2 ml-2"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    >
                    <path
                        fill="currentColor"
                        d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                    ></path>
                    </svg>
                </button>
                <ul
                    className="
                    dropdown-menu
                    min-w-max
                    absolute
                    hidden
                    bg-white
                    text-base
                    z-50
                    float-left
                    py-2
                    list-none
                    text-left
                    rounded-lg
                    shadow-lg
                    mt-1
                    
                    m-0
                    bg-clip-padding
                    border-none
                    "
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                    <Link
                        className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        "
                        href="#"
                        >Action</Link
                    >
                    </li>
                    <li>
                    <Link
                        className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        "
                        href="#"
                        >Another action</Link
                    >
                    </li>
                    <li>
                    <Link
                        className="
                        dropdown-item
                        text-sm
                        py-2
                        px-4
                        font-normal
                        block
                        w-full
                        whitespace-nowrap
                        bg-transparent
                        text-gray-700
                        hover:bg-gray-100
                        "
                        href="#"
                        >Something else here</Link
                    >
                    </li>
                </ul>
                </div>
            </div>
            </div>

            <div className="m-72"></div>

            



            
        </>
    );
}
 
export default Header;