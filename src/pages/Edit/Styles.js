import styled from "styled-components";

const firstBreakPoint = "700px";
const secondBreakPoint = "500px";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
`;
export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 5.6rem;

  width: 80%;
  max-width: 63.4rem;
  margin: 0 auto 7rem auto;

  padding: 5rem 6rem;

  background: #313131;

  border-radius: 1rem;

  @media (max-width: ${secondBreakPoint}) {
    padding: 50px 4rem;
  }
`;
export const Button = styled.button`
  width: 100%;
  max-width: 20rem;

  padding: 10px 1.5rem;

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
