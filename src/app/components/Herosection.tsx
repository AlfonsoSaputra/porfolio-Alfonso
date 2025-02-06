/* eslint-disable @next/next/no-img-element */
export default function Herosection() {
  return (
    <section id="home" className="pt-36">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2 mb-1">
            <h1 className="text-base font-semibold text-primary md:text=xl ">
              Hallo semua, saya
              <span className="mb-10 block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                Muhammad Alfonso Saputra
              </span>
            </h1>
            <a
              href="#"
              className=" text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
            >
              {" "}
              Hubungi Saya
            </a>
          </div>
          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:mt-9 lg:right-0">
              {" "}
              <img
                src="/images/tanpa background.png"
                alt="Alfonso Saputra"
                className="max-w-full mx-auto"
              />
              <span className="absolute -bottom-20 -z-10 left-1/2 -translate-x-1/2 md:scale-125">
                <svg width={400} height={400} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#38bdf8"
                    d="M38.5,-18.4C43.7,3.7,37.7,23.6,24.4,33.1C11.1,42.6,-9.3,41.8,-27.1,30.5C-44.8,19.2,-59.9,-2.6,-54.9,-24.2C-50,-45.9,-25,-67.4,-4.2,-66.1C16.6,-64.7,33.2,-40.5,38.5,-18.4Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
