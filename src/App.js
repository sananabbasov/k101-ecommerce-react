import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import MyRouter from "./Routers/MyRouter";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MyRouter />
    </BrowserRouter>
  );
}

export default App;
