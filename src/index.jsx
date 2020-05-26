import React from "react";
import ReactDOM from "react-dom";
import Data from "./data/data.jsx";
import "./index.html";
import { answers } from "./data.js";



class Answers extends React.Component {
    render() {
      return (
        <>
        
        <h1>Messages</h1>
        
        <div>
        {answers.map((ans) => (
            <Data
              user={ans.user}
              text={ans.text}
              
            />
          ))}
         
        </div>
        </>
      
      )
      
    }
    
  }

  ReactDOM.render(<Answers />, document.getElementById("app"));