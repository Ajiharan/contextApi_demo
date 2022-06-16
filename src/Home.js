import React from "react";

const Home = ({ user }) => {
  console.log("renders");

  return <div>{user.name}</div>;
};

export default React.memo(Home);
