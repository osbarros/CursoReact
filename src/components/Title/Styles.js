import styled from "styled-components";

const firstBreakPoint = "500px";

export const Container = styled.h1`
  color: ${(props) => props.theme.color.primary};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: 48px;

  @media (max-width: ${firstBreakPoint}) {
    font-size: 28px;

    margin-bottom: ${(props) => props.repsonsiveMarginBottom};
  }
`;
