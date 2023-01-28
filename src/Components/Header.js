import React from "react"


export default function Header() {
    return (
        <header className="header">
            

            <img 
                src="./images/Troll Face.svg" 
                className="header--image"
                alt="troll"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Project</h4>
        </header>
    )
}