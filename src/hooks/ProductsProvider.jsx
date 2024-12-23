import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const ProductsContext = createContext();
const URL = "http://localhost:1000/photos";
function ProductsProvider({ children }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate("");
  const [users, setUsers] = useState([]);

  const handelDelete = (user) => {
    axios
      .delete(`http://localhost:1000/users/${user}`)
      .then((res) => {
        getData();
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("http://localhost:1000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, [users]);

  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const createItem = async (newItem) => {
    try {
      const response = await axios.post(URL, newItem);
      setData([...data, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`${URL}/${id}`, updatedItem);
      setData(data.map((item) => (item.id === id ? response.data : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${URL}/${id}`);
      setData(data.filter((item) => item.id !== id));
      navigate("/products");
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteProduct = (product) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-red-500 text-white py-3 ml-3 px-6 text-bold",
        cancelButton: " bg-green-500 text-white py-3 mr-3 px-6 text-bold",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          deleteItem(product.id);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  useEffect(() => {
    fetchData();
  }, [URL]);

  return (
    <ProductsContext.Provider
      value={{
        data,
        createItem,
        handelDelete,
        users,
        deleteProduct,
        updateItem,
        deleteItem,
        error,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export function useProduct() {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("you use the context outside the provider ");
  return context;
}
export default ProductsProvider;
