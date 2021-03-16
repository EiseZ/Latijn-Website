import React from "react";
import { RijtjeDisplay } from "../elements/rijtjeDisplay";

export class App extends React.Component {
  let gevraagdeRijtje = "praesensP";
return (
  <div className="App">
    <button onClick={() => gevraagdeRijtje = "praesensA"}>Praesens A</button>
    <button onClick={() => gevraagdeRijtje = "praesensP"}>Praesens P</button>
    <RijtjeDisplay type={gevraagdeRijtje}></RijtjeDisplay>
  </div>
);
}

export default App;
