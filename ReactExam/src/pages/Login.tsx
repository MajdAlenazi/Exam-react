import { useState } from "react";
import { useNavigate } from "react-router-dom";

type info = {
  name: string;
  password: string;
  phone: string;
  email: string;
  id: string;
};

export default function Login() {
  const nav = useNavigate();
  //   const [list, setList] = useState<info[]>([]);

  const [singup, setSingup] = useState({
    name: "",
    password: "",
    phone: "",
    email: "",
  });
  const Login = async () => {
    const res = await fetch("https://fakestoreapi.com/users");

    const data = await res.json();
    const islog = data.find((e: info) => {
      return e.email === singup.email && e.name === singup.name;
    });
    if (islog) {
      nav("/");
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-20 mr-2"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt="logo"
            />
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in
              </h1>{" "}
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your name
              </label>
              <input
                type="teaxt"
                name="email"
                value={singup.name}
                onChange={(e) => {
                  setSingup({
                    ...singup,
                    name: e.target.value,
                  });
                }}
                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={singup.email}
                onChange={(e) => {
                  setSingup({
                    ...singup,
                    email: e.target.value,
                  });
                }}
                className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
              <button
                onClick={Login}
                type="submit"
                className=" mt-[10px] w-full bg-[#FFD814] text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Contine
              </button>
              <p>
                By continuing, you agree to Amazon's Conditions of Use and
                Privacy Notice.
              </p>
              <h1></h1>
              <p>
                Buying for work? <p>Shop on Amazon Business</p>
              </p>
            </div>
          </div>
          <button className="bg-gray-300 rounded-lg w-1/4 h-[40px] text-2xl text-center">
            Create your Amazon account
          </button>
        </div>
      </section>
    </>
  );
}
