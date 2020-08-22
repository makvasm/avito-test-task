import React from 'react'

export default function Comment({ text, date }) {
    return (
        <div className="comment-wrapper">
            <div className="comment-date">{date}</div>
            <div className="comment-text">{text}</div>
        </div>
    )
}
