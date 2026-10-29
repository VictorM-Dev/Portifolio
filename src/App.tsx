import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return <>
   <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
   <Footer></Footer>
  </>;
}

export default App;