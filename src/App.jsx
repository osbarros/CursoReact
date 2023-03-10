import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Sessao from './Components/Sessao'
import GlobalStyle from "./GlobalStyle";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Sessao />
      <GlobalStyle/>
    </div>
  )
}

export default App
