import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 263px;
  height: 40px;
  border: 1px solid #1a73e8;
  border-radius: 4px;
  padding: 0px 6px;
`;

const SelectSource = () => {
  const [inputText, setInputText] = useState("");

  const onInputChange = (text) => {
    setInputText(text);
  };

  console.log(inputText);

  return (
    <div style={{ display: "flex" }}>
      <Input
        placeholder="Select Source"
        name="select-source"
        onChange={(e) => onInputChange(e.target.value)}
      />
    </div>
  );
};

export default SelectSource;
