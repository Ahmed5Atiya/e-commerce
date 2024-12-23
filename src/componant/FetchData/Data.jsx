// import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { star } from "../../assets/icons";
// import { useState } from "react";
// import { useCrud } from "../../hooks/useCruds";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../rtx/slice/Product-slice";

// function Data() {
//   // const { data, isLoading, error, setUrl } = useFetch();
//   const { data } = useCrud();
//   const dispatch = useDispatch();

//   console.log(data);
//   // if (isLoading) {
//   //   return <h1>Loading.......</h1>;
//   // }
//   return (
//     <section className="xl:padding-l  wide:padding-r paddind-b">
//       <div className=" mt-16 py-16 ">
//         <div className="flex flex-col gap-2 shadow-2xl bg-white mb-6 px-5 py-4">
//           <Link
//             to={"/products/new"}
//             className="w-full  text-center px-4 py-4 flex-grow text-white font-semibold hover:bg-blue-700 bg-blue-600"
//           >
//             Add Product
//           </Link>
//           <div className="flex gap-3 ">
//             <button
//               className="w-full  px-4 py-4 flex-grow text-white font-semibold hover:bg-red-700 bg-red-600"
//               // onClick={handlePrev}
//             >
//               back
//             </button>
//             <button
//               className="w-full text-white font-semibold  px-4 py-4  hover:bg-green-700  flex-grow bg-green-600"
//               // onClick={handleNext}
//             >
//               Next
//             </button>
//           </div>
//         </div>

//         <div className=" grid lg:grid-cols-3 gap-4  px-3  md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
//           {data.map((item) => {
//             {
//               /* if (item.id > this.state.min && item.id <= this.state.max) */
//             }
//             return (
//               <div
//                 className="bg-white flex flex-col gap-2 py-4 px-3 shadow-xl "
//                 key={item.id}
//               >
//                 <div className="w-full h-[308px]">
//                   <img
//                     src={item.thumbnail}
//                     alt="image one"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <h3 className="text-xl text-red-600 font-mono my-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-[15px] flex-1  text-gray-500 mb-3 ">
//                   {item.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex gap-2 items-center">
//                     <img src={star} alt="image star" width={30} height={30} />
//                     <p className="text-gray-400 text-xl">{item.rating}</p>
//                   </div>
//                   <p className="text-green-600  my-4 text-xl">$ {item.price}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <Link
//                     to={`/products/${item.id}`}
//                     className="text-white flex-grow  px-6  block text-center py-2 bg-blue-500 hover:bg-blue-600"
//                   >
//                     More
//                   </Link>
//                   <button
//                     onClick={() => dispatch(addToCart(item))}
//                     className="text-white flex-grow  px-6  block text-center py-2 bg-green-500 hover:bg-green-600"
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Data;



import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { star } from "../../assets/icons";
import { useState } from "react";
import { useCrud } from "../../hooks/useCruds";
import { useDispatch } from "react-redux";
import { addToCart } from "../../rtx/slice/Product-slice";

