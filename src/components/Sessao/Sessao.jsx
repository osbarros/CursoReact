import {
  Chegada,
  ContainerInfoUsuario,
  ContainerSessao,
  ContainerNomeStatus,
  TextoCargo,
  TextoHorario,
  TextoNome,
  TextoStatus,
} from "./Styles";
import React from "react";

export default function Sessao() {
  return (
    <ContainerSessao>
      <ContainerInfoUsuario>
        <ContainerNomeStatus>
          <div>
            <TextoNome>Oswaldo Barros</TextoNome>
          </div>
          <div>
            <TextoStatus>"Totalmente operacional"</TextoStatus>
          </div>
        </ContainerNomeStatus>
        <div>
          <TextoCargo>Dev Líder</TextoCargo>
        </div>
      </ContainerInfoUsuario>
      <Chegada>
        <TextoHorario>21:34</TextoHorario>
      </Chegada>
      <Chegada>
        <TextoHorario>01:34</TextoHorario>
      </Chegada>
    </ContainerSessao>
  );
}
