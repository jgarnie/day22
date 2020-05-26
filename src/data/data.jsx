import React from "react";
import "./data.scss";


export default class Data extends React.Component {

    state = {

      count: 0,

    };

    handleClick=()=>{
      console.log('hi')
      this.setState({

          count: this.state.count +1,
        
      });

    };

    render() {
      let likes = "message__message";

      if (this.state.count >= 10) {

        likes ="message__likes message__likes--hot";
        
      }

      return (
        <>
          <div className="message">
              <div className="message__sender">{this.props.user}</div>
              <div className={likes}>{this.props.text}</div>
              <span className="message__likes" onClick={this.handleClick}>{this.state.count}</span>
          </div>
       </>
      );
    }
  }console.log(Data)
  