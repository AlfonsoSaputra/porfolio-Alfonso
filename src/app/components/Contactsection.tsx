export default function Contactsection() {
  return (
    <section id="contact" className="pt-36 pb-32">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">contact</h4>
            <h2 className="font-bold text-dark text-3xl mb-4">hubungi saya</h2>
            <p className="font-medium text-md text-secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              sequi pariatur veritatis reprehenderit et! Omnis earum ab eligendi
              iste rerum!
            </p>
          </div>
        </div>

        <form>
          <div className="w-full lg:w-2/3 lg:mx-auto">
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="name"
                className="text-base text-primary font-bold"
              >
                Nama
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-slate-200 text-dark outline-none p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary"
              ></input>
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="email"
                className="text-base text-primary font-bold"
              >
                Email
              </label>
              <input
                type="emai"
                id="email"
                className="w-full bg-slate-200 text-dark outline-none p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary"
              ></input>
            </div>
            <div className="w-full mb-8 px-4">
              <label
                htmlFor="message"
                className="text-base text-primary font-bold"
              >
                Message
              </label>
              <textarea
                id="email"
                className="h-32 w-full bg-slate-200 text-dark outline-none p-3 rounded-md focus:ring-primary focus:ring-1 focus:border-primary"
              ></textarea>
            </div>
            <div className="w-full px-4">
              <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg trantition duration-500">Kirim</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
