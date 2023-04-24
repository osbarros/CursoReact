import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 15px;

  width: 100%;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 550px;

  padding: 11px 18px;
  border-radius: 25px;

  font-size: 14px;
`;

export const ErrorMessage = styled.p`
  color: red;
`;
