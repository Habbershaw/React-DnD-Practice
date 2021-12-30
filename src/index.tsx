import React from 'react';
import { render } from 'react-dom';
import App from "./App";

import './index.css';


const Root = () => {
  return (
    <App id={0} />
  );
};

render(<Root />, document.getElementById("root"));
