import Card from "../pages/Card";

export default function Nav() {
  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-[#131921] py-4 lg:px-12 shadow border-solid border-t-2">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16 w-[80px]">
            <span className="font-semibold text-xl tracking-tight">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            </span>
          </div>
          <div className="block lg:hidden ">
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-white hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>

        <div className=" flex menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
          <div className="text-md font-bold text-white lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
            >
              Deliver to
              <p>Saudi Arabia</p>
            </a>
          </div>
          <div className=" flex flex-row ">
            <input
              className="border-2 w-[50pc]  border-gray-300 bg-white h-[50px] pl-2 pr-8 rounded-lg text-sm focus:outline-none "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button className="bg-[#FEBD69]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-8 h-[50px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="flex ">
            <a
              href="#"
              className="block text-md px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Hello, Sign in
              <p> Account & Lists</p>
            </a>

            <a
              href="#"
              className=" block text-md px-4  ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
            >
              Returns
              <p>& Orders</p>
            </a>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-15"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* sec2 */}
      <div className="bg-[#232F3E] h-[60px]">
        <ul className="flex gap-8 p-3 tex-3xl font-bold text-white">
          <li className="Active flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            All
          </li>

          <li>
            <a href="#"> Toody</a>
          </li>
          <li>
            <a href="#"></a>Customer
          </li>
          <li>
            <a href="#"></a> Registry
          </li>
          <li>
            <a href="#"></a>Gif
          </li>
          <li>
            <a href="#"></a>Cards
          </li>
          <li>
            <a href="#" />
            Sell
          </li>
        </ul>
      </div>
      {/* end sec2 */}

      <div className="bg-gradient-to-b from-[#DAEB5F] to-white h-screen">
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg"
            className=""
          ></img>
          <div className="grid grid-cols-4 gap-4">
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}
