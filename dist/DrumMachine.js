import React from "../_snowpack/pkg/react.js";
import DrumPad from "./DrumPad.js";
import data from "./data.js";
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: ""};
    this.setDisplay = this.setDisplay.bind(this);
  }
  setDisplay = (newDisplay) => {
    this.setState({display: newDisplay});
  };
  shouldComponentUpdate = (nextState) => this.state.display !== nextState;
  render() {
    const DrumPads = data.map((element, index) => /* @__PURE__ */ React.createElement(DrumPad, {
      key: index,
      label: element.trigger,
      url: element.fileName,
      clip: element.clip,
      keyCode: element.key,
      setDisplay: this.setDisplay
    }));
    return /* @__PURE__ */ React.createElement("div", {
      id: "drum-machine"
    }, /* @__PURE__ */ React.createElement("div", {
      id: "display"
    }, this.state.display), DrumPads);
  }
}
export default DrumMachine;
