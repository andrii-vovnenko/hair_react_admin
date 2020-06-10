import React from "react";

const ModelPage = ({ match }) => {
  console.log('location: ', match.params.id);
  return (
    <h1>Model page</h1>
  )
};

export default ModelPage;
