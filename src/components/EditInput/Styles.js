import styled from "styled-components";

const firstBreakPoint = "500px";

export const Container = styled.div`
  display: flex;

  gap: 4.5rem;

  width: 100%;

  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    gap: 1rem;
  }
`;
export const Label = styled.label`
  min-width: 8rem;

  text-align: right;

  font-weight: 600;
  font-size: 2.4rem;

  color: ${(props) => props.theme.color.primary};

  @media (max-width: ${firstBreakPoint}) {
    font-size: 1.6rem;
    text-align: left;
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 40rem;

  font-size: 1.4rem;

  padding: 1.1rem 1.8rem;

  border-radius: 1rem;
  border: 0.2rem solid ${(props) => props.theme.color.primary};
`;

export const ErrorMessage = styled.p`
  color: red;
`;
