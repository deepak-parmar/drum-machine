import React from "react";


class DrumPad extends React.Component {
  constructor(props) {
    super(props)
    this.handlePlay = this.handlePlay.bind(this);
  }

  componentDidMount = () => {
    document.addEventListener("keydown", (event) => this.handlePlay(event.keyCode));
    document.addEventListener("keyup", () => document.getElementById(this.props.label.toLowerCase()).classList.remove("drum-pad-active"));
  }
  
  componentWillUnmount = () =>
  document.removeEventListener("keydown", (event) => this.handlePlay(event.keyCode));
    
  handlePlay = (keyCode) => {
    if (keyCode == this.props.keyCode) {
      const clip = document.getElementById(this.props.label.toUpperCase());
      clip.curentTime = 0;
      clip.play();
      this.props.setDisplay(this.props.clip);
      document.getElementById(this.props.label.toLowerCase()).classList.add("drum-pad-active");
      setTimeout(() => document.getElementById(this.props.label.toLowerCase()).classList.remove("drum-pad-active"), 100)
    }
  }

  render = () =>
    <button
      id={this.props.label.toLowerCase()}
      className={"drum-pad"}
      onClick={() => this.handlePlay(this.props.keyCode)}>
        
      {this.props.label}
      
      <audio
        id={this.props.label}
        className={"clip"}
        src={"dist/sounds/" + this.props.url} />

    </button>
}

export default DrumPad;