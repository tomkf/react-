const root = document.getElementById("root");


class ChangeColors extends React.Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }
  render() {
    const styleChange = () => {
      this.setState({ color: this.state.color })
    }
    return (
      <div>
        <h1 style={style}>Change My Colour!</h1>
        <p>
          <button onClick={this.styleChange} style={color: 
  red}>Red</button>
          <button onClick={this.styleChange} style={color: 
    blue}>Blue</button>
          <button onClick={this.styleChange} style={color: 
   green}>Green</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ChangeColors />, root);
