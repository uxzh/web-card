import React from "react"
import ReactDOM from "react-dom"

export default function ProfileButtons() {
    return (
        <div>
            <div className="buttonDiv">
                <button type="button" className="buttonEmail"><img src="https://imgur.com/6dDONFR.png" /><a 
            href="#">Email</a></button>
                <button type="button" className="buttonLinkedin"><img src="https://imgur.com/3iVcL7l.png" /><a href="#">Linkedin</a></button>
            </div>
            <div>
                <button type="button" className="buttonPortfolio"><img src="https://imgur.com/5spIUgA.png" /><a href="#">Portfolio</a></button>
            </div>
        </div>
    )
}