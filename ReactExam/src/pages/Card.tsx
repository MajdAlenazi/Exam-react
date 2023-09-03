import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

type product = {
  image: string;
  price: number;
  title: string;
  id: string;
};

export default function Card() {
  const [product, setProduct] = useState<product[]>([]);
  const [info, setInfo] = useState({
    image: "",
    price: "",
    title: "",
  });

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  }, []);

  return (
    <>
      {product.map((item) => (
        <div key={item.id}>
          <div className=" bg-white border p-7 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[90%]">
            <div className="p-5 m-6 ">
              <a href="#">
                <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
              </a>
              <Link to={`ShowDe/${id}`}></Link>
              <a href="#">
                <img
                  className="rounded-t-lg w-5/12 flex justify-center items-center "
                  src={item.image}
                  alt=""
                />
              </a>
              <a href="#">
                <p className="mb-2 text-2xl  text-center font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.price}
                </p>
              </a>

              <a
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-green rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                see more
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
