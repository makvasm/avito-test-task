import React, { useState, useEffect, Suspense } from "react"
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, useHistory } from "react-router-dom"
import Gallery from "./components/Gallery"
import Spinner from "react-bootstrap/Spinner"
import ThemeSwitcher from "./components/ThemeSwitcher"

const Modal = React.lazy(() => import("./components/Modal"))

function App() {

    let history = useHistory()

    useEffect(() => {
        fetch("https://boiling-refuge-66454.herokuapp.com/images")
            .then(res => {
                if (!res.ok) return console.log("Error on images fetching")
                res.json().then(imgs => setImages(imgs))
            })
    }, [])

    const [images, setImages] = useState([])

    return (
        <Router history={history}>
            <ThemeSwitcher />

            <Suspense fallback={<Spinner animation="border" />}>
                <Gallery images={images} />
                <Route path="/:img">
                    <Modal />
                </Route>
            </Suspense>

        </Router>
    )
}


ReactDOM.render(<App />, document.getElementById("app"));