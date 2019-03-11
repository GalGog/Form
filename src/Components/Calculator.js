import React, { Component} from 'react';

const scaleName = {
    c:'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends Component {
    constructor (props) {
        super (props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { temperature: ''};
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);

    }

    render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;

        return(
        <fieldset>
                <legend>Enter temperature in {scaleName[scale]}:</legend>
                <input
                value={temperature}
                onChange={this.handleChange}  />

        </fieldset>
        );
    }
}

class Calculator extends Component{
    render (){
        return (
            <div>
                <TemperatureInput scale="c" />
                <TemperatureInput scale="f"/>
            </div>
        );
    }
}


export  default Calculator;