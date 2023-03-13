import styled from "styled-components";

const firtsBreakPoint = "500px";

export const Container = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.marginBottom};

  font-size: 48px;

  @media (max-width: ${firtsBreakPoint}) {
    font-size: 28px;

    margin-bottom: ${(props) => props.repsonsiveMarginBottom};
  }
`;
