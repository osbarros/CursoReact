import styled from "styled-components";

const firstBreakPoint = "500px";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: auto;

  width: 100%;
  height: 100%;
`;
export const CarouselContainer = styled.div``;
export const TableContainer = styled.div`
  width: 90%;
  max-width: 1000px;

  overflow: auto;
`;
export const Table = styled.table`
  width: 100%;

  border-spacing: 0;
  border-collapse: separate;
  border-radius: 20px;
  border: 1px solid black;

  overflow: hidden;

  text-align: left;
`;
export const TableHead = styled.thead`
  height: 60px;

  color: ${(props) => props.theme.color.background};
  background: ${(props) => props.theme.color.primary};

  font-weight: 500;

  th:first-child {
    padding-left: 5.5em;

    @media (max-width: ${firstBreakPoint}) {
      padding-left: 2em;
    }
  }
`;
export const TableHeader = styled.th`
  padding: 1.2em 2em;
`;
export const TableBody = styled.tbody`
  width: 100%;

  background: #313131;
`;
export const TableRow = styled.tr`
  width: 100%;
`;
export const TableData = styled.td`
  width: 100%;
  padding: 1.2em 2em;
`;
export const UserInfo = styled.div`
  p:first-child {
    margin-bottom: 0.4em;
  }

  p:last-child {
    color: ${(props) => props.theme.color.primary};

    @media (max-width: ${firstBreakPoint}) {
      display: none;
    }
  }

  span {
    margin-left: 0.8em;
    color: gray;

    @media (max-width: ${firstBreakPoint}) {
      display: none;
    }
  }

  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;
export const HourDisplay = styled.p`
  border: 1px solid ${(props) => props.theme.color.primary};
  border-radius: 10px;

  width: 4.5em;
  padding: 0.2em 1em;

  text-align: center;

  color: ${(props) => props.theme.color.primary};
`;
