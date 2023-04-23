import styled from "styled-components";

const firstBreakPoint = "500px";
const secondBreakPoint = "300px";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 132px;
  width: 100%;

  padding: 22px 48px;

  background-color: ${(props) => props.theme.color.primary};

  @media (max-width: ${firstBreakPoint}) {
    height: 90px;

    padding: 11px 23px;
  }
`;

export const Logo = styled.img`
  width: 232px;

  @media (max-width: ${firstBreakPoint}) {
    width: 130px;
  }

  @media (max-width: ${secondBreakPoint}) {
    width: 100px;
  }
`;

export const IconButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 150px;

  padding: 0 10px;

  border: 2px solid ${(props) => props.theme.color.background};
  border-radius: 10px;

  @media (max-width: ${firstBreakPoint}) {
    max-width: 100px;
  }

  @media (max-width: ${secondBreakPoint}) {
    max-width: 70px;
    padding: 0 6px;
  }
`;

export const IconButton = styled.button`
  all: unset;

  color: ${(props) => props.theme.color.background};

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 50px;
    height: 50px;

    @media (max-width: ${firstBreakPoint}) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: ${secondBreakPoint}) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Divider = styled.div`
  height: 60px;
  border-right: 2px solid ${(props) => props.theme.color.background};

  @media (max-width: ${firstBreakPoint}) {
    height: 45px;
  }

  @media (max-width: ${secondBreakPoint}) {
    height: 26px;
  }
`;
