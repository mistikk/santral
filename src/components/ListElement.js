import React, { Fragment } from "react";

const ListElement = ({ text = "text" }) => {
  return (
    <Fragment>
      <li>{text}</li>
    </Fragment>
  );
};

export default ListElement;
