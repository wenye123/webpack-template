var React = require('react');
var ReactDOM = require('react-dom');
import CSS from "@/main.scss"
import Img from './code.jpg'

ReactDOM.render(
  <div>
      <h1 className={CSS.red}>Hello, world!</h1>
      <img src={Img} alt=""/>
  </div>,
  document.getElementById('app')
);
 