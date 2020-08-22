import React from 'react'
import { Link } from "react-router-dom"
import "../styles/Gallery.css"

export default function Gallery({ images }) {
    return (
        <div id="gallery">
            {images.map((img, i) => (
                <Link
                    className="photo-link"
                    to={`/${img.id}`}
                    key={img.id}
                >
                    <img src={img.url} />
                </Link>
            ))}
        </div>
    )
}
