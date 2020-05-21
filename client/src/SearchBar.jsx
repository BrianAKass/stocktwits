import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const SearchBar = (props) => {
  const [value, setValue] = useState("");

  const handleChange = (x) => {
    setValue(x.target.value);
  };

  const handleClick = (x) => {
    if (x.target.value) {
      console.log(x.target.value.replace(/[\$\,]/g, "").split(" "));
      props.input(x.target.value.replace(/[\$\,]/g, "").split(" "));
      setValue("");
    } else {
      props.input([]);
    }
  };

  const handleKeyPress = (x) => {
    if (x.key === "Enter") {
      handleClick(x);
    }
  };

  return (
    <div>
      <br />
      <img
        src="https://cdn.shopify.com/s/files/1/0780/8397/t/1/assets/logo.png?v=6283549136699835110"
        alt="StockTwits"
        className="logo"
      />
      <br />
      <br />
      <InputGroup className="mb-3 searchBar">
        <FormControl
          placeholder="Search StockTwits"
          aria-label="Search StockTwits"
          aria-describedby="basic-addon2"
          value={value}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <InputGroup.Append>
          <Button
            variant="outline-secondary"
            value={value}
            onClick={handleClick}
          >
            {/* MADE THE VECTOR MYSELF! :D */}
            <svg width={7.602} height={16} viewBox="0 0 2.011 4.233" {...props}>
              <path d="M1.319 2.106l-.993-.513L0 1.426v-.383L.991.524 1.997 0c.009-.003.013.139.01.334l-.004.34-.58.276c-.32.151-.576.28-.57.285.007.005.27.13.585.279l.573.269v.335c0 .185-.005.335-.012.335s-.313-.157-.68-.347z" />
              <path
                d="M.692 2.127l.994.513.325.167v.383l-.99.519c-.546.285-.999.521-1.007.524-.008.003-.013-.138-.01-.334l.004-.34.58-.275c.32-.152.576-.28.57-.285-.007-.005-.27-.131-.585-.28L0 2.452v-.336c0-.185.006-.335.012-.334.007 0 .313.156.68.346z"
                fill="#1e8eff"
              />
            </svg>
            <strong>earch</strong>
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
};

export default SearchBar;
