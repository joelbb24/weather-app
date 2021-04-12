import React from 'react'
import './Temp.css'

const Temp = props => {
    return <div className = "Temp">
            <span className = "curr">{props.currTemp}&#176;</span>
            <br/>
            <span className = "description">{props.description}</span>
        </div>   
}


export default Temp;