function Data() {
  const { data, isLoading, error, setUrl } = useFetch();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) => {
    const searchTextLower = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(searchTextLower) ||
      item.description.toLowerCase().includes(searchTextLower)
    );
  });

  console.log(filteredData);

  return (
    <section className="xl:padding-l wide:padding-r paddind-b">
      <div className=" mt-16 py-16 ">
        <div className="flex flex-col gap-2 shadow-2xl bg-white mb-6 px-5 py-4">
          <Link
            to={"/products/new"}
            className="w-full text-center px-4 py-4 flex-grow text-white font-semibold hover:bg-blue-700 bg-blue-600"
          >
            Add Product
          </Link>

          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search by title or description"
              className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 gap-4 px-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
          {isLoading ? (
            <p className="text-2xl text-gray-600 text-center mt-28">
              Loading...
            </p>
          ) : filteredData.length === 0 ? (
            <p className="text-2xl text-gray-600 text-center mt-28">
              No results found for "{searchTerm}"
            </p>
          ) : (
            filteredData.map((item) => (
              <div
                className="bg-white flex flex-col gap-2 py-4 px-3 shadow-xl "
                key={item.id}
              >
                 <div className="w-full h-[308px]">
                   <img
                    src={item.thumbnail}
                    alt="image one"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl text-red-600 font-mono my-2">
                  {item.title}
                </h3>
                <p className="text-[15px] flex-1  text-gray-500 mb-3 ">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 items-center">
                    <img src={star} alt="image star" width={30} height={30} />
                    <p className="text-gray-400 text-xl">{item.rating}</p>
                  </div>
                  <p className="text-green-600  my-4 text-xl">$ {item.price}</p>
                </div>
                <div className="flex gap-2">
                  <Link
                    to={`/products/${item.id}`}
                    className="text-white flex-grow  px-6  block text-center py-2 bg-blue-500 hover:bg-blue-600"
                  >
                    More
                  </Link>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="text-white flex-grow  px-6  block text-center py-2 bg-green-500 hover:bg-green-600"
                  >
                    Add To Cart
                  </button>
                </div>

              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Data;




 // search not work and btn also
// import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { star } from "../../assets/icons";
// import { useState } from "react";
// import { useCrud } from "../../hooks/useCruds";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../rtx/slice/Product-slice";

// function Data() {
//   const { data, isLoading, error, setUrl } = useFetch();
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(data); // Initial filtered data

//   const handlePriceFilter = (minPrice, maxPrice) => {
//     if (!minPrice && !maxPrice) { // Reset filter
//       setFilteredData(data);
//       return;
//     }
//     const filtered = data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
//     setFilteredData(filtered);
//   };

//   const handleSearch = () => {
//     const searchTextLower = searchTerm.toLowerCase();
//     const filtered = data.filter((item) => {
//       return (
//         item.title.toLowerCase().includes(searchTextLower) ||
//         item.description.toLowerCase().includes(searchTextLower)
//       );
//     });
//     setFilteredData(filtered);
//   };

//   return (
//     <section className="xl:padding-l wide:padding-r paddind-b">
//       <div className=" mt-16 py-16 ">
//         <div className="flex flex-col gap-2 shadow-2xl bg-white mb-6 px-5 py-4">
//           <Link
//             to={"/products/new"}
//             className="w-full text-center px-4 py-4 flex-grow text-white font-semibold hover:bg-blue-700 bg-blue-600"
//           >
//             Add Product
//           </Link>

//           <div className="flex items-center w-full">
//             <input
//               type="text"
//               placeholder="Search by title or description"
//               className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>

//           <div className="flex gap-2 mt-2">
//             <button
//               className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
//               onClick={() => handlePriceFilter(0, 100000)} 
//             >
//               All Prices
//             </button>
//             <button
//               className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
//               onClick={() => handlePriceFilter(20, 100)}
//             >
//               $20 - $100
//             </button>
//             <button
//               className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
//               onClick={() => handlePriceFilter(100, 100000)}
//             >
//               Above $100
//             </button>
//           </div>
//         </div>

//         <div className=" grid lg:grid-cols-3 gap-4 px-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
//           {isLoading ? (
//             <p className="text-2xl text-gray-600 text-center mt-28">
//               Loading...
//             </p>
//           ) : filteredData.length === 0 ? (
//             <p className="text-2xl text-gray-600 text-center mt-28">
//               No results found
//             </p>
//           ) : (
//             filteredData.map((item) => (
//                 <div 
//                     className="bg-white flex flex-col gap-2 py-4 px-3 shadow-xl "
//                     key={item.id}
//                 >
//                     <div className="w-full h-[308px]">
//                         <img
//                             src={item.thumbnail}
//                             alt="image one"
//                             className="w-full h-full object-contain"
//                         />
//                     </div>
//                     <h3 className="text-xl text-red-600 font-mono my-2">
//                         {item.title}
//                     </h3>
//                     <p className="text-[15px] flex-1  text-gray-500 mb-3 ">
//                         {item.description}
//                     </p>
//                     <div className="flex items-center justify-between">
//                         <div className="flex gap-2 items-center">
//                             <img src={star} alt="image star" width={30} height={30} />
//                             <p className="text-gray-400 text-xl">{item.rating}</p>
//                         </div>
//                         <p className="text-green-600  my-4 text-xl">$ {item.price}</p>
//                     </div>
//                     <div className="flex gap-2">
//                         <Link
//                             to={`/products/${item.id}`}
//                             className="text-white flex-grow  px-6  block text-center py-2 bg-blue-500 hover:bg-blue-600"
//                         >
//                             More
//                         </Link>
//                         <button
//                             onClick={() => dispatch(addToCart(item))}
//                             className="text-white flex-grow  px-6  block text-center py-2 bg-green-500 hover:bg-green-600"
//                         >
//                             Add To Cart
//                         </button>
//                     </div>
//                 </div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
// export default Data;







/// search not work and btn active
// import { Link } from "react-router-dom";
// import useFetch from "../../hooks/useFetch";
// import { star } from "../../assets/icons";
// import { useState, useEffect } from "react";
// import { useCrud } from "../../hooks/useCruds";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../rtx/slice/Product-slice";

// function Data() {
//   const { data, isLoading, error, setUrl } = useFetch();
//   const dispatch = useDispatch();
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(data); // Initial filtered data
//   const [activePriceFilter, setActivePriceFilter] = useState('all'); // Track active filter

//   const handlePriceFilter = (minPrice, maxPrice, filterName) => {
//     setActivePriceFilter(filterName); 

//     if (!minPrice && !maxPrice) { // Reset filter
//       setFilteredData(data);
//     } else {
//       const filtered = data.filter((item) => item.price >= minPrice && item.price <= maxPrice);
//       setFilteredData(filtered);
//     }
//   };

//   const handleSearch = () => {
//     const searchTextLower = searchTerm.toLowerCase();
//     const filtered = data.filter((item) => {
//       return (
//         item.title.toLowerCase().includes(searchTextLower) ||
//         item.description.toLowerCase().includes(searchTextLower)
//       );
//     });
//     setFilteredData(filtered);
//   };

//   useEffect(() => {
//     if (data) {
//       handleSearch(); // Apply initial search filter (if any)
//       handlePriceFilter(0, 100000, 'all'); // Apply initial price filter (all)
//     }
//   }, [data, searchTerm]); // Re-filter on data change and searchTerm change

//   return (
//     <section className="xl:padding-l wide:padding-r paddind-b">
//       <div className=" mt-16 py-16 ">
//         <div className="flex flex-col gap-2 shadow-2xl bg-white mb-6 px-5 py-4">
//           <Link
//             to={"/products/new"}
//             className="w-full text-center px-4 py-4 flex-grow text-white font-semibold hover:bg-blue-700 bg-blue-600"
//           >
//             Add Product
//           </Link>

//           <div className="flex items-center w-full">
//             <input
//               type="text"
//               placeholder="Search by title or description"
//               className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
//               value={searchTerm}
//               onChange={(e) => {
//                 setSearchTerm(e.target.value); 
//                 handleSearch(); // Filter on every search term change
//               }}
//             />
//           </div>

//           <div className="flex gap-2 mt-2">
//             <button
//               className={`px-4 py-2 rounded-md ${activePriceFilter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handlePriceFilter(0, 100000, 'all')} // Show all prices
//             >
//               All Prices
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md ${activePriceFilter === 'range' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handlePriceFilter(20, 100, 'range')}
//             >
//               $20 - $100
//             </button>
//             <button
//               className={`px-4 py-2 rounded-md ${activePriceFilter === 'above' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
//               onClick={() => handlePriceFilter(100, 100000, 'above')}
//             >
//               Above $100
//             </button>
//           </div>
//         </div>

//         <div className=" grid lg:grid-cols-3 gap-4 px-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
//           {isLoading ? (
//             <p className="text-2xl text-gray-600 text-center mt-28">
//               Loading...
//             </p>
//           ) : filteredData.length === 0 ? (
//             <p className="text-2xl text-gray-600 text-center mt-28">
//               No results found
//             </p>
//           ) : (
//             filteredData.map((item) => (
//               <div className="bg-white flex flex-col gap-2 py-4 px-3 shadow-xl " key={item.id}>
//                 <div className="w-full h-[308px]">
//                   <img
//                     src={item.thumbnail}
//                     alt="image one"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//                 <h3 className="text-xl text-red-600 font-mono my-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-[15px] flex-1  text-gray-500 mb-3 ">
//                   {item.description}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex gap-2 items-center">
//                     <img src={star} alt="image star" width={30} height={30} />
//                     <p className="text-gray-400 text-xl">{item.rating}</p>
//                   </div>
//                   <p className="text-green-600  my-4 text-xl">$ {item.price}</p>
//                 </div>
//                 <div className="flex gap-2">
//                   <Link
//                     to={`/products/${item.id}`}
//                     className="text-white flex-grow  px-6  block text-center py-2 bg-blue-500 hover:bg-blue-600"
//                   >
//                     More
//                   </Link>
//                   <button
//                     onClick={() => dispatch(addToCart(item))}
//                     className="text-white flex-grow  px-6  block text-center py-2 bg-green-500 hover:bg-green-600"
//                   >
//                     Add To Cart
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Data;



































// class DataFetcher extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       min: 0,
//       max: 5,
//     };
//   }

//   // componentDidMount() {
//   //   axios
//   //     .get("https://jsonplaceholder.typicode.com/photos")
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       this.setState({ data: response.data });
//   //       console.log(this.state.data);
//   //     })
//   //     .catch((error) => {
//   //       this.setState({ error: error.message });
//   //     });
//   // }
//   // nextToItem() {
//   //   if (this.state.max >= this.state.data.length) {
//   //     this.setState({ min: 0 });
//   //     this.setState({ max: 5 });
//   //   } else {
//   //     this.setState({ min: this.state.min + 5 });
//   //     this.setState({ max: this.state.max + 5 });
//   //   }
//   // }
//   // backToItem() {
//   //   if (this.state.min === 0) {
//   //     this.setState({ min: this.state.min + this.state.data.length - 6 });
//   //     this.setState({ max: this.state.min + this.state.data.length - 1 });
//   //   } else {
//   //     this.setState({ min: this.state.min - 5 });
//   //     this.setState({ max: this.state.max - 5 });
//   //   }
//   // }
//   render() {
//     if (!this.state.data) {
//       return (
//         <p className="text-2xl text-gray-600 text-center mt-28">Loading...</p>
//       );
//     }

//     return (
//       <div className=" mt-16 py-16 ">
//         <div className="flex gap-3 shadow-2xl bg-white mb-6 px-5 py-4">
//           <button
//             className="w-full  px-4 py-4 flex-grow text-white font-semibold hover:bg-red-700 bg-red-600"
//             onClick={() => this.backToItem()}
//           >
//             back
//           </button>
//           <button
//             className="w-full text-white font-semibold  px-4 py-4  hover:bg-green-700  flex-grow bg-green-600"
//             onClick={() => this.nextToItem()}
//           >
//             Next
//           </button>
//         </div>

//         <div className=" grid lg:grid-cols-3 gap-4  px-3  md:grid-cols-2 sm:grid-cols-1 grid-cols-1">
//           {this.state.data.map((item) => {
//             if (item.id > this.state.min && item.id <= this.state.max)
//               return (
//                 <div
//                   key={item.id}
//                   className="bg-white flex flex-col shadow-2xl py-4 px-3 "
//                 >
//                   <div className="w-full">
//                     <img src={item.url} alt="image one" />
//                   </div>
//                   <p className="text-green-600 text-[22px] flex-1 my-4 font-mono ">
//                     {item.title}
//                   </p>
//                   <button className="w-full  items-end justify-end bg-blue-600 text-xl hover:bg-blue-700 py-2 px-3 text-white">
//                     Show More About {item.id}
//                   </button>
//                 </div>
//               );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default memo(DataFetcher);
