import React from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";

import DragNDropIndex from "./components/DragNDrop/DragNDropIndex";
import SideMenuIndex from "./components/LeftMenu/SideMenuIndex";

import './App.css';


interface IApp {
  id: number;
}

const App: React.FC<IApp> = props => {

  return (
    <BrowserRouter>
      <Route path="/example" component={SideMenuIndex} />
      <Redirect to="/example" />
    </BrowserRouter>
  );
};

export default App;
