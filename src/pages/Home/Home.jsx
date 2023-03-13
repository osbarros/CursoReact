import { Carousel, Sessao } from "../../components";
import {
  Container,
  CarouselContainer,
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
  UserInfo,
  HourDisplay,
} from "./Styles";

export default function Home() {
  return (
    <Container>
      <Sessao />
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <Table>
        <TableHead>
          <TableHeader>MEMBRO</TableHeader>
          <TableHeader>CHEGADA</TableHeader>
          <TableHeader>TEMPO</TableHeader>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData>
              <UserInfo>
                <p>
                  João<span>"Bom dia"</span>
                </p>
                <p>Dev</p>
              </UserInfo>
            </TableData>
            <TableData>
              <HourDisplay>19:34</HourDisplay>
            </TableData>
            <TableData>
              <HourDisplay>19:34</HourDisplay>
            </TableData>
          </TableRow>
          <TableRow>
            <TableData>
              <UserInfo>
                <p>
                  Mariana<span>"Bom dia"</span>
                </p>
                <p>Gerente</p>
              </UserInfo>
            </TableData>
            <TableData>
              <HourDisplay>19:34</HourDisplay>
            </TableData>
            <TableData>
              <HourDisplay>19:34</HourDisplay>
            </TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}
