import React from "../snowpack/pkg/react.js";
import "./DrumPad.css.proxy.js";
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount = () => document.addEventListener("keyup", (event) => this.handlePlay(event.keyCode));
  componentWillUnmount = () => document.removeEventListener("keyup", (event) => this.handlePlay(event.keyCode));
  handlePlay = (keyCode) => {
    if (keyCode == this.props.keyCode) {
      const clip = document.getElementById(this.props.label.toUpperCase());
      clip.curentTime = 0;
      clip.play();
      this.props.setDisplay(this.props.clip);
    }
  };
  render = () => /* @__PURE__ */ React.createElement("button", {
    id: this.props.label.toLowerCase(),
    className: "drum-pad",
    onClick: () => this.handlePlay(this.props.keyCode)
  }, this.props.label, /* @__PURE__ */ React.createElement("audio", {
    id: this.props.label,
    className: "clip",
    src: "dist/sounds/" + this.props.url
  }));
}
export default DrumPad;
