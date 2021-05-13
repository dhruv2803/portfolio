import React from 'react'
import "./style.css"
export default function Feed(props) {
    return (
        <div className="feed">
            <div className="feed_detail">
                {props.detail}
            </div>
            <div className="link">
                {props.link}
            </div>
        </div>
    )
}
