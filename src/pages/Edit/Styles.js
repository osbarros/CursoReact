import styled from "styled-components";

const firtsBreakPoint = "700px";
const secondBreakPoint = "500px";

export const Container = styled.div`
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

  gap: 56px;

  width: 80%;
  max-width: 634px;
  margin: 0 auto 70px auto;

  padding: 50px 60px;

  background: #313131;

  border-radius: 10px;

  @media (max-width: ${secondBreakPoint}) {
    padding: 50px 40px;
  }
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  max-width: 634px;

  @media (max-width: ${secondBreakPoint}) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const Button = styled.button`
  width: 100%;
  max-width: 200px;

  padding: 10px 15px;

  font-weight: 600;
  font-size: 32px;

  background: ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  border: none;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${firtsBreakPoint}) {
    font-size: 26px;
  }

  @media (max-width: ${secondBreakPoint}) {
    font-size: 20px;
  }
`;
