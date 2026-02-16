import heroBg from "../../assets/Image/backgrounds/Banner-board-800x420 2.png";

function Hero() {
  return (
    <section className="w-[85dvw] lg:w-[77dvw] mx-auto border border-gray-300 bg-white rounded-md p-3 lg:p-4 mt-1">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 items-start">
        {/* ===================== Side Menu (LG only) ===================== */}
        <aside className="hidden lg:block lg:col-span-2 p-1">
          <nav>
            <ul className="list-none flex flex-col gap-[2px] text-xs">
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 bg-[#E5F1FF] rounded-md">
                Automobiles
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Clothes and wear
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Home interiors
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Computer and tech
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Tools, equipment
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Sports and outdoor
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Animal and pets
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                Machinery and tools
              </li>
              <li className="hover:bg-[#E5F1FF] select-none cursor-pointer px-2 py-1 rounded-md">
                More Category
              </li>
            </ul>
          </nav>
        </aside>

        {/* ===================== Hero Image ===================== */}
        <main className="lg:col-span-7">
          <figure className="relative rounded-md overflow-hidden mx-auto w-full md:w-[90%] lg:w-full">
            <img
              src={heroBg}
              className="w-full object-cover rounded-md h-[220px] md:h-[260px] lg:h-[280px]"
              alt="Hero"
            />
            {/* Overlay */}
            <figcaption className="absolute top-8 left-6 md:top-10 md:left-8 lg:top-10 lg:left-8">
              <p className="text-sm md:text-base lg:text-base font-medium text-gray-800">
                Latest trending
              </p>

              <h1 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
                Electronic items
              </h1>

              <button className="mt-3 hover:bg-blue-600 hover:text-white bg-white px-4 py-2 rounded-md shadow hover:cursor-pointer transition text-sm">
                Learn more
              </button>
            </figcaption>
          </figure>

          {/* ===================== Promos (MD only BELOW HERO) ===================== */}
          <section className="mt-3 mx-auto w-full md:w-[90%] lg:hidden flex flex-col md:flex-row gap-2">
            {/* Signup Promo (WIDER) */}
            <article className="bg-[#E3F0FF] p-2 rounded-md md:flex-[1.4]">
              <div className="flex items-center gap-2">
                <div className="bg-[#91B1E7] p-2 rounded-full shrink-0">
                  <svg
                    width="22"
                    height="24"
                    viewBox="0 0 29 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.1242 24.2876L3.31863 27.4098C2.97794 27.593 0.284882 28.686 0 28.9314C5.38722 32.988 10.1419 33.8919 14.9158 33.8919C19.6546 33.8919 24.868 31.3119 28.2432 28.5364C27.9319 28.2773 26.7216 27.635 26.3471 27.4511L20.1303 24.3868C19.3271 23.9908 18.8197 23.1815 18.8197 22.2962V19.8914C18.9945 19.6952 19.1942 19.4433 19.4079 19.1458C20.2552 17.9658 20.8962 16.6679 21.3404 15.3062C22.1377 15.0637 22.7251 14.3376 22.7251 13.4747V10.9078C22.7251 10.3431 22.4703 9.83856 22.0746 9.48529V5.77457C22.0746 5.77457 22.8477 0 14.9158 0C6.98392 0 7.75706 5.77457 7.75706 5.77457V9.48529C7.36058 9.83856 7.10653 10.3431 7.10653 10.9078V13.4747C7.10653 14.1508 7.46704 14.7459 8.0067 15.0897C8.65723 17.8818 10.3607 19.8914 10.3607 19.8914V22.2368C10.3599 23.091 9.8856 23.8779 9.1242 24.2876Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <p className="text-xs font-medium text-gray-800 leading-tight">
                  Hi, user <br />
                  <span className="text-gray-600 font-normal">
                    let’s get started
                  </span>
                </p>
              </div>

              <div className="mt-2 flex flex-col gap-2">
                <button className="bg-[linear-gradient(to_right,#127FFF,#0067FF)] hover:cursor-pointer text-white px-3 py-2 rounded-md hover:bg-[linear-gradient(to_right,#0067FF,#127FFF)] transition w-full text-xs">
                  Join now
                </button>

                <button className="hover:bg-blue-600 hover:text-white hover:cursor-pointer bg-white border border-gray-300 text-[#0D6EFD] w-full px-3 py-2 rounded-md text-xs transition">
                  Log in
                </button>
              </div>
            </article>

            <article className="bg-[#F38332] text-white p-2 font-bold rounded-md text-sm md:flex-1">
              <p>
                Get US $10 off <span className="block">with a new</span>{" "}
                supplier
              </p>
            </article>

            <article className="bg-[#55BDC3] text-white p-2 font-bold rounded-md text-sm md:flex-1">
              <p>
                Send quotes with <span className="block">supplier</span>{" "}
                preferences
              </p>
            </article>
          </section>
        </main>

        {/* ===================== Promos (LG RIGHT SIDE) ===================== */}
        <aside className="hidden lg:flex lg:col-span-3 flex-col gap-1.5">
          <article className="bg-[#E3F0FF] p-2 rounded-md">
            <div className="flex items-center gap-2">
              <div className="bg-[#91B1E7] p-2 rounded-full shrink-0">
                <svg
                  width="22"
                  height="24"
                  viewBox="0 0 29 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.1242 24.2876L3.31863 27.4098C2.97794 27.593 0.284882 28.686 0 28.9314C5.38722 32.988 10.1419 33.8919 14.9158 33.8919C19.6546 33.8919 24.868 31.3119 28.2432 28.5364C27.9319 28.2773 26.7216 27.635 26.3471 27.4511L20.1303 24.3868C19.3271 23.9908 18.8197 23.1815 18.8197 22.2962V19.8914C18.9945 19.6952 19.1942 19.4433 19.4079 19.1458C20.2552 17.9658 20.8962 16.6679 21.3404 15.3062C22.1377 15.0637 22.7251 14.3376 22.7251 13.4747V10.9078C22.7251 10.3431 22.4703 9.83856 22.0746 9.48529V5.77457C22.0746 5.77457 22.8477 0 14.9158 0C6.98392 0 7.75706 5.77457 7.75706 5.77457V9.48529C7.36058 9.83856 7.10653 10.3431 7.10653 10.9078V13.4747C7.10653 14.1508 7.46704 14.7459 8.0067 15.0897C8.65723 17.8818 10.3607 19.8914 10.3607 19.8914V22.2368C10.3599 23.091 9.8856 23.8779 9.1242 24.2876Z"
                    fill="white"
                  />
                </svg>
              </div>

              <p className="text-xs font-medium text-gray-800 leading-tight">
                Hi, user <br />
                <span className="text-gray-600 font-normal">
                  let’s get started
                </span>
              </p>
            </div>

            <div className="mt-2 flex flex-col gap-2">
              <button className="bg-[linear-gradient(to_right,#127FFF,#0067FF)] text-white px-3 py-2 rounded-md hover:bg-[linear-gradient(to_right,#0067FF,#127FFF)] transition w-full text-xs">
                Join now
              </button>

              <button className="bg-white border border-gray-300 text-[#0D6EFD] w-full px-3 py-2 rounded-md text-xs">
                Log in
              </button>
            </div>
          </article>

          <article className="bg-[#F38332] text-white p-2 font-bold rounded-md md:lg:text-xs text-sm">
            <p>
              Get US $10 off <span className="block">with a new</span> supplier
            </p>
          </article>

          <article className="bg-[#55BDC3] text-white p-2 font-bold rounded-md md:lg:text-xs text-sm">
            <p>
              Send quotes with <span className="block">supplier</span>{" "}
              preferences
            </p>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
