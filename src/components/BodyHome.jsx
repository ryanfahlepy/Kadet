import prabowo from '../images/prabowo.jpeg'
import rektor from '../images/rektor.png'
import werijon from '../images/werijon.png'

const BodyHome = () => {
    
   return (
<>
<div>
    <img className="w-full 2xl:w-full xl:w-full" src="images/background_upacara.jpg"></img>
    </div>
    <hr className="border-t-4 border-red-900"></hr>

    <div>
        <h1 className="text-center font-bold text-xl mt-8 mb-4 sm:text-2xl sm:mt-12 sm:mb-8 md:text-3xl md:mt-16 md:mb-12 lg:text-4xl lg:mt-18 lg:mb-14 xl:text-5xl">KADET UNHAN</h1>
    </div>
    <div>
        
    </div>
    <div className="grid grid-flow-row grid-cols-3">
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Tingkat 1<br />Prajurit Kadet</h2>
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Tingkat 2<br />Sersan Kadet</h2>
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">Tingkat 2<br />Sersan Mayor Dua Kadet</h2>
    </div>
    <div className="grid grid-flow-row grid-cols-3">
        <img className="py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:py-18 2xl:px-40" src="images/prajurit_kadet.png"></img>
        <img className="py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:py-18 2xl:px-40" src="images/sersan_kadet.png"></img>
        <img className="py-6 px-4 md:px-12 lg:px-20 xl:py-16 xl:px-32 2xl:py-18 2xl:px-40" src="images/sersan_mayor_dua_kadet.png"></img>
    </div>
    <div className="grid grid-flow-row grid-cols-3">
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">NARA NATYASAKA</h2>
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">NARA DYAVIKSATRA</h2>
        <h2 className="py-2 px-1 text-center font-bold text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl">NARA ANKASA</h2>
    </div>
    <div>
        <h1 className="text-center font-bold text-xl mt-8 mb-4 sm:text-2xl sm:mt-12 sm:mb-8 md:text-3xl md:mt-16 md:mb-12 lg:text-4xl lg:mt-18 lg:mb-14 xl:text-5xl">QUOTES</h1>
    </div>
    
    </>
   
   );

};

export default BodyHome;