import React, { Component } from 'react';
import './App.css';
class Remote extends Component {
  constructor(props) {
    super(props);
    this.callPar=this.callPar.bind(this);
  }
callPar(action){
    this.props.highlight(action)
}

  render() {
      
   return (
      <div className="remote">
        <div><button onClick={this.callPar.bind(this,'up')}> ^</button></div>
            <div className="midbtn">
                <span className="lftbtn"><button onClick={this.callPar.bind(this,'left')} >&lt;</button></span>
                <span><button className="rtbtn" onClick={this.callPar.bind(this,'right')}> ></button></span>
            </div>
          
            <div className="clrfix downbtn "><button onClick={this.callPar.bind(this,'down')}>v</button></div>
      </div>
      
     
    );
  }
}

export default Remote;
