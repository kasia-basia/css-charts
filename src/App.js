import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MetricsTable from "./MetricsTable/MetricsTable";
import { data1, data2 } from "./data";

function App() {
  const [data, setData] = useState(data1);
  const [target, setTarget] = useState(80);

  return (
    <div className="App">
      <MetricsTable data={data} target={target} />
      <button
        onClick={() => {
          setData((prevState) => {
            if (prevState === data1) {
              return data2;
            } else {
              return data1;
            }
          });
          setTarget((prevState) => {
            if (prevState === 80) {
              return 67;
            } else {
              return 80;
            }
          });
        }}
      >
        Shuffle data!
      </button>
    </div>
  );
}

export default App;
