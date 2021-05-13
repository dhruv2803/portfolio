import React from 'react'
import Hcard from '../hcard/Hcard'
import "./style.css"
export default function Awards() {
    let detail1 = [
        'Held 2nd Position in the competitive programming competition'
    ]
    let detail2 = [
        'Specialization which gives deep knowledge about algorithms and techniques in the eld of Deep Learning',
        'Taught by Andrew Ng, one of the pioneers of the field',
        'Passed with ying colors in the tests'
    ]
    let detail3 = [
        'Understood the basics of the Machine Learning Algorithms in practical manner',
        'Got knowledge of a range of topics from supervised learning to unsupervised learning'
    ]
    return (
        <div className="award">
            <h2>Awards</h2>
            <Hcard 
                title="ACM NIT Surat, Inception 2.0 "
                time="Aug. '17"
                pos=""
                details={detail1}
            />
            <h2>Achievements and Certification</h2>
            <Hcard 
                title="Deep Learning Specialization, Learner"
                time="Feb. '18 to June '18"
                pos=""
                details={detail2}
            />

            <Hcard 
                title="Stanford Machine Learning, Learner"
                time="Sept. '17 to Dec. '17"
                pos=""
                details={detail3}
            />
            
        </div>
    )
}
