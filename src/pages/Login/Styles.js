import styled from "styled-components";

const firstBreakPoint = "500px";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 0 7rem;

  width: 100%;
  height: 100%;

  @media (max-width: ${firstBreakPoint}) {
    padding: 0 5rem;
  }
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 4.5rem;

  width: 100%;
`;
export const RegisterLink = styled.small`
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;

  margin: 3.6rem 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: ${firstBreakPoint}) {
    margin-top: 1.9rem;

    font-size: 1.2rem;
  }
`;
