import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate("");
  const ID = (
    Math.floor(Math.random() * (100000 - 1000 + 1)) + 1000
  ).toString();
  const { id } = useParams();
  const [information, setInformation] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
    rating: 0,
    thumbnail: "",
    id: 0,
  });
  // const getPrdById = (id) => {
  //   // let item = id.toString();
  //   // console.log(item);
  //   axios
  //     .get(`http://localhost:1000/photos/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res);
  //       setInformation({
  //         title: res.data.title,
  //         description: res.data.description,
  //         category: res.data.category,
  //         price: res.data.price,
  //         rating: res.data.rating,
  //         images: res.data.images,
  //         id,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // };
  const getPrdById = async (id) => {
    if (id) {
      const response = await axios.get(
        `http://localhost:1000/photos/${+information.id}`
      );
      console.log(response);
      const productData = response.data;
      console.log(productData);
      setInformation({
        title: productData.title,
        description: productData.description,
        category: productData.category,
        price: Number(productData.price), // Convert price to number if necessary
        rating: Number(productData.rating), // Convert rating to number if necessary
        thumbnail: productData.thumbnail,
        id: id,
      });
    } else {
      console.log(id);
      console.log("ID is not available");
    }
  };
  useEffect(() => {
    if (id) {
      getPrdById();
    }
  }, [id]);
  console.log(information);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(information);
    axios
      .post("http://localhost:1000/photos", information)
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  let handleChange = (e) => {
    const { name, value } = e.target;
    setInformation((old) => ({
      ...old,
      [name]: value, //? computed property
    }));
  };
  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:1000/photos/${+id}`, information)
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="xl:padding-l  wide:padding-r paddind-b bg-gray-100">
      <div className=" px-7  py-12  flex flex-col gap-5 ">
        <h1 className="text-4xl text-blue-700 text-center mb-4 font-mono">
          Add New
        </h1>
        <form
          onSubmit={id ? handleEdit : handleAdd}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-row items-center gap-4 justify-between">
            <input
              type="text"
              name="title"
              value={information.title}
              onChange={handleChange}
              placeholder="Enter your Title"
              className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
            <input
              type="text"
              value={information.description}
              onChange={handleChange}
              name="description"
              placeholder="Enter your Description"
              className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
          </div>
          <div className="flex flex-row items-center gap-4 justify-between">
            <input
              type="number"
              value={information.rating}
              onChange={handleChange}
              name="rating"
              placeholder="Enter your rate"
              className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
            <input
              type="number"
              value={information.price}
              onChange={handleChange}
              name="price"
              placeholder="Enter your Price"
              className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
            <input
              type="text"
              value={information.category}
              onChange={handleChange}
              name="category"
              placeholder="Enter your Catigory"
              className="outline-none flex-grow  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
          </div>
          <div className="w-full ">
            <input
              type="text"
              value={information.thumbnail}
              onChange={handleChange}
              name="thumbnail"
              placeholder="Enter your Image Url"
              className="outline-none w-full  py-4 px-3 border-blue-400 border-[2px] focus:border-blue-500 focus:border-[3px]"
            />
          </div>
          <button
            type="submit"
            className="outline-none w-full hover:bg-blue-800  font-bold  bg-blue-700 text-white py-4 px-3 border-blue-100 "
          >
            Save
          </button>
        </form>
      </div>
    </section>
  );
}

export default AddProduct;
