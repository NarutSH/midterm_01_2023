import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [usersFilter, setUsersFilter] = useState([]);

  const getData = async () => {
    const response = await axios.get("https://dummyjson.com/users");
    setUsers(response.data.users);
    setUsersFilter(response.data.users);
  };

  const filterUsersFn = async () => {
    const filterList = users.filter((item) => {
      return (
        item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.maidenName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setUsersFilter(filterList);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterUsersFn();
  }, [searchTerm]);

  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Table users={usersFilter} />
    </div>
  );
};

export default App;
