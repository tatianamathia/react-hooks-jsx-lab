import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={{color : "firebrick"}}></h1>
    {name} is a web developer from {city}
  </div>;
}

export default Home;
