import React, { Component } from 'react';
import Button from '../Button';
import AddElementForm from './AddElementForm';
import Elementlist from './Elementlist';

class Config extends Component {
	constructor(props){
    super(props);
    this.state = {
			addElementFormOpened: false,
			formState: { name: "" },
			elementlist: []
    }
    //this.test = this.test.bind(this);
		this.saveElement = this.saveElement.bind(this);
		this.addElementFormToggler = this.addElementFormToggler.bind(this);
		this.removeElement = this.removeElement.bind(this);
		this.updateFormState = this.updateFormState.bind(this);
		this.editElement = this.editElement.bind(this);
	}
	saveElement(obj, sup_or_ex) {
    let _getUUID = () => {
      let newUUID = ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
      }));
      return newUUID;
    };

    let elementlist = this.state.elementlist;
    obj.id = _getUUID();
		
		// --- tmp dims:
		obj.length = 1000;
		obj.width = 350;
		obj.height = 600;
		// --- ---
		
		elementlist.push(obj);
    this.setState({ elementlist });
    this.updateFormState('clearForm');
    this.addElementFormToggler(false);
		
		this.props.updateConfigs(elementlist, this.props.name);
	}
	addElementFormToggler(is_it_should_be_opened) {
    switch(is_it_should_be_opened){
      case true: this.setState({ addElementFormOpened: is_it_should_be_opened }); break;
      case false:
        this.setState({ addElementFormOpened: is_it_should_be_opened });
        this.updateFormState('clearForm');// clear always when the form should be closed manually
        break;
      default: this.setState({ addElementFormOpened: !this.state.addElementFormOpened });
    }
	}
	removeElement(id) {
    let elementlist = this.state.elementlist.filter( (e, i) => e.id !== id );
    this.setState({ elementlist });
		
		this.props.updateConfigs(elementlist, this.props.name);
	}
	updateFormState(propName, e) {
    //console.log(`e.target.value before: ${e.target.value}`);
		let _getNumericValue = (val) => { return (val!=="" && !isNaN(val)) ? Number(val) : "" };
		
		let formState = this.state.formState,
			name = formState.name,
			level = formState.level,
			priority = formState.priority;
			//...
    switch(propName){
      case 'name': this.setState({formState: { name: e.target.value, level, priority }}); break;
			case 'level': this.setState({formState: { name, level: _getNumericValue(e.target.value), priority }}); break;
			case 'priority': this.setState({formState: { name, level, priority: _getNumericValue(e.target.value) }}); break;
      case 'clearForm': this.setState({formState: { name: '', level: '', priority: '' }}); break;
      default: break;
    }
	}
	editElement(id) {
    this.addElementFormToggler(true)
    let elementToEdit = this.state.elementlist.filter( (e, i) => e.id === id )[0];
    this.setState({ formState: { name: elementToEdit.name, level: elementToEdit.level, priority: elementToEdit.priority } });
    this.removeElement(id);
	}
  render() {
    return (
      <div>
        <div>
          <h1>{this.props.name}</h1>
        </div>
				<Button handlerClick={ this.addElementFormToggler.bind(this, true) } tmp={'[ Добавить елемент ]'} />
				<br />
				<AddElementForm
					addElementFormToggler={this.addElementFormToggler.bind(this)}
					display={this.state.addElementFormOpened ? 'block' : 'none'}
					formState={this.state.formState} updateFormState={this.updateFormState}
					saveElement={this.saveElement}
				/>
				<Elementlist elementlist={this.state.elementlist} removeElement={this.removeElement} editElement={this.editElement} />
      </div>
    );
  }
}

export default Config;
