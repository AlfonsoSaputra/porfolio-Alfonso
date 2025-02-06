/* eslint-disable @next/next/no-img-element */
export default function Blogsection() {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-slate-100">
      <div className="container">
        <div className="wfull px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4">
              Project terbaru saya
            </h2>
            <p className="font-medium text-md text-secondary">
             Dibawah ini adalah web yang pernah saya buat selama saya belajar
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src="/portfo/sap.png" alt="programming" className="w-full"/>
                    <div className="px-6 py-8">
                        <h3 className="mb-3 text-dark font-semibold text=xl hover:text-primary truncate">Portfolio</h3>
                        <p className="font-medium text-secondary text-base mb-6">Website Portfolio ini dibuat dengan bahasa pemrograman Tailwind CSS</p>
                        <a href="" className="font=medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src="/portfo/mo.png" alt="programming" className="w-full"/>
                    <div className="px-6 py-8">
                        <h3 className="mb-3 text-dark font-semibold text=xl hover:text-primary truncate">Landing page kopi</h3>
                        <p className="font-medium text-secondary text-base mb-6">Website ini dibuat dengan bahasa pemrograman html css dan javascipt</p>
                        <a href="https://alfonsosaputra.github.io/First-web-kopi/" className="font=medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src="/portfo/leng.png" alt="programming" className="w-full"/>
                    <div className="px-6 py-8">
                        <h3 className="mb-3 text-dark font-semibold text=xl hover:text-primary truncate">belajar</h3>
                        <p className="font-medium text-secondary text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, unde!</p>
                        <a href="https://alfonsosaputra.github.io/first-ecomerce-web/" className="font=medium text-sm text-white bg-primary py-2 px-4 rounded-lg hover:opacity-80">Baca Selengkapnya</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
