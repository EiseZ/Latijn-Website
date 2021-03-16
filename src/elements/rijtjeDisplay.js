import React from "react";
import { rijtjes } from "../preferences/rijtjes";


export class RijtjeDisplay extends React.Component {
  render() {
    console.log(this.props.type);
    let rijtjeToRender = { error: "Kan het gevraagde rijtje niet vinden" };
    if (Object.keys(rijtjes).includes(this.props.type)) {
      rijtjeToRender = rijtjes[this.props.type]; //Object.keys(rijtjes).indexOf(this.props.type);
      console.log(rijtjeToRender);
    } else {
      console.log("invalid");
    }
    return (
      <div>
        <ul>
          {Object.keys(rijtjeToRender).map((key, i) =>
            <li key={key}>
              <h5>{rijtjeToRender[key]}</h5>
            </li>
          )}
        </ul>
      </div>
    );
  }
}