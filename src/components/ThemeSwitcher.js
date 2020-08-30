import React from 'react'
import "../styles/ThemeSwitcher.css"

export default function ThemeSwitcher() {
    return (
        <div
            className="theme-switcher"
            onClick={() => {
                let html = document.querySelector("html")
                html.dataset.theme == "dark" ? html.dataset.theme = "" : html.dataset.theme = "dark"
                localStorage.setItem("theme", html.dataset.theme)
            }}
        >

        </div>
    )
}
