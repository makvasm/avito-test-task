import React, { useState, useRef } from 'react'
import "../styles/ThemeSwitcher.css"

export default function ThemeSwitcher({width, height}) {
    const [state, setState] = useState(localStorage.getItem("theme") || "light")
    document.querySelector("html").dataset.theme = state

    return (
        <div
            className = "theme-switcher"
            onClick = {() => {
                let html = document.querySelector("html")
                if(state == "light"){
                    localStorage.setItem("theme", "dark")
                    html.dataset.theme = "dark"
                    setState("dark") 
                } else {
                    localStorage.setItem("theme", "light")
                    html.dataset.theme = "light"
                    setState("light")
                }                
            }}
            style={{
                backgroundColor: "lightgreen",
                border: "1px solid grey",
                width: `${width}px`,
                height: `${height}px`,
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: state == "dark" ? `translateX(${width - height}px)` : "",
                    backgroundColor: "white",
                    transitionDuration: "0.25s"
                }}
            >
                <div
                    className="switcher-circle"
                    style={{
                        backgroundColor: "#000000",
                        width: `${height}px`,
                        height: `${height}px`,
                    }}
                ></div>
            </div>
        </div>
    )
}


