import React from 'react';

class App extends React.Component {
  state = {
    const: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     const: 0,
  //     someKey: false,
  //   };
  // };

  // handleClick = () => {
  //   // this.setState((prevState) => ({const: prevState.const + 1}), () => {
  //   //   console.log('setState con');
  //   // })
  //   // console.log('click');
  //   this.setState({const: this.state.const + 1})
  //   // this.setState((prevState) => ({const: prevState.const + 1}))
  // };

  handleClickMinus = () => {
    this.setState({const: this.state.const - 1})
  };
  handleClickPlus = () => {
    this.setState({const: this.state.const + 1})
  };

  componentDidMount () {
    console.log('componentDidMount');
  }
  componentDidUpdate () {
    console.log('componentDidUpdate');
  }

  render() {
    console.log('render', this.state.const);
    return (
      <div className="App">
        Hello React
        <button onClick={this.handleClickMinus}>-</button>
        {this.state.const}
        <button onClick={this.handleClickPlus}>+</button>
      </div>
    );
  };
}

export default App;
