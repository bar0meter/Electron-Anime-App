import React, { useState } from "react";
import styled from "styled-components";

const DropDown = styled.div`
  position: relative;
  background: black;
  width: 100px;
  color: white;
  cursor: pointer;
  z-index: 100;
  margin-right: 5px;
  border-radius: 5px;
  text-align: center;
`;

const OptionSelected = styled.div`
  padding: 10px 15px;
  border-radius: 5px;
  &:hover {
    background: rgb(66, 66, 66);
  }
`;

const AllOptions = styled.div`
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  border: 1px solid gray;
  border-radius: 5px;
  box-sizing: border-box;
  overflow: hidden;
`;

const Option = styled.div`
  padding: 10px 15px;
  background: white;
  color: black;
  box-sizing: border-box;
  &:hover {
    background: rgb(226, 226, 226);
  }
`;

const CustomDD = ({ options, onOptionChange }) => {
  const [show, setShow] = useState(false);
  const [optionSelected, setOption] = useState(0);
  const toggleDropDown = () => {
    setShow(!show);
  };

  const changeSelected = option => {
    setOption(option);
    toggleDropDown();
    onOptionChange(options[option]);
  };

  const handleBlur = e => {
    console.log(e);
    console.log("hello");
  };

  return (
    <DropDown>
      <OptionSelected
        onClick={toggleDropDown}
        onFocus={handleBlur}
        onBlur={handleBlur}
      >
        {options[optionSelected]}
      </OptionSelected>
      {show && (
        <AllOptions>
          {options.map((option, index) => (
            <Option onClick={() => changeSelected(index)} key={index}>
              {option}
            </Option>
          ))}
        </AllOptions>
      )}
    </DropDown>
  );
};

export default CustomDD;
