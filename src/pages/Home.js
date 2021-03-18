import React from "react";
import { RijtjeDisplay } from "../elements/rijtjeDisplay";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gevraagdeRijtje: "praesensA",
    };
  }
  render() {
    return (
      <div className="App">
        <h3>WW</h3>
        <h4>Actief</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "praesensA" }); }}>Praesens A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "imperfectumA" }); }}>Imperfecturm A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "perfecturmA" }); }}>Perfectum A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "plusquamperfectumA" }); }}>Plusquamperfectum A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumAaofe" }); }}>Futurum (-A of -E stam) A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumAiofmk" }); }}>Futurum (-I of MK stam) A</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumexactumA" }); }}>Futurum Exactum A</button>

        <h4>Passief</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "praesensP" }); }}>Praesens P</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "imperfectumP" }); }}>Imperfectum P</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumPa" }); }}>Futurum (-A stam) P</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "futurumPeofiofmk" }); }}>Futurum (-E of -I of MK stam) P</button>

        <h4>Participium</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "participiumMV" }); }}>Participium M/V</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "participiumO" }); }}>Participium O</button>


        <h3>Naamwoord</h3>
        <h4>Zelfstandig Naamwoord</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep1" }); }}>Groep 1</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep2a" }); }}>Groep 2a</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep2b" }); }}>Groep 2b</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep3mofv" }); }}>Groep 3 M/V</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep3o" }); }}>Groep 3 O</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep4" }); }}>Groep 4</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "groep5" }); }}>Groep 5</button>

        <h4>Persoonlijk voornaamwoord</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "pers1" }); }}>1ste persoon</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "pers2" }); }}>2de persoon</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "pers3hij" }); }}>3de persoon hij/zij</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "pers3zij" }); }}>3de persoon zij/zij</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "pers3het" }); }}>3de persoon het/zij</button>

        <h4>Bezittelijk voornaamwoord</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "bvnwm" }); }}>M</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "bvnwv" }); }}>V</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "bvnwo" }); }}>O</button>

        <h4>Wederkerend voornaamwoord</h4>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "wvnw3" }); }}>3de persoon</button>


        <h3>Comperativus</h3>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "comperativusMV" }); }}>M/V</button>
        <button onClick={() => { this.setState({ gevraagdeRijtje: "comperativusO" }); }}>O</button>

        <RijtjeDisplay type={this.state.gevraagdeRijtje}></RijtjeDisplay>
      </div>
    );
  }
}

export default App;
