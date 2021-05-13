import React from 'react'
import Card from "../card/Card"
import "./style.css"
export default function Projects() {
    let stack1 = ['Python', 'Numpy', 'Machine Learning', 'NLP', 'Scikit-learn', 'Gensim', 'Pandas', 'Scipy', 'NLTK']
    let stack2 = ['Python', 'Numpy', 'Machine Learning', 'Android']
    let stack3 = ['Python', 'Machine Learning', 'Numpy']

    let detail1 = ['Recommendation System for Indian Legal Documents, given small details of the legal case',
                    'Uses extractive summary approach to speed up the recommendation',
                    'Ranking of recommendations decided using cosine similarity score of documents',
                    'More than 90% accurate and achieves around 0.95 on the F1-score metric'
                    ]
    let detail2 = [
        'Project of automating homes and offices using machine learning concepts',
        'One component is built from scratch voice-controlled electrical appliances using smartphone only',
        'Another component nds the solution of automating oce lighting by analyzing patterns from past and considering aecting factors like daylight using neural networks',
        'Miniature model of oce lighting was used in the department in reality and turned out to be great success for them'
    ]
    let detail3 = [
        'Use of Machine Learning Basic Models to predict future stock prices',
        'Used data of last 1 year for future days last price prediction',
        'Best model developed was 95% accurate for one of the stocks'
    ]
    return (
        <div className="projects">
            <Card 
                title="Legal Document Recommendation System "
                duration="July '19 to June '20"
                details={detail1}
                stack={stack1}
            />
            <Card 
                title="Home Automation Using Machine Learning "
                duration="Sept. '17 to Apr. '18"
                details={detail2}
                stack={stack2}
            />
            <Card 
                title="Stock Market Prediction"
                duration="May '17 to Aug. '17"
                details={detail3}
                stack={stack3}
            />
        </div>
    )
}
