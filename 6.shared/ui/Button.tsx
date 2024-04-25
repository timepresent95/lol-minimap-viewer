import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  padding: 0 1rem;
  color: white;
  height: 4rem;
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

export default Button;
