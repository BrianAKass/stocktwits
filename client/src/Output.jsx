import React from "react";
import Stocks from "./Stocks";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tweets from "./Tweets";
function Output(props) {
  return (
    // formatting things so they are kosher on mobile (at the time of writing this comment Text overflow happens from long urls. I could probably shorten them but I don't have time for that.)

    <div>
      <br />
      <Stocks input={props.input} remove={props.remove} stocks={props.stocks} />
      <Tweets tweet={props.tweets} />
    </div>
  );
}

export default Output;
