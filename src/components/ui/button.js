import styled from "styled-components";

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  color: #fff;
  background: #1a73e8;
  border-radius: 4px;
  width: 136px;
  height: 32px;
  padding: 6px 8px;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
`;

const Button = ({ title, handler }) => {
  return <StyledButton onClick={() => handler()}>{title}</StyledButton>;
};

export default Button;
