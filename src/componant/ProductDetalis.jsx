import { Link, useParams } from "react-router-dom";
import { star } from "../assets/icons";
import { useCrud } from "../hooks/useCruds";
import Swal from "sweetalert2";
import { ProductsContext, useProduct } from "../hooks/ProductsProvider";
import { useContext } from "react";
import { useDispatch } from "react-redux";
import deleteProduct from "../constant/used";

function ProductDetalis() {
  const { id } = useParams();
  const { deleteItem, data } = useCrud();
  const item = data.find((item) => +item.id === +id);
  if (!item) {
    return <p>No product found with ID: {id}</p>;
  }
  return (
    <div className="w-full py-10 px-6 flex items-center justify-center ">
      {item === undefined ? (
        <h1 className="text-2xl bg-black font-semibold">Loading....</h1>
      ) : (
        <div className="bg-white flex flex-col gap-2 w-2/3   py-4 px-3  shadow-3xl ">
          <div className="w-full h-[308px]">
            <img
              src={item.thumbnail}
              alt="image one"
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl text-red-600 font-mono my-2">{item.title}</h3>
          <p className="text-[15px] text-gray-500 mb-3 ">{item.description}</p>
          <div className="flex flex-1 justify-between">
            <div className="flex gap-2 items-center">
              <img src={star} alt="image star" width={30} height={30} />
              <p className="text-gray-400 text-xl">{item.rating}</p>
            </div>
            <p className="text-green-600  my-4 text-xl">$ {item.price}</p>
          </div>
          <div className="flex flex-1 gap-3 justify-between">
            <button
              onClick={() => deleteProduct(item, deleteItem)}
              className="text-white flex-grow  px-6  block text-center py-2 bg-red-500 hover:bg-red-600"
            >
              Delete
            </button>
            <Link
              to={`/products/new/${item.id}`}
              className="text-white flex-grow  px-6  block text-center py-2 bg-blue-500 hover:bg-blue-600"
            >
              Edit
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetalis;
