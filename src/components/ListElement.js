import React, { Fragment } from "react";
import { connect } from "react-redux";

const ListElement = ({ text = "text", todoList }) => {
console.log('todoList :', todoList);
  return (
    <Fragment>
      {todoList.todos.map(value => (
        <li>{value.name}</li>
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todos
  };
};

export default connect(mapStateToProps)(ListElement);
