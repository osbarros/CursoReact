import { useEffect, useState } from "react";
import {
  Loading,
  Container,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
  UserInfo,
  HourDisplay,
  TableContainer,
  ButtonsContainer,
} from "./Styles";
import api from "../../services/api";
import { Button } from "../../components";
import { getUser } from "../../services/auth";

export default function Home() {
  const user = getUser();
  const [isLoading, setIsLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Browser timezone

  const getSessions = async () => {
    try {
      const res = await api.get(`/sessions/${encodeURIComponent(timezone)}`);
      setSessions(res.data);
    } catch (error) {
      console.error(error);
      alert("Erro ao consultar as sessões ativas. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };
  const startSession = async () => {
    try {
      setIsLoading(true);
      await api.post("/sessions", { userId: user?._id });
      await getSessions();

      alert("Sessão iniciada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Falha ao inicializar a sessão. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };
  const endSession = async () => {
    try {
      setIsLoading(true);
      await api.delete("/sessions", { data: { userId: user?._id } });
      await getSessions();

      alert("Bom descanso!");
    } catch (error) {
      console.error(error);
      alert("Falha ao finalizar a sessão. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSessions();

    const minuteInMilliseconds = 60000;
    const interval = setInterval(getSessions, minuteInMilliseconds);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) return <Loading>Carregando...</Loading>;
  return (
    <Container>
      <TableContainer>
        {sessions?.length ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeader>MEMBRO</TableHeader>
                <TableHeader>CHEGADA</TableHeader>
                <TableHeader>TEMPO</TableHeader>
              </TableRow>
            </TableHead>
            <TableBody>
              {sessions?.map((session) => (
                <SessionData key={session._id} {...session} />
              ))}
            </TableBody>
          </Table>
        ) : (
          <h1>Não há sessões ativas no momento</h1>
        )}
      </TableContainer>
      <ButtonsContainer>
        <Button
          text="Finalizar Sessão"
          type="button"
          onClick={() => endSession()}
        />
        <Button
          text="Iniciar Sessão"
          type="button"
          onClick={() => startSession()}
        />
      </ButtonsContainer>
    </Container>
  );
}

const SessionData = ({ name, status, role, startedAt, duration }) => (
  <TableRow>
    <TableData>
      <UserInfo>
        <p>
          {name}
          <span>"{status}"</span>
        </p>
        <p>{role}</p>
      </UserInfo>
    </TableData>
    <TableData>
      <HourDisplay>{startedAt}</HourDisplay>
    </TableData>
    <TableData>
      <HourDisplay>{duration}</HourDisplay>
    </TableData>
  </TableRow>
);
