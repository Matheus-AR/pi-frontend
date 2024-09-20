import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

function App() {
    const index = 2;
  return (
    <>
      { index == 1 && <Login /> }
      { index == 2 && <Cadastro /> }
    </>
  )
}

export default App;