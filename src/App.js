import React from "react";
import StatusList from "./components/StatusList";
import sampleStatuses from "./sampleData";

function App() {
  return (
    <div className="app">
      <StatusList statuses={sampleStatuses} />
    </div>
  );
}

export default App;