import React, { useState, useRef } from 'react'

export default function ThemeSwitcher({ width, height }) {
  const [state, setState] = useState(localStorage.getItem("theme") || "light")
  document.querySelector("html").dataset.theme = state

  return (
    <div
      title='Тёмное/светлое оформление'
      className="theme-switcher"
      onClick={() => {
        let html = document.querySelector("html")
        if (state == "light") {
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
        backgroundColor: "#1b1b1b",
        border: "1px solid grey",
        borderRadius: '20px',
        width: `50px`,
        height: `27px`,
        overflow: "hidden",
      }}>

      {/* двигающийся блок с индикатором */}
      <div
        style={{
          width: `50px`,
          height: `25px`,
          borderRadius: '20px',
          transform: state == "dark" ? `translateX(23px)` : "",
          backgroundColor: "white",
          transitionDuration: "0.25s"
        }}>

        {/*  */}
        <div
          className="switcher-circle"
          style={{
            backgroundColor: "transparent",
            borderRadius: '50%',
            border: '2px solid black',
            backgroundColor: 'white',
            width: `25px`,
            height: `25px`,
          }}></div>
      </div>
    </div>
  )
}


