import React, { useState } from "react";
import styled from "styled-components";

const CustomButton = styled.button`
  color: white;
  background: black;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 40px;
  margin: 0 1px;
  &:disabled {
    background: gray;
    cursor: default;
  }
`;

const PaginateButton = ({ value, onBtnClick, action, isDisabled }) => {
  return (
    <CustomButton onClick={() => onBtnClick(action)} disabled={isDisabled}>
      {value}
    </CustomButton>
  );
};

export default PaginateButton;
