import styled from "styled-components";

const firstBreakPoint = "500px";

export const Container = styled.h1`
  color: ${(props) => props.theme.color.primary};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: 4.8rem;

  @media (max-width: ${firstBreakPoint}) {
    font-size: 2.8rem;

    margin-bottom: ${(props) => props.repsonsiveMarginBottom};
  }
`;
