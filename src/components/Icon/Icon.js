import React from 'react'
import './Icon.css'
import Cloudy from '../../assets/cloudy.svg'
import Rain from '../../assets/rain.svg'
import Snowing from '../../assets/snowing.svg'
import Sun from '../../assets/sun.png'
import Thermometer from '../../assets/thermometer.svg'


const Icon = props => {
    switch(props.icon) {

        case 800:
            return <img className = "icon" src = {Sun} alt = {Sun} />;
        case 801:
            return <img className = "icon" src = {Cloudy} alt = {Cloudy} />;
        case 802:
            return <img className = "icon" src = {Cloudy} alt = {Cloudy} />;
        case 803:
            return <img className = "icon" src = {Cloudy} alt = {Cloudy} />;
        case 804:
            return <img className = "icon" src = {Cloudy} alt = {Cloudy} />;
        case 500:
            return <img className = "icon" src = {Rain} alt = {Rain} />;
        case 501:
            return <img className = "icon" src = {Rain} alt = {Rain} />;
        case 502:
            return <img className = "icon" src = {Rain} alt = {Rain} />;
        case 600:
            return <img className = "icon" src = {Snowing} alt = {Snowing} />;
        case 601:
            return <img className = "icon" src = {Snowing} alt = {Snowing} />;
        case 602:
            return <img className = "icon" src = {Snowing} alt = {Snowing} />;
        case 610:
            return <img className = "icon" src = {Snowing} alt = {Snowing} />;  
        default:
            return (
                <React.Fragment>
                <img className = "icon" src = {Thermometer} alt = {Thermometer} />
                <h5>{props.description}</h5>
                </React.Fragment>
            );
    }
};

export default Icon;
