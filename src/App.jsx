// import { Routes, Route } from "react-router-dom";
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
// import { Layout } from "./layout/main-layout";
// import { Error } from "./pages/Error/error";
import { Chegirma } from "./pages/chegirma/chegirma";

function App() {
  return (
    <>
    <Header/>
      <div className="chegirmalar">
        <Chegirma />
        <Chegirma />
        <Chegirma />
        <Chegirma />
      </div>
    <Footer/>
    </>
  );
}

export default App;
