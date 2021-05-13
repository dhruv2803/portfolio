import React from 'react'
import Hcard from '../hcard/Hcard'
import "./style.css"
export default function Experience() {
    let detail1 = [
        'Working on the main trading infrastructure of the rm, which supports large ways of trading in the market',
        'Created an automation, which takes care of monthly release of production code',
        'Working on migration of code for supporting a new site of trading'
    ]
    let detail2 = [
        'Worked on the Project "Fix-ller Support for Spreads"',
        'The project is a simulator which mocks the trading of spreads(Related stocks) in the market',
        'Supports the simulation of more than 10 million trades in a second'
    ]
    let detail3 = [
        'Contributed to Open Source C++ Machine Learning Library for several algorithms like NADAM, NADAMAX etc.',
        'The library is currently used across various languages including python',
        'Reliable code, which has no issues reported till now'
    ]
    return (
        <div className="experience">
            <Hcard 
                title="D. E. Shaw India Private Limited" 
                time="July '20 to Current" 
                pos="Member Technical" 
                details={detail1}
            />
            <Hcard 
                title="D. E. Shaw India Private Limited " 
                time="May '19 to July '19" 
                pos="Intern " 
                details={detail3}
            />
            <Hcard 
                title="MLPACK " 
                time="Dec. '17 to Apr. '18" 
                pos="Contributor " 
                details={detail3}
            />
        </div>
    )
}
