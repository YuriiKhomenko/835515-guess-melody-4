import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen.jsx";


const App = (proprs) => {
  const {errorsCount} = proprs;

  return (
    <WelcomeScreen
      errorsCount={errorsCount} />
  );
};


export default App;
