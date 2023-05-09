import styled from "styled-components";

const firstBreakPoint = "50rem";
const secondBreakPoint = "30rem";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 9rem;
  width: 100%;

  padding: 2.2rem 4.8rem;

  background-color: ${(props) => props.theme.color.primary};

  @media (max-width: ${firstBreakPoint}) {
    padding: 1.1rem 2.3rem;
  }

  @media (max-width: ${secondBreakPoint}) {
    height: 5.5rem;
  }
`;

export const Logo = styled.img`
  width: 18rem;

  @media (max-width: ${firstBreakPoint}) {
    width: 13rem;
  }

  @media (max-width: ${secondBreakPoint}) {
    width: 10rem;
  }
`;

export const IconButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 12rem;

  padding: 0 1rem;

  border: 0.2rem solid ${(props) => props.theme.color.background};
  border-radius: 1rem;

  @media (max-width: ${firstBreakPoint}) {
    max-width: 10rem;
  }

  @media (max-width: ${secondBreakPoint}) {
    max-width: 7rem;
    padding: 0 0.6rem;
  }
`;

export const IconButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.color.background};

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 4rem;
    height: 4rem;

    @media (max-width: ${firstBreakPoint}) {
      width: 3.5rem;
      height: 3.5rem;
    }

    @media (max-width: ${secondBreakPoint}) {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Divider = styled.div`
  height: 5rem;
  border-right: 0.2rem solid ${(props) => props.theme.color.background};

  @media (max-width: ${firstBreakPoint}) {
    height: 4.5rem;
  }

  @media (max-width: ${secondBreakPoint}) {
    height: 2.6rem;
  }
`;
