import React, { useEffect, useState } from "react";
import axios from "axios";
import randomcolor from "randomcolor";

const Randomqoute = () => {
  const [qoute, setqoute] = useState("");
  const [author, setauthor] = useState("");
  const [col, setcol] = useState("#6151ef");
  const apidata = async () => {
    let random = Math.floor(Math.random() * 1643) + 1;
    console.log(random);

    const data = await axios.get("https://type.fit/api/quotes");
    let arrayofqoutes = [];
    arrayofqoutes = data.data;
    setqoute(arrayofqoutes[random].text);
    setauthor(arrayofqoutes[random].author);
    const color = randomcolor();
    console.log(color);
    setcol(color);
  };

  useEffect(() => {
    apidata();
  }, []);

  return (
    <body
      className="container-fluid w-100 h-100"
      style={{
        background: col,
        position: "fixed",
        top: "0",
        bottom: "0",
        overflowY: "scroll",
        overflowX: "hidden"
      }}
    >
      <br />
      <br />
      <div
        style={{ background: "white" }}
        className="row text-center   p-3 m-3 mx-auto"
      >
        <div className="col-lg-6 randomqoutebox mx-auto text-center">
          <h1>Random Qoute Generator</h1>

          <h4 style={{ color: col }}>"{qoute}"</h4>
          <br />

          <h6 style={{ color: col }}>
            {author === null ? "Anonymus" : author}
          </h6>
          <button
            className="btn rounded-pill w-50"
            style={{
              color: col,

              fontWeight: "bold",
              fontSize: "20px",
              outline: "none",
              boxShadow: "none"
            }}
            onClick={apidata}
          >
            New Qoute
          </button>
        </div>
      </div>
    </body>
  );
};
export default Randomqoute;
