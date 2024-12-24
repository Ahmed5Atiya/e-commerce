// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ErrorBoundary from "./componant/ErrorBoudrey/ErrorBoundery";
// import "./index.css";
// // import DataFetcher from "./componant/FetchData/Data";
// // import Hero from "./componant/Hero";
// // import ImageSlider from "./componant/ImageSlider";
// import image1 from "./images/big-shoe1.png";
// import image2 from "./images/big-shoe2.png";
// import image3 from "./images/big-shoe3.png";

// // import Contact from "./componant/Contact";
// // import ProductDetalis from "./componant/ProductDetalis";
// // import Login from "./componant/Login";
// import Navbar from "./componant/Navbar";
// import Error from "./componant/ErrorBoudrey/Error";
// import { lazy, Suspense } from "react";
// import Hero from "./componant/Hero";
// import AddProduct from "./componant/AddProduct";
// import ProductsProvider from "./hooks/ProductsProvider";
// // import ProductsProvider from "./hooks/ProductsProvider";
// const DataFetcher = lazy(() => import("./componant/FetchData/Data"));
// const ProductDetalis = lazy(() => import("./componant/ProductDetalis"));
// const Login = lazy(() => import("./componant/Login"));
// const Contact = lazy(() => import("./componant/Contact"));
// const ImageSlider = lazy(() => import("./componant/ImageSlider"));
// export default function App() {
//   const images = [image1, image2, image3];
//   return (
//     <Suspense
//       fallback={
//         <div className="w-full bg-red-400">
//           <span className="text-2xl text-white font-bold">Loading...</span>
//         </div>
//       }
//     >
//       <ProductsProvider>
//         <ErrorBoundary>
//           <BrowserRouter>
//             <Navbar />
//             <Routes>
//               <Route path="/" element={<Hero />} />
//               <Route path="/products" element={<DataFetcher />} />
//               <Route path="/products/new" element={<AddProduct />} />
//               <Route path="/products/:id" element={<ProductDetalis />} />
//               <Route path="/products/new/:id" element={<AddProduct />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/contact-us" element={<Contact />} />
//               <Route path="/slider" element={<ImageSlider images={images} />} />
//               <Route path="*" element={<Error />} />
//             </Routes>
//           </BrowserRouter>
//         </ErrorBoundary>
//       </ProductsProvider>
//     </Suspense>
//   );
// }

import {
  BrowserRouter,
  Outlet,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import ErrorBoundary from "./componant/ErrorBoudrey/ErrorBoundery";
import "./index.css";
// import DataFetcher from "./componant/FetchData/Data";
// import Hero from "./componant/Hero";
// import ImageSlider from "./componant/ImageSlider";
import image1 from "./images/big-shoe1.png";
import image2 from "./images/big-shoe2.png";
import image3 from "./images/big-shoe3.png";

// import Contact from "./componant/Contact";
// import ProductDetalis from "./componant/ProductDetalis";
// import Login from "./componant/Login";
import Navbar from "./componant/Navbar";
import Error from "./componant/ErrorBoudrey/Error";
import { lazy, Suspense } from "react";
import Hero from "./componant/Hero";
import AddProduct from "./componant/AddProduct";
import ProductsProvider from "./hooks/ProductsProvider";
import Cart from "./componant/Cart";
import Payment from "./componant/Payment";
import SignUp from "./componant/SignUp";
import Users from "./componant/Users";
import History from "./componant/History";

// import ProductsProvider from "./hooks/ProductsProvider";
const DataFetcher = lazy(() => import("./componant/FetchData/Data"));
const ProductDetalis = lazy(() => import("./componant/ProductDetalis"));
const Login = lazy(() => import("./componant/Login"));
const Contact = lazy(() => import("./componant/Contact"));
const ImageSlider = lazy(() => import("./componant/ImageSlider"));

// export default function App() {
//   // const images = [image1, image2, image3];
//   // const renderNavbar = () => {
//   //   const { pathname } = useLocation();
//   //   if (pathname === "/login") {
//   //     return null; // Hide navbar on login page
//   //   } else {
//   //     return <Navbar />; // Render navbar on other pages
//   //   }
//   // };

//   // return (
//   //   <Suspense
//   //     fallback={
//   //       <div className="w-full bg-red-400">
//   //         <span className="text-2xl text-white font-bold">Loading...</span>
//   //       </div>
//   //     }
//   //   >
//   //     <ErrorBoundary>
//   //       <BrowserRouter>
//   //         <ProductsProvider>
//   //           {renderNavbar()}
//   //           <Routes>
//   //             <Route path="/" element={<Hero />} />
//   //             <Route path="/products" element={<DataFetcher />} />
//   //             <Route path="/products/new" element={<AddProduct />} />
//   //             <Route path="/products/:id" element={<ProductDetalis />} />
//   //             <Route path="/products/new/:id" element={<AddProduct />} />
//   //             <Route path="/login" element={<Login />} />
//   //             <Route path="/contact-us" element={<Contact />} />
//   //             <Route path="/cart" element={<Cart />} />
//   //             <Route path="/slider" element={<ImageSlider images={images} />} />
//   //             <Route path="*" element={<Error />} />
//   //           </Routes>
//   //         </ProductsProvider>
//   //       </BrowserRouter>
//   //     </ErrorBoundary>
//   //   </Suspense>
//   const images = [image1, image2, image3];
//   const location = useLocation();

//   return (
//     <Suspense
//       fallback={
//         <div className="w-full bg-red-400">
//           <span className="text-2xl text-white font-bold">Loading...</span>
//         </div>
//       }
//     >
//       <ErrorBoundary>
//         <ProductsProvider>
//           {location.pathname !== "/login" &&
//             location.pathname !== "/sign-up" && <Navbar />}
//           <Routes>
//             <Route index element={<Hero />} />
//             <Route path="/products" element={<DataFetcher />} />
//             <Route path="/products/new" element={<AddProduct />} />
//             <Route path="/products/:id" element={<ProductDetalis />} />
//             <Route path="/products/new/:id" element={<AddProduct />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/sign-up" element={<SignUp />} />
//             <Route path="/contact-us" element={<Contact />} />
//             <Route path="/cart" element={<Cart />} />{" "}
//             <Route path="/slider" element={<ImageSlider images={images} />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//         </ProductsProvider>
//       </ErrorBoundary>
//     </Suspense>
//   );
// }
const images = [image1, image2, image3];

const Layout = () => {
  const location = useLocation();
  const hideNavbarPaths = ["/login", "/sign-up"];

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}
      <Outlet />
    </>
  );
};

const App = () => (
  <Suspense
    fallback={
      <div className="w-full bg-red-400">
        <span className="text-2xl text-white font-bold">Loading...</span>
      </div>
    }
  >
    <ErrorBoundary>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Hero />} />
            <Route path="products" element={<DataFetcher />} />
            <Route path="products/new" element={<AddProduct />} />
            <Route path="products/:id" element={<ProductDetalis />} />
            <Route path="products/new/:id" element={<AddProduct />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="users" element={<Users />} />
            <Route path="history" element={<History />} />
            <Route path="slider" element={<ImageSlider images={images} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ProductsProvider>
    </ErrorBoundary>
  </Suspense>
);

export default App;
