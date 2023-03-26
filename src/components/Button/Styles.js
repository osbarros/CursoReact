import styled from "styled-components";

const firstBreakPoint = "700px";
const secondBreakPoint = "500px";

export const Container = styled.button`
  width: 100%;
  max-width: 200px;

  padding: 10px 15px;

  font-weight: 600;
  font-size: 32px;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${firstBreakPoint}) {
    font-size: 26px;
  }

  @media (max-width: ${secondBreakPoint}) {
    font-size: 20px;
  }
`;
