import React from "../_snowpack/pkg/react.js";
class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.handlePlay = this.handlePlay.bind(this);
  }
  componentDidMount = () => {
    document.addEventListener("keydown", (event) => this.handlePlay(event.keyCode));
    document.addEventListener("keyup", () => document.getElementById(this.props.label.toLowerCase()).classList.remove("drum-pad-active"));
  };
  componentWillUnmount = () => document.removeEventListener("keydown", (event) => this.handlePlay(event.keyCode));
  handlePlay = (keyCode) => {
    if (keyCode == this.props.keyCode) {
      const clip = document.getElementById(this.props.label.toUpperCase());
      clip.curentTime = 0;
      clip.play();
      this.props.setDisplay(this.props.clip);
      document.getElementById(this.props.label.toLowerCase()).classList.add("drum-pad-active");
      setTimeout(() => document.getElementById(this.props.label.toLowerCase()).classList.remove("drum-pad-active"), 100);
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
