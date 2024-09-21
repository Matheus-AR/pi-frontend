import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const index = 3;
  return (
    <>
      {index == 1 && <Login />}
      {index == 2 && <Cadastro />}
      {index == 3 && <Home />}
    </>
  );
}

export default App;
