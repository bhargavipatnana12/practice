import React, { useState } from "react";
import Test from "./Test";
const Controlled = () => {
  const [name, setName] = useState("");
  const handler = (e) => setName(e.target.value);
  return (
    <div>
      <h1>Name : {name}</h1>
      <input type="text" onChange={handler} />
      <Test handler={handler} />
    </div>
  );
};

export default Controlled;
