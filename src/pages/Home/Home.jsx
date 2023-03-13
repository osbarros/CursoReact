import { Sessao } from "../../components";

export default function Home() {
  return (
    <table>
      <thead>
        <th>Membro</th>
        <th>Chegada</th>
        <th>Tempo</th>
      </thead>
      <tbody>
        <tr>
          <td>
            <div>
              <p>
                João - <span>"Bom dia"</span>
              </p>
            </div>
            <p>Dev</p>
          </td>
          <td>22:34</td>
          <td>01:55</td>
        </tr>
        <tr>
          <td>
            <div>
              <p>
                Mariana - <span>"Bom dia"</span>
              </p>
            </div>
            <p>Gerente</p>
          </td>
          <td>19:34</td>
          <td>21:55</td>
        </tr>
      </tbody>
    </table>
  );
}
