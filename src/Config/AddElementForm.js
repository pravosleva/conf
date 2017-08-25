import React, { Component } from 'react';
import Button from '../Button';
//css..

class AddElementForm extends Component {
  constructor(props){
    super(props);
  }
  saveElement(){
    let name = this.props.formState.name,
			level = this.props.formState.level,
			priority = this.props.formState.priority;
			//...
    this.props.saveElement({ name, level, priority });
  }
  render() {
    return (
      <div style={{display: this.props.display}}>
        <hr />
        {/*<h3>AddElementForm</h3>*/}
        <label>Name (str)</label>
				<br />
        <input
					onChange={this.props.updateFormState.bind(this, 'name')}
					value={this.props.formState.name}
				></input>
				<br />
				<label>Level (num: 0, 1 or 2)</label>
				<br />
        <input
					onChange={this.props.updateFormState.bind(this, 'level')}
					value={this.props.formState.level}
				></input>
				<br />
				<label>Priority (num)</label>
				<br />
        <input
					onChange={this.props.updateFormState.bind(this, 'priority')}
					value={this.props.formState.priority}
				></input>
				<br />
        <button onClick={this.saveElement.bind(this)}>[ Save Element ]</button>
        <Button handlerClick={this.props.addElementFormToggler.bind(this, false)} tmp={'[ Close Form ]'} />
        <hr />
      </div>
    );
  }
}

export default AddElementForm;