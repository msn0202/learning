import React, { useState } from "react";
import "./App1.css";

function App() {
  const [arrData, setArrData] = useState([
    {
      id: 1,
      name: "manjunath",
      place: "bangalore",
      phone: 6364311311,
    },
    {
      id: 2,
      name: "raghvendra",
      place: "yellapur",
      phone: 9480621631,
    },
    {
      id: 3,
      name: "shwetha",
      place: "sirsi",
      phone: 7760000456,
    },
    {
      id: 4,
      name: "naveen",
      place: "bangalore",
      phone: 9740707776,
    },
    {
      id: 5,
      name: "nitesh",
      place: "bangalore",
      phone: 7785652154,
    },
    {
      id: 6,
      name: "adesh",
      place: "bangalore",
      phone: 9742158458,
    },
    {
      id: 7,
      name: "kavitha",
      place: "bangalore",
      phone: 6963258147,
    },
    {
      id: 8,
      name: "vinaya",
      place: "ankola",
      phone: 6369584215,
    },
    {
      id: 9,
      name: "ganesh",
      place: "ankola",
      phone: 635481254,
    },
    {
      id: 10,
      name: "axay",
      place: "ankola",
      phone: 6523652458,
    },
    {
      id: 11,
      name: "vidya",
      place: "ankola",
      phone: 6369528147,
    },
    {
      id: 12,
      name: "manisha",
      place: "udupi",
      phone: 3692581472,
    },
  ]);
  const handlerFilter = (e) => {
    if (e.target.value == "") {
      setArrData(arrData);
      return;
    }
    const searchResult = arrData.filter((item) =>
      item.name.toLowerCase().startsWith(e.target.value.toLowerCase())
    );
    setArrData(searchResult);
  };
  return (
    <>
      <div className="cont">
        <div style={{ backgroundColor: "red" }}>
          <input type="text" placeholder="Search" onChange={handlerFilter} />
          {/* <button onChange={handlerFilter}> clickMe</button> */}
        </div>
        <div className="abc-two">
          <table border="1">
            <tr>
              <td>Name</td>
              <td>Place</td>
              <td>Phone</td>
            </tr>
            {arrData.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.place}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </table>
        </div>
        <div className="related">
          <div className="container">
            hjhjhjh
          </div>
        </div>
        <div className="related">
          <div className="container">
            hjhjhjh
          </div>
        </div>
        <div className="related">
          <div className="container">
            hjhjhjh
          </div>
        </div>
      </div>
      <div className="abc-footer">
        <h3>
          &copy;Copyright Agency and contributors 2023. ABN 53 001 228 799
        </h3>
      </div>
    </>
  );
}

export default App;
