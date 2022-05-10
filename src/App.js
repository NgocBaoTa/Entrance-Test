import { useCallback, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [result, setResult] = useState("");
  const [check, setCheck] = useState("");

  const fetchApi = useCallback(async () => {
    try {
      const respone = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      console.log(respone);
      setData(respone.data.result);
    } catch (error) {
      console.log(error);
    }
  }, [input]);

  return (
    <div className="App">
      <form>
        <input
          style={{ width: 400, height: 30 }}
          placeholder="Enter a link..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>

        <button
          onClick={(e) => {
            e.preventDefault();
            if (check === "shrtco.de") {
              setResult(data.short_link);
            } else if (check === "9qr.de") {
              setResult(data.short_link2);
            } else if (check === "shiny.link") {
              setResult(data.short_link3);
            }
            setInput("")
          }}
        >
          Submit
        </button>

        <br></br>

        <button
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck("shrtco.de");
          }}
        >
          shrtco.de
        </button>

        <button
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck("9qr.de");
          }}
        >
          9qr.de
        </button>

        <button
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck("shiny.link");
          }}
        >
          shiny.link
        </button>
      </form>

      <hr />
      
      <h3>{result}</h3>
    </div>
  );
}

export default App;
