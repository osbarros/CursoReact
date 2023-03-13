import styled from "styled-components";

export const ContainerSessao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.81);
  padding: 30px 3% 30px 3%;
  width: 100%;
  max-height: 85px;
`;

export const Chegada = styled.div`
  display: flex;
  border-style: solid;
  border-color: #ffe712;
  border-width: 1px;
  border-radius: 10px;
  padding: 6px 15px 6px 15px;
  align-items: center;
`;

export const TextoHorario = styled.text`
  color: #ffe712;
  font-size: 1 rem;
`;
export const ContainerInfoUsuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
export const ContainerNomeStatus = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 5%;
`;

export const TextoNome = styled.p`
  color: #f5f5f5;
  font-size: 1 em;
  line-height: 19px;
`;

export const TextoStatus = styled.p`
  color: #d2d2d2;
  font-size: 1 em;
  line-height: 19px;
  font-weight: 300;
`;
export const TextoCargo = styled.p`
  color: #ffe712;
  font-size: 1 rem;
`;
