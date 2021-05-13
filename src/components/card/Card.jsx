import React from 'react'
import "./style.css"
export default function Card(props) {
    return (
        <div className="card">
            <div className="title">
                <h2>{props.title}</h2>
            </div>
            <div className="duration">
                {props.duration}
            </div>
            <div className="card_details">
                <ul className="detail_list">
                {props.details.map(detail =>(
                    <li>{detail}</li>
                ))}
                </ul>
            </div>
            <div className="stack">
            <h4>Technology Stack</h4>
            <ul className="stack_list">
            {props.stack.map(name => (  
                <li>  
                    {name}  
                </li>  
                ))}
                </ul>
            </div>
        </div>
    )
}
