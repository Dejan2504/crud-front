import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = axios("http://localhost:3005/");

      const data = await response;

      console.log(data.data);
      setCount(data.data);
    };

    fetchData();
  }, []);

  console.log("count", count && count);
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>
          tokens in fs{" "}
          {count ? (
            count.map((c, i) => {
              console.log("iz map", c, i);
              return (
                <div key={`${i}`}>
                  <code>{c}</code>
                </div>
              );
            })
          ) : (
            <div>empty</div>
          )}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
