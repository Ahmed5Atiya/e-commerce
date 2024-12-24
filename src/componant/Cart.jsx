import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeFromCart } from "../rtx/slice/Product-slice";
import { Link, useNavigate } from "react-router-dom";
import { useProduct } from "../hooks/ProductsProvider";
import { useEffect, useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const { createHistory } = useProduct();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const TotalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.count;
    return acc;
  }, 0);
  return (
    <section className="xl:padding-l flex flex-col  gap-6  wide:padding-r paddind-b ">
      <div className="flex justify-between mt-10 gap-4 items-center bg-white shadow-md py-4 px-6 flex-grow">
        <p className="flex-grow text-2xl text-gray-500  font-bold text-1xl px-3  py-2 ">
          The Total Price Is :{" "}
          <span className=" text-green-700 text-2xl ">
            {TotalPrice.toFixed(2)} $
          </span>
        </p>
        <button
          onClick={() => dispatch(clearAll())}
          className="text-white flex-grow  px-6  block text-center py-2 bg-red-500 hover:bg-red-600"
        >
          Delete All
        </button>
      </div>
      <div className="overflow-x-auto py-5   shadow-2xl mb-10">
        <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left text-xl rtl:text-right text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                #ID
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Title
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Image
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Salary
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Quintity
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-xl">
            {cart.map((product, index) => (
              <tr key={product.id} className="odd:bg-gray-50 py-5">
                <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="whitespace-nowrap px-5 py-4 font-medium text-gray-900">
                  {product.title}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                  <img src={product.thumbnail} alt="" width={60} height={60} />
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                  {product.price * product.count}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                  {product.count}
                </td>
                <td className="whitespace-nowrap px-5 py-4 text-gray-700">
                  <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="  rounded bg-red-600 px-6 py-2 text-xs font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={() => {
          // createHistory(email);
          navigate("/payment");
        }}
        className="w-full mb-10 text-center px-4 py-4 flex-grow text-white font-semibold hover:bg-blue-700 bg-blue-600"
      >
        Checkout
      </button>
    </section>
  );
}

export default Cart;
