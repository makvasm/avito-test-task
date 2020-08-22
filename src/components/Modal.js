import React, { useEffect, useState, useRef } from 'react'
import Input from './Input'
import Comment from "./Comment"
import "../styles/Modal.css"
import { useHistory, useParams } from 'react-router-dom'

export default function Modal() {

    const [visible, toggleVisible] = useState(false)
    const [info, changeInfo] = useState(null)

    let history = useHistory()
    let { img: id } = useParams()

    useEffect(() => {
        toggleVisible(true)
        document.body.style.position = "fixed"

        fetch(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
            .then((res) => {
                if (!res.ok) return console.log("Error")
                res.json().then(data => changeInfo(data))
            })

        return () => document.body.style.position = "relative"
    }, [])

    return (
        <div
            id="modal-wrapper"
            onClick={(event) => {
                if (event.target.id === "modal-wrapper" || event.target.id === "modal-close") {
                    toggleVisible(false)
                }
            }}
        >
            <div
                className="modal"
                style={{ animation: `${visible ? "fade-in" : "fade-out"} 0.25s` }}
                onAnimationEnd={() => { if (!visible) history.goBack() }}
            >

                <div id="modal-close">X</div>

                <div className="placeholder">
                    <img
                        className="modal-img"
                        src={info?.url}
                    />
                </div>

                <ul className="modal-comments">
                    {info?.comments.map((comment, i) => (
                        <Comment key={i} text={comment.text} date={new Date(comment.date).toUTCString()} />
                    ))}
                </ul>

                <Input />

            </div>
        </div>
    )
}
