import styled from "styled-components";

const firtsBreakPoint = "500px";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 132px;
  width: 100%;

  padding: 22px 48px;

  background-color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${firtsBreakPoint}) {
    height: 90px;

    padding: 11px 0px 11px 23px;
  }
`;

export const Logo = styled.img`
  width: 232px;

  @media (max-width: ${firtsBreakPoint}) {
    width: 130px;
  }
`;

export const IconButtonsContainer = styled.div``;

export const IconButton = styled.button``;
