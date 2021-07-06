
/** @format */

import React, { Fragment } from "react";
import Context from "./Context";
import Provider from "./Provider";

const Agents = () => {
  return <AgentOne />;
};
const AgentOne = () => {
  return <AgentTwo />;
};
const AgentTwo = () => {
  return <AgentBond />;
};
const AgentBond = () => {
  return (
    <Context.Consumer>
      {(context) => (
        <Fragment>
          <h1>Agent Information</h1>
          <h2> Mission Name :{context.data.mname}</h2>
          <p> Agent Code: {context.data.agent}</p>
          <h1> Mission :{ context.data.accept}</h1>
          <button onClick={context.isMissionAccepted}>Click to Accept</button>
        </Fragment>
      )}
    </Context.Consumer>
  );
};

const App = () => {
  return (
    <div>
      <h1>Context API</h1>
      <Provider>
        <Agents />
      </Provider>
    </div>
  );
};
export default App;
