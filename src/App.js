import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Layout from "./layout/layout";

function App() {
  const options = {
    timeout: 3000,
    position: positions.TOP_CENTER,
  };
  return (
    <Provider template={AlertTemplate} {...options}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  );
}

export default App;
