import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 1.5rem;

  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  max-width: 55rem;

  padding: 1.1rem 1.8rem;
  border-radius: 2.5rem;

  font-size: 1.4rem;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
