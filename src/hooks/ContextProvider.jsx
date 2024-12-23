import axios from "axios";
import { createContext, useEffect, useState } from "react";
// import { createContext, useState, useEffect } from "axios";

const CrudContext = createContext({
  data: [],
  error: null,
  createItem: () => {},
  updateItem: () => {},
  deleteItem: () => {},
});

const CrudProvider = ({ children, url = "http://localhost:1000/photos" }) => {
  const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handelDelete = (user) => {
    axios
      .delete(`http://localhost:1000/users/${user}`)
      .then((res) => {
        getData();
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  const getData = () => {
    return axios
      .get("http://localhost:1000/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);

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
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const value = {
    data,
    error,
    handelDelete,
    getData,
    users,
    createItem,
    updateItem,
    deleteItem,
  };

  return <CrudContext.Provider value={value}>{children}</CrudContext.Provider>;
};

export { CrudContext, CrudProvider };
