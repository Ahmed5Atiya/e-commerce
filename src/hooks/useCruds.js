import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useCrud = (url = "http://localhost:1000/photos") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate("");
  
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const createItem = async (newItem) => {
    try {
      const response = await axios.post(url, newItem);
      setData([...data, response.data]);
    } catch (err) {
      setError(err.message);
    }
  };

  const updateItem = async (id, updatedItem) => {
    try {
      const response = await axios.put(`${url}/${id}`, updatedItem);
      setData(data.map((item) => (item.id === id ? response.data : item)));
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteItem = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      setData(data.filter((item) => item.id !== id));
      navigate("/products");
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, createItem, updateItem, deleteItem, error };
};
