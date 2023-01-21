import Header from "../components/Header";
import Footer from "../components/Footer";

const ResimenKorps = () => {
  return (
    <>
      <div>
        <div
          class="relative h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center lg:h-screen"
          style={{
            backgroundImage: 'url("images/logo_menkor1.png")',
            backgroundSize: "cover",
          }}
        >
          <div
            class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div>
              <h1 className="lg:mt-18 mt-8 mb-4 text-center text-xl font-bold sm:mt-12 sm:mb-8 sm:text-2xl md:mt-16 md:mb-12 md:text-3xl lg:mb-14 lg:text-4xl xl:text-5xl">
                RESIMEN KORPS KADET MAHASISWA
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResimenKorps;
