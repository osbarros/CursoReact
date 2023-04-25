import styled from "styled-components";

const firstBreakPoint = "500px";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  padding: 2rem 7rem;

  width: 100%;
  height: 100%;
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 3.2rem;

  width: 100%;

  margin-bottom: 3rem;
`;
export const LoginLink = styled.small`
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;

  margin: 0 0 3.6rem 0;

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
