import React from 'react'
import "./style.css"
import Feed from "../feed/Feed"
export default function Publication() {
    return (
        <div className="publication">
            <Feed 
                detail='A. Trivedi, A. Trivedi, S. Varshney, V. Joshipura, R. Mehta and J. Dhanani, "Extracted Summary Based
                        Recommendation System for Indian Legal Documents," 2020 11th International Conference on Computing,
                        Communication and Networking Technologies (ICCCNT), Kharagpur, India, 2020, pp. 1-6'
                link="https://ieeexplore.ieee.org/document/9225290"
            />
            <Feed 
                detail='Trivedi A., Trivedi A., Varshney S., Joshipura V., Mehta R., Dhanani J. (2021) Similarity Analysis of Legal Documents:
                        A Survey. In: Fong S., Dey N., Joshi A. (eds) ICT Analysis and Applications. Lecture Notes in Networks and Systems,
                        vol 154. Springer, Singapore'
                link="https://link.springer.com/chapter/10.1007%2F978-981-15-8354-4_49"
            />
        </div>
    )
}
