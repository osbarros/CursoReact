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
} from "./Styles";

export default function Home() {
  return (
    <Container>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>MEMBRO</TableHeader>
              <TableHeader>CHEGADA</TableHeader>
              <TableHeader>TEMPO</TableHeader>
            </TableRow>
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
                    Mariana<span>"Bom diaaaaaaaaaaaaaa"</span>
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
      </TableContainer>
    </Container>
  );
}
