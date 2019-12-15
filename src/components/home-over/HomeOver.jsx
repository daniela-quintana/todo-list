import React, { Component } from "react";
import './HomeOver.css'

class Home extends Component {
  render() {
      
    const curry = f => (...args) =>
    args.length >= f.length ?
    f(...args) :
    curry(f.bind(f, ...args));
    
    const compose = (f, g) => x => f(g(x));

    const composeN = (...fns) => (...args) =>
    fns.reverse().
    reduce((x, f) => f.apply(f, [].concat(x)), args);

    return (
        <div class="stage">
        <div class="wrapper">
            <div class="slash"></div>
            <div class="sides">
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side"></div>
            </div>
            <div class="text">
            <div class="text--backing">To_Do_List</div>
            <div class="text--left">
                <div class="inner">To_Do_List</div>
            </div>
            <div class="text--right">
                <div class="inner">To_Do_List</div>
            </div>
            </div>
        </div>
        </div>
    )
  }}

  export default Home;