import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import SearchBar from "./SearchBar";
import Output from "./Output";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Axios from "axios";

function App() {
  const [stocks, setStocks] = useState([]);
  const [tweets, setTweets] = useState([]);

  const setInput = (x) => {
    console.log(x);
    //check if x else tweet is []
    if (x) {
      console.log("setInput -> x.length > 0", x.length > 0);
      if (x.length > 0) {
        x.forEach((y, z) => {
          if (!stocks.includes(y)) {
            addStock(y);
          }
          if (z + 1 === x.length) {
            lookupStock(y);
          }
        });
      } else {
        setTweets([]);
      }
    } else {
      console.log("burp");
    }
  };
  const addStock = (x) => {
    if (x) {
      if (!stocks.includes(x)) {
        setStocks((prev) => {
          return [...prev, x];
        });
      }
    }
  };
  const deleteStock = (x) => {
    const stockArray = stocks;
    console.log(stockArray);
    console.log(x);
    console.log(
      stockArray.filter((item, index) => {
        return item !== x;
      })
    );
    setInput(
      stockArray.filter((item, index) => {
        return item !== x;
      })
    );
    setStocks((prev) => {
      return prev.filter((item, index) => {
        return item !== x;
      });
    });
  };

  const lookupStock = (x) => {
    if (x) {
      Axios.get(`/api/${x}`)
        .then((res) => {
          setTweets(res.data.messages);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setTweets([]);
    }
  };
  return (
    <div className="App">
      <Row className="justify-content-md-center myContainerFix">
        <Col lg={8} md={10} sm={12}>
          <SearchBar input={setInput} />
          <Output
            input={setInput}
            remove={deleteStock}
            tweets={tweets}
            stocks={stocks}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
