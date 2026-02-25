import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setData(response.data));
  }, []);
  return (
    <div>
      {data.map((item) => (
        <li>{item.username}</li>
      ))}
    </div>
  );
};

export default App;
