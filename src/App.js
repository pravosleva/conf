import React, { Component } from 'react';
import Config from './Config';
import Button from './Button';

class App extends Component {
	constructor(props){
    super(props);
    this.state = {

			supply: [],
			exhaust: []
			
    }
    this.updateConfigs = this.updateConfigs.bind(this);
	}
	updateConfigs(arr, configName){
		switch(configName){
			case 'Supply':
				this.setState({ supply: arr });
				break;
			case 'Exhaust':
				this.setState({ exhaust: arr });
				break;
			default: console.log('Sorry. Not forthis configName!'); break;
		}
	}
  render() {
    return (
      <div className='container-fluid row'>
				<div className='text-center'>
					<Button handlerClick={window.externalFunction.bind(this, { supply: this.state.supply, exhaust: this.state.exhaust })} tmp={'[ Call externalFunction(obj) ]'} />
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
					<textarea className='form-control' readOnly value={JSON.stringify(this.state.supply)} />
					<Config name='Supply' key={0} updateConfigs={this.updateConfigs} />
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6 col-xs-6'>
					<textarea className='form-control' readOnly value={JSON.stringify(this.state.exhaust)} />
					<Config name='Exhaust' key={1} updateConfigs={this.updateConfigs} />
				</div>
      </div>
    );
  }
}

export default App;
