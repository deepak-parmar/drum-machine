import React from "react";
import DrumPad from "./DrumPad";
import data from "./data"

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: ''}
    this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay = (newDisplay) => {
    this.setState({display: newDisplay});
  }

  shouldComponentUpdate = (nextState) => this.state.display !== nextState

  render() {
    const DrumPads = data.map(
      (element, index) =>
        <DrumPad
          key={index}
          label={element.trigger}
          url={element.fileName}
          clip={element.clip}
          keyCode={element.key}
          setDisplay={this.setDisplay}
        />
    );

    return (
      <div id="drum-machine">
        <h1 id="display">{this.state.display}</h1>
        { DrumPads }
      </div>
    );
  }
}

export default DrumMachine;