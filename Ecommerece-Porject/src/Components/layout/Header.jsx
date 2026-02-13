import logo from "../../assets/Layout/Brand/logo-colored.png";
import germenFlag from "../../assets/Layout1/Image/flags/DE@2x.png";
const Header = () => {
  return (
    <header>
      {/* {Top Header Section} */}
      <div className="w-full bg-white border-b border-gray-300">
        <div
          className="
          mx-auto w-full max-w-7xl
          flex items-center justify-between flex-nowrap
          px-6 lg:px-6 md:px-4
          h-[14dvh] lg:h-[14dvh] md:h-[12dvh]
          gap-6 lg:gap-6 md:gap-4
        "
        >
          {/* LOGO */}
          <div className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Logo"
              className="
              h-15 lg:h-15 md:h-8
              w-auto object-contain
            "
            />
          </div>

          {/* SEARCH BAR */}
          <div
            className="
            flex items-center flex-1
            border-3 border-[#0D6EFD]
            rounded-lg overflow-hidden
            h-12 lg:h-12 md:h-10
            min-w-[390px] lg:min-w-[390px] md:min-w-[260px]
          "
          >
            <input
              type="text"
              placeholder="Search"
              className="
              flex-1 h-full outline-none
              px-3 lg:px-3 md:px-2
              text-base lg:text-base md:text-sm
              border-r-2 border-[#2e7ef7]
            "
            />

            <select
              name="categories"
              id="categories"
              className="
              h-full bg-white outline-none
              px-2 lg:px-2 md:px-1
              text-base lg:text-base md:text-sm
              border-r-2 border-[#2e7ef7]
              w-44 lg:w-44 md:w-28
            "
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="books">Books</option>
            </select>

            <button
              className="
              h-full bg-[#0D6EFD] text-white font-medium
              px-6 lg:px-6 md:px-3
              text-base lg:text-base md:text-sm
              whitespace-nowrap
              shrink-0
            "
            >
              Search
            </button>
          </div>

          {/* ACTIONS */}
          <div
            className="
            flex items-center justify-end
            gap-6 lg:gap-6 md:gap-4
            shrink-0
          "
          >
            {/* Profile */}
            <span className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <svg
                className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5"
                viewBox="0 0 20 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 10C12.7625 10 15 7.7625 15 5C15 2.2375 12.7625 0 10 0C7.2375 0 5 2.2375 5 5C5 7.7625 7.2375 10 10 10ZM10 11.5C6.6625 11.5 0 13.175 0 16.5V17.75C0 18.4375 0.5625 19 1.25 19H18.75C19.4375 19 20 18.4375 20 17.75V16.5C20 13.175 13.3375 11.5 10 11.5Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-sm lg:text-sm md:text-xs">Profile</p>
            </span>

            {/* Message */}
            <span className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <svg
                className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0H2C0.9 0 0.01 0.9 0.01 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM5 7H15C15.55 7 16 7.45 16 8C16 8.55 15.55 9 15 9H5C4.45 9 4 8.55 4 8C4 7.45 4.45 7 5 7ZM11 12H5C4.45 12 4 11.55 4 11C4 10.45 4.45 10 5 10H11C11.55 10 12 10.45 12 11C12 11.55 11.55 12 11 12ZM15 6H5C4.45 6 4 5.55 4 5C4 4.45 4.45 4 5 4H15C15.55 4 16 4.45 16 5C16 5.55 15.55 6 15 6Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-sm lg:text-sm md:text-xs">Message</p>
            </span>

            {/* Orders */}
            <span className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <svg
                className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3536 17.1307C10.5936 17.8207 9.42357 17.8207 8.66357 17.1207L8.55357 17.0207C3.30357 12.2707 -0.126429 9.16065 0.00357106 5.28065C0.0635711 3.58065 0.933571 1.95065 2.34357 0.990654C4.98357 -0.809346 8.24357 0.0306542 10.0036 2.09065C11.7636 0.0306542 15.0236 -0.819346 17.6636 0.990654C19.0736 1.95065 19.9436 3.58065 20.0036 5.28065C20.1436 9.16065 16.7036 12.2707 11.4536 17.0407L11.3536 17.1307Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-sm lg:text-sm md:text-xs">Orders</p>
            </span>

            {/* My Cart */}
            <span className="flex flex-col items-center gap-1 text-gray-600 cursor-pointer">
              <svg
                className="w-6 h-6 lg:w-6 lg:h-6 md:w-5 md:h-5"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.29989 16.7997C5.14491 16.7997 4.21043 17.7447 4.21043 18.8997C4.21043 20.0546 5.14491 20.9996 6.29989 20.9996C7.45487 20.9996 8.39985 20.0546 8.39985 18.8997C8.39985 17.7447 7.45487 16.7997 6.29989 16.7997ZM0 1.04998C0 1.62747 0.472492 2.09996 1.04998 2.09996H2.09996L5.8799 10.0693L4.46242 12.6313C3.69593 14.0383 4.70392 15.7497 6.29989 15.7497H17.8497C18.4272 15.7497 18.8997 15.2772 18.8997 14.6997C18.8997 14.1223 18.4272 13.6498 17.8497 13.6498H6.29989L7.45487 11.5498H15.2772C16.0647 11.5498 16.7577 11.1193 17.1147 10.4683L20.8736 3.65394C21.2621 2.96095 20.7581 2.09996 19.9601 2.09996H4.42042L3.71693 0.598489C3.54894 0.230996 3.17094 0 2.77195 0H1.04998C0.472492 0 0 0.472492 0 1.04998ZM16.7997 16.7997C15.6447 16.7997 14.7102 17.7447 14.7102 18.8997C14.7102 20.0546 15.6447 20.9996 16.7997 20.9996C17.9547 20.9996 18.8997 20.0546 18.8997 18.8997C18.8997 17.7447 17.9547 16.7997 16.7997 16.7997Z"
                  fill="#8B96A5"
                />
              </svg>
              <p className="text-sm lg:text-sm md:text-xs">My Cart</p>
            </span>
          </div>
        </div>
      </div>
      {/* Nav Sections */}
      <div className="w-full bg-white border-b border-gray-300">
        <div
          className="
      mx-auto max-w-7xl w-full
      flex items-center justify-between flex-nowrap
      px-6 lg:px-6 md:px-4
      h-14 lg:h-14 md:h-12
      gap-6
    "
        >
          {/* LEFT NAV LINKS */}
          <div className="flex-1 min-w-0">
            <ul
              className="
          list-none flex items-center flex-nowrap
          gap-6 lg:gap-6 md:gap-4
          text-sm lg:text-sm md:text-xs
          text-gray-900
          whitespace-nowrap
        "
            >
              <li className="shrink-0">
                <svg
                  className="w-5 h-5 lg:w-5 lg:h-5 md:w-4 md:h-4"
                  viewBox="0 0 18 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </li>

              <li className="shrink-0">All category</li>
              <li className="shrink-0">Hot offers</li>
              <li className="shrink-0">Gift boxes</li>
              <li className="shrink-0">Projects</li>
              <li className="shrink-0">Menu items</li>

              <li className="shrink-0 flex items-center gap-1">
                <select
                  className="outline-none cursor-pointer"
                  name="help"
                  id="navHelp"
                >
                  <option value="1" disabled selected hidden >Help</option>
                  <option value="2">option 2</option>
                  <option value="3">option 3</option>
                  <option value="4">option 4</option>``
                </select>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="
        flex items-center flex-nowrap
        gap-10 lg:gap-10 md:gap-6
        shrink-0
        text-sm lg:text-sm md:text-xs
        whitespace-nowrap
      "
          >
            <h2 className="flex items-center gap-2 cursor-pointer">
              English, USD
              <svg
                className="w-3 h-3 lg:w-3 lg:h-3 md:w-2.5 md:h-2.5"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                  fill="#8B96A5"
                />
              </svg>
            </h2>

            <h2 className="flex items-center gap-2 cursor-pointer">
              Ship to
              <img
                src={germenFlag}
                alt="Germen"
                className="w-6 lg:w-6 md:w-5 h-auto"
              />
              <svg
                className="w-3 h-3 lg:w-3 lg:h-3 md:w-2.5 md:h-2.5"
                viewBox="0 0 12 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.59 0L6 4.58L1.41 0L0 1.41L6 7.41L12 1.41L10.59 0Z"
                  fill="#8B96A5"
                />
              </svg>
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
