import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import MetricsTable from "./MetricsTable/MetricsTable";
import { data1, data2 } from "./data";

function App() {
  const [data, setData] = useState(data1);

  return (
    <div className="App">
      <MetricsTable data={data} />
      <button
        onClick={() => {
          setData((prevState) => {
            if (prevState === data1) {
              return data2;
            } else {
              return data1;
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
