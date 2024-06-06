import styled from "styled-components";

const Button = styled.button`
  border-radius: 4px;
  padding: 0 1rem;
  color: white;
  height: 4rem;
  background: var(--blue-600);
  &:hover {
    background: var(--blue-500);
  }
  &:active {
    background: var(--blue-700);
  }
`;

export default Button;
