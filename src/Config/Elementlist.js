import React, { Component } from 'react';
import Button from '../Button';
//css..

class Elementlist extends Component {
  constructor(props){
    super(props);

  }
  render() {
    let thead = <tr><th>Btns</th><th>Name</th></tr>,
      tbody = this.props.elementlist.map(
        function(e, i){ return <tr key={i}><td><Button handlerClick={this.props.editElement.bind(this, e.id)} tmp={'[ Edit ]'} /><Button handlerClick={this.props.removeElement.bind(this, e.id)} tmp={'[ Remove ]'} /></td><td>{e.name}</td></tr> },
        this
      );
    if(this.props.elementlist.length!==0){
      return (
        <div>
          {/*<h3>Elementlist</h3>*/}
          <table>
            <thead>
              {thead}
            </thead>
            <tbody>
              {tbody}
            </tbody>
          </table>
        </div>
      );
    }else{return null}
  }
}

export default Elementlist;