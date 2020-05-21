import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";

function Output(props) {
  const handleRemove = async (x) => {
    const val = x.target.value;
    console.log(val);
    props.remove(val);
  };

  const handleClick = (x) => {
    const val = x.target.value;
    console.log("handleClick -> const val = x.target.value;", val);
    props.input([val]);
  };
  return (
    <Row className="stockRow">
      {props.stocks &&
        props.stocks.length > 0 &&
        props.stocks.map((x, y) => {
          return (
            <div key={y} className="stockContainer">
              <ButtonGroup>
                <Button variant="outline-light" value={x} onClick={handleClick}>
                  {x}
                </Button>
                <Button
                  variant="outline-light"
                  value={x}
                  onClick={handleRemove}
                >
                  x
                </Button>
              </ButtonGroup>
            </div>
          );
        })}
    </Row>
  );
}

export default Output;
