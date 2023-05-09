import styled from "styled-components";

const firstBreakPoint = "500px";

export const Loading = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  overflow: auto;

  width: 100%;
  height: 100%;
`;
export const TableContainer = styled.div`
  width: 90%;
  max-width: 100rem;

  overflow: auto;

  h1 {
    text-align: center;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 1rem;
    height: 1rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 0.5rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const Table = styled.table`
  width: 100%;

  border-spacing: 0;
  border-collapse: separate;
  border-radius: 2rem;
  border: 0.1rem solid black;

  overflow: hidden;

  text-align: left;
`;
export const TableHead = styled.thead`
  height: 6rem;

  padding: 0 2.5rem;
  color: ${(props) => props.theme.color.background};
  background: ${(props) => props.theme.color.primary};

  font-weight: 500;
`;
export const TableHeader = styled.th`
  padding: 1.2em 3em;
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
  padding: 1.2em 3em;
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
  border: 0.1rem solid ${(props) => props.theme.color.primary};
  border-radius: 1rem;

  padding: 0.2em 1em;

  text-align: center;

  color: ${(props) => props.theme.color.primary};
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  margin-top: 3.5rem;

  button {
    font-size: 1.6rem;
  }

  width: 100%;
  max-width: 63.4rem;

  @media (max-width: ${firstBreakPoint}) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;
