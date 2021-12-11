import React from "react";
import './ProgressBar.css';
import data from "./data";
import { Chrono } from "react-chrono";

const ProgressBar = () => {

  return (
    <div className="ProgressBarContainer">
    <Chrono 
    items={data} 
    mode="VERTICAL"
    //mode="HORIZONTAL"
    hideControls
    theme={{"primary":"#253E66","secondary":"#EF6555"}}
    useReadMore="false"
    />
    </div>
  )
}

export default ProgressBar;
