/* eslint-disable @next/next/no-img-element */
export default function Portfoliosection() {
  return (
    <section className="pt-36 pb-16 bg-slate-100">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              portfolio
            </h4>
            <h2 className="font-bold text-dark text-3xl mb-4">
              project terbaru saya
            </h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sequi pariatur veritatis reprehenderit et! Omnis earum ab eligendi
              iste rerum!
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src="/portfo/opi.png" alt="Landing page" width='w-full'></img>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">project pertama </h3>
                <p className="font-medium text-base text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo maxime delectus repellat.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src="/portfo/opi.png" alt="Landing page" width='w-full'></img>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">project pertama </h3>
                <p className="font-medium text-base text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo maxime delectus repellat.</p>
            </div>
            <div className="mb-12 p-4 md:w-1/2">
                <div className="rounded-md shadow-md overflow-hidden">
                    <img src="/portfo/opi.png" alt="Landing page" width='w-full'></img>
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">project pertama </h3>
                <p className="font-medium text-base text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo maxime delectus repellat.</p>
            </div>
        </div>
      </div>
    </section>
  );
}
