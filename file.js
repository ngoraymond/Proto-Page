class Clock extends React.Component{
    constructor(props){
      super(props);
      this.state = {date: new Date()};
     }
       componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
     componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
    render(){
      return(<p>Time is {this.state.date.toLocaleTimeString()}</p>);
    }
  }
  class Tmp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        clicked: false,
        text: "Click here", 
        count: 0
      };
    }
    change = () => {
      this.setState(state=>({count: this.state.count+1, clicked: !state.clicked, text: state.clicked ? "Off":"On"}));
    };
    render() {
      console.log("working");
      return(
        <h1 onClick={this.change}>
          <h2>State:</h2>
          <h3>{this.state.text}</h3> 
          Clicks: {this.state.count}
        </h1>);
    }
  }
  //ReactDOM.render(<Tmp /> ,document.getElementById('root'));
  ReactDOM.render(<Clock /> ,document.getElementById('clock'));
  //document.getElementById("test").innerHTML = "Testing if formatting works";
