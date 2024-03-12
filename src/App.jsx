import "./App.css";

import { Loaders, Movements, ReactComponents } from "./views";

function App() {
  return (
    <>
      <div className="loaders_container">
        <ReactComponents />
      </div>
      <div className="loaders_container">
        <Movements />
      </div>
      <div className="loaders_container">
        <Loaders />
      </div>
      <span>More is Coming . . .</span>
    </>
  );
}

export default App;
