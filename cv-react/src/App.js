import "./App";
import header from "./page/header";
import footer from "./page/footer";
import { Route, Routes } from "react-router-dom";
import Routt from "./rout";

function App() {
  return (
    <div>
      <header />
      <Routt></Routt>
      <footer />
    </div>
  );
}

export default App;
