import React, { useState } from "react";

const useInput = initialState => {
  const [value, setValue] = useState(initialState);

  const handleChange = e => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange
  };
};

export default useInput;
