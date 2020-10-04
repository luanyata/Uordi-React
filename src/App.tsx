import React from "react";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./App.scss";
import Header from "./Components/Header";
import { initializeIcons, DefaultEffects, TextField } from "@fluentui/react";
import FunctionBar from "./Components/FunctionBar";

initializeIcons();

const content = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  heigth: "100vh"
}

function App() {
  return (
    <div className="ms-Grid" dir="ltr">
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm12 ms-md12 ms-x12">
          <Header />
        </div>
        <div className="ms-Grid-col ms-sm12">
          <div style={{ boxShadow: DefaultEffects.elevation4, paddingLeft: 10 }}>
            <FunctionBar />
          </div>
        </div>
        <div className="ms-Grid-col ms-sm12" style={content}>
          <TextField multiline rows={40} styles={{ root: { width: 500, margin: 50 } }} resizable={false} />
        </div>
      </div>
    </div>
  );
}

export default App;
