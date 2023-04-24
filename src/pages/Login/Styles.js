import styled from "styled-components";

const firstBreakPoint = "500px";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  padding: 0 70px;

  width: 100%;
  height: 100%;

  @media (max-width: ${firstBreakPoint}) {
    padding: 0 50px;
  }
`;
export const Inputs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 45px;

  width: 100%;
`;
export const RegisterLink = styled.small`
  text-decoration: none;
  text-align: center;
  font-size: 14px;

  margin: 36px 0;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.primary};

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: ${firstBreakPoint}) {
    margin-top: 19px;

    font-size: 12px;
  }
`;
