import axios from "axios";
import { useState, useEffect } from "react";
const useFetch = (initialUrl = "http://localhost:1000/photos") => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, setData, error, setUrl };
};

export default useFetch;
// export function useDeleteDataById(id) {
//   const [deleted, setDeleted] = useState(false);
//   const [error, setError] = useState(null);

//   const deleteData = async () => {
//     try {
//       await axios.delete(`http://your-api-endpoint/${id}`);
//       setDeleted(true);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return { deleted, error, deleteData };
// }
