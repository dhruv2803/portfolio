import React from 'react'
import "./style.css"
export default function Hcard(props) {
    return (
        <div className="hcard">
            <div className="hcard_head">
                <h2>{props.title}</h2> 
            </div>
            <div className="ptime">
                {props.time}
            </div>
            <div className="pos">
                {props.pos}
            </div>
            <div className="detail">
                {props.details.map(detail => (
                    <li>{detail}</li>
                ))}
            </div>
        
        </div>
    )
}
