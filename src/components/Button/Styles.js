import styled from "styled-components";

const firstBreakPoint = "700px";
const secondBreakPoint = "500px";

export const Container = styled.button`
  width: 100%;
  max-width: 20rem;

  padding: 1rem 1.5rem;

  font-weight: 600;
  font-size: 3.2rem;

  background: ${(props) => props.theme.color.primary};
  border-radius: 2rem;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${firstBreakPoint}) {
    font-size: 2.6rem;
  }

  @media (max-width: ${secondBreakPoint}) {
    font-size: 2rem;
  }
`;
