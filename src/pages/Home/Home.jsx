import { useEffect, useState } from "react";
import {
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
import { formatSession, formatSessions } from "../../utils/formatSessions";
import { Button } from "../../components";
import { getUser } from "../../services/auth";

export default function Home() {
  const user = getUser();
  const [isLoading, setIsLoading] = useState(false);
  const [sessions, setSessions] = useState([]);

  const startSession = async () => {
    try {
      setIsLoading(true);
      const res = await api.post("/sessions", { userId: user?._id });
      const newSession = formatSession({ session: res?.data });

      setSessions((prevSessions) => [newSession, ...prevSessions]);
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
      const res = await api.post(`/sessions/user/${user?._id}`);
      setSessions((prevSessions) =>
        prevSessions?.filter(({ _id }) => _id !== res?.data?._id)
      );
      alert("Sessão finalizada com sucesso!");
    } catch (error) {
      console.error(error);
      alert("Falha ao finalizar a sessão. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };
  const getSessions = async () => {
    try {
      setIsLoading(true);
      const res = await api.get("/sessions");
      const formatedSessions = formatSessions({ sessions: res?.data });

      setSessions(formatedSessions);
    } catch (error) {
      console.error(error);
      alert("Erro ao consultar as sessões ativas. Tente novamente mais tarde");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSessions();
  }, []);
  useEffect(() => {
    const minuteInMilliseconds = 60000;
    const interval = setInterval(() => {
      console.log(sessions);
      if (!sessions?.length) return;

      const updatedSessions = formatSessions({
        sessions,
        formatStartedAt: false,
      });

      setSessions(updatedSessions);
    }, minuteInMilliseconds);

    return () => clearInterval(interval);
  }, [sessions.length]);

  if (isLoading) return <h1>Carregando...</h1>;
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
                <SessionData key={session?._id} {...session} />
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

const SessionData = ({ user, formatedStartedAt, duration }) => (
  <TableRow>
    <TableData>
      <UserInfo>
        <p>
          {user?.name}
          <span>"{user?.status}"</span>
        </p>
        <p>{user?.role}</p>
      </UserInfo>
    </TableData>
    <TableData>
      <HourDisplay>{formatedStartedAt}</HourDisplay>
    </TableData>
    <TableData>
      <HourDisplay>{duration}</HourDisplay>
    </TableData>
  </TableRow>
);
