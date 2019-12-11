import React from "react";
import "./App.css";
import { connect } from "react-redux";

// Components
import Button from "./components/Button";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

// Actions
import { addTodo } from "./redux/actions/todoAction";

class App extends React.Component {
  state = {
    currentValue: "",
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
    const { dispatch } = this.props;
    const { currentValue } = this.state;

    dispatch(addTodo(currentValue));
  };

  _handleOnChange = event => {
    this.setState({ currentValue: event.target.value });
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
          <Input handleOnChange={this._handleOnChange} />
          {currentValue && (
            <Button
              isDisable={currentValue === ""}
              title="test"
              handleOnClick={this._handleOnClick}
            />
          )}
        </div>
        <div style={css.ul}>
          <ul>
            <ListElement text="test" />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(App);
