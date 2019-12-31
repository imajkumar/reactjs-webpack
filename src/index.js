import React from "react";
import ReactDOM from "react-dom";
//import { Button } from 'antd';
import { Button } from 'evergreen-ui'

import 'antd/dist/antd.css';

const App = () => {
  return <div>
      Hello React,Webpack 4 & Babel 7! welcome
      
      <Button>I am using 🌲 Evergreen!</Button>,
      </div>;
};
ReactDOM.render(<App />, document.querySelector("#root"));