import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM correctly

import APP from "./App.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* Use React.StrictMode */}
    <APP />
  </React.StrictMode>
);
