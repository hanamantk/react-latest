import React, { Component } from 'react';
import './App.css';
import Remote from './remote';

const matrix=[[1,2,3,4],
              [5,6,7,8],
              [9,10,11,12],
              [13,14,15,16],
              [17,18,19,20]
          ]

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
                mat:matrix,
                position:'22'  
              };
              this.highlightCell=this.highlightCell.bind(this);
  }

  getNextCell(row,rowOrCol){
    this.currntPosition=rowOrCol==='row'?(row+this.currntPosition[1]):
                                (this.currntPosition[0]+row);
     var render= this.getBoundaryOfTable(this.currntPosition);
    var isRender=(render===true)?this.setState({position:this.currntPosition}):alert('Crossed Board Limit'); 

  }

  getRow(self){
    this.currntPosition=self.state.position;
    var row=parseInt(this.currntPosition[0]);
    return row;
  }

  getColumn(self){
    this.currntPosition=self.state.position;
    var col=parseInt(this.currntPosition[1]);
    return col;
  }

  highlightCell(action){
    var self=this;
    switch(action){
      case 'up':  var row=this.getRow(self);
                    row=row-1;
                    this.getNextCell(row,'row');
                     
                   break;
      case 'down' : var row=this.getRow(self);
                    row=row+1;
                    this.getNextCell(row,'row');
                    break;
      case 'left' : var col=this.getColumn(self);
                        col=col-1;
                        this.getNextCell(col,'col');
                    break;
      case 'right':var col=this.getColumn(self);
                    col=col+1;
                    this.getNextCell(col,'col');
                    break;
      default     :   break;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    
    return this.getBoundaryOfTable(nextState.position);
  }

  getBoundaryOfTable(nextState){
    var columnLength=this.state.mat[0].length || 0;
    if(nextState[1]>(columnLength-1) || nextState.length>=3 ){
      return false;
    }else if(nextState[0]>(columnLength)){
      return false;
    }
    return true;
  }

  render() {
     var position=this.state.position;
      var myTable=this.state.mat.map((row,i)=>{
             var columns=row.map((elm,j)=>{
                  return (<td key={j} className={((''+i+j)===position)?'cell':null}>{''+i+j}</td>);
                });
                return (<tr key={i}>{columns}</tr>)
        
      });
  
   return (
      <div className="App">
        <table  id="matrix">
          <tbody>{myTable}</tbody>
       </table>
       <Remote highlight={this.highlightCell}/>
      </div>
    );
  }
}

export default App;
