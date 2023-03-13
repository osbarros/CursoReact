import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100%;
`;
export const CarouselContainer = styled.div``;
export const Table = styled.table`
  width: 100%;
  max-width: 1000px;

  border-spacing: 0;
  border-collapse: separate;
  border-radius: 20px;
  border: 1px solid black;

  overflow: hidden;

  text-align: left;
`;
export const TableHead = styled.thead`
  height: 60px;

  color: ${(props) => props.theme.colors.background};
  background: ${(props) => props.theme.colors.primary};

  font-weight: 500;
  /* font-size: 20px; */

  th:first-child {
    padding-left: 5.5em;
  }
`;
export const TableHeader = styled.th`
  padding: 1.2em 2em;
`;
export const TableBody = styled.tbody`
  background: #313131;
`;
export const TableRow = styled.tr`
  width: 100%;
`;
export const TableData = styled.td`
  padding: 1.2em 2em;
`;
export const UserInfo = styled.div`
  p:first-child {
    margin-bottom: 0.4em;
  }

  p:last-child {
    color: ${(props) => props.theme.colors.primary};
  }

  span {
    margin-left: 0.8em;
    color: gray;
  }
`;
export const HourDisplay = styled.p`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 10px;

  width: 4.5em;

  text-align: center;

  padding: 0.2em 1em;

  color: ${(props) => props.theme.colors.primary};
`;
