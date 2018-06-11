import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

class ChangeColors extends React.Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }
  render() {
    const style = { color: this.state.color };
    return (
      <div>
        <h1 style={style}>Change My Colour!</h1>
        <p>
          <button>Red</button>
          <button>Blue</button>
          <button>Green</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ChangeColors />, root);
