import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function BasicExample() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">Trang chủ</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li>
                                <Link to="/detail" className="nav-link">Quản lý</Link>
                            </li>



                        </ul>
                    </div>
                </nav>

                <hr />

                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/detail"><About/></Route>
                </Switch>
            </div>
        </Router>
    )
}

// function About() {
//     return (
//         <div className="container mt-5"><h1>About</h1></div>
//     );
// }

// function Home() {
//     return (
//         <div className="container mt-5"><h1>Home</h1></div>
//     );
// }



