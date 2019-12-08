import React from "react";
import "./App.css";

// Components
import Button from "./components/Button";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

class App extends React.Component {
  state = {
    currentValue: "",
    values: [],
    isRunOnClick: true
  };

  componentDidMount() {
    console.log("componentDidMount");
    const { currentValue } = this.state;
    // if (currentValue === "") {
    //   this.setState({ isRunOnClick: false });
    // }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { currentValue } = this.state;

    console.log("componentDidUpdate");

    // if (prevState.currentValue !== currentValue && currentValue === "") {
    //   this.setState({ isRunOnClick: false });
    // }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  _handleOnClick = () => {
    const { currentValue, values, isRunOnClick } = this.state;

    console.log('isRunOnClick :', isRunOnClick);
    values.push(currentValue);
    this.setState({ values: values }, () => {
      console.log(this.state.values);
    });
    // if (isRunOnClick === true) {
    // }
  };

  _handeOnChange = event => {
    this.setState({ currentValue: event.target.value }, () => {
      console.log("this.state.currentValue 1", this.state.currentValue);
    });
    console.log("this.state.currentValue 2", this.state.currentValue);
  };

  _renderElements = () => {
    const { values } = this.state;

    return values.map((value, index) => <ListElement key={index} text={value} />);
  };

  render() {
    const { currentValue } = this.state;

    const css = {
      ull: {
        backgroundColor: "red"
      }
    };
    return (
      <div className="App">
        <div>
          <Input handleOnChange={this._handeOnChange} />
          {
            currentValue && (
              <Button isDisable={currentValue === ''} title="test" handleOnClick={this._handleOnClick} />
            )
          }
        </div>
        <div style={css.ul}>
          <ul>{this._renderElements()}</ul>
        </div>
      </div>
    );
  }
}

export default App;
