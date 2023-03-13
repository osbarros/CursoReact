import styled from "styled-components";

const firtsBreakPoint = "500px";

export const Container = styled.div`
  display: flex;

  gap: 45px;

  width: 100%;

  @media (max-width: ${firtsBreakPoint}) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const Label = styled.label`
  min-width: 80px;

  text-align: right;

  font-weight: 600;
  font-size: 24px;

  color: ${(props) => props.theme.colors.primary};

  @media (max-width: ${firtsBreakPoint}) {
    font-size: 16px;
    text-align: left;
  }
`;
export const Input = styled.input`
  width: 100%;
  max-width: 400px;

  font-size: 14px;

  padding: 11px 18px;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};
`;

export const TextArea = styled.textarea`
  width: 100%;
  max-width: 400px;

  font-size: 14px;

  padding: 11px 18px;

  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.colors.primary};

  resize: none;
`;
export const ErrorMessage = styled.p``;
