import { render } from "@testing-library/react";
import React from "react";
import { RijtjeDisplay } from "../elements/rijtjeDisplay";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gevraagdeRijtje: "praesensA",
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => { this.setState({ gevraagdeRijtje: "praesensA" }); }}>Praesens A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "imperfectumA" }); }}>Imperfecturm A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "perfecturmA" }); }}>Perfectum A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "plusquamperfectumA" }); }}>Plusquamperfectum A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumAaofe" }); }}>Futurum (-A of -E stam) A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumAiofmk" }); }}>Futurum (-I of MK stam) A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumexactum" }); }}>Futurum Exactum A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "praesensP" }); }}>Praesens P</button>
        <RijtjeDisplay type={this.state.gevraagdeRijtje}></RijtjeDisplay>
      </div>
    );
  }
}

export default App;
