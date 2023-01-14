import React from "react"
import ReactDOM from "react-dom"
import ProfileAbout from "./components/ProfileAbout"
import ProfileButtons from "./components/ProfileButtons"
import ProfileFooter from "./components/ProfileFooter"   
import ProfileImage from "./components/ProfileImage" 
import ProfileInfo from "./components/ProfileInfo" 
import ProfileInterests from "./components/ProfileInterests" 


function App() {
    return (
        <div>
            <ProfileImage />
            <main>
                <ProfileInfo />
                <ProfileButtons />
                <ProfileAbout />
                <ProfileInterests />
            </main>
            <ProfileFooter />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))