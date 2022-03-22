import React from "../_snowpack/pkg/react.js";
import DrumPad from "./DrumPad.js";
import data from "./data.js";
import "./style.css.proxy.js";
class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {display: "PLAY SOMETHING!"};
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
    }, /* @__PURE__ */ React.createElement("h1", {
      id: "display"
    }, this.state.display), /* @__PURE__ */ React.createElement("div", null, DrumPads));
  }
}
export default DrumMachine;
