import React from 'react'
import "./style.css"
export default function Profile() {
    return (
        <div className="profile">
            <p>
            Highly talented IT
Professional with
exemplary academic and
professional record, known
for providing great
analysis, insights for
complex situations and
finding innovative
solutions to various types
of problems
            </p>
            <h2>Education</h2>
            <fieldset>
            <legend>NIT Surat</legend>
            <div className="year">July '16 to July '20<br /></div>
            <span>Bachelor of Technology
            Computer Engineering 2020<br />
            </span>
            <span> CGPA:- 9.56</span>
            </fieldset>
            
            <h2>Skills</h2>
            <ul className="skills">
                <li><u>MACHINE LEARNING</u></li>
                <li><u>NATURAL LANGUAGE PROCESSING</u></li>
                <li><u>LANGUAGES</u></li>
                <ul className="subskill">
                    <li>C</li>
                    <li>C++</li>
                    <li>PYTHON</li>
                    <li>JAVA</li>
                </ul>
                <li><u>MACHINE LEARNING FRAMEWORK</u></li>
                <ul className="subskill">
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>scikit-learn</li>
                </ul>
                <li><u>WEB TECHNOLOGY</u></li>
                <ul className="subskill">
                    <li>HTML</li>
                    <li>JavaScript</li>
                    <li>PHP</li>
                    <li>SQL</li>
                </ul>
                <li><u>TRADING CONNECTIVITY</u></li>
                <ul className="subskill">
                    <li>Fix 4.2</li>
                    <li>Fix 4.4</li>
                </ul>
            </ul>
            
        </div>
    )
}
