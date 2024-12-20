import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

//Khai bao 3 page tuong ung 3 function based components.
export default function BasicExample(){
    return(
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/seafood">SeaFood</Link>
                    </li>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                </ul>

                <hr />
                {/* phan tu Switch se chua danh sach cac phan tu Route. va se render ra phan nao khop voi current URL. 
                Nen su dung phan tu <Switch> moi khi ta muon co nhieu <Route> nhung chi su dung 1 Route tai 1 thoi diem */}

                <Switch>
                    <Router exact path="/">
                        <Home></Home>
                    </Router>
                    <Router exact path="/about">
                        <About></About>
                    </Router>
                    <Router exact path="/seafood">
                        <SeaFood></SeaFood>
                    </Router>
                    <Router exact path="/food">
                        <Food></Food>
                    </Router>
                </Switch>
            </div>
        </Router>
    );
}

function Home() {
    return(
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return(
        <div>
            <h2>About</h2>
        </div>
    );
}

function SeaFood() {
    return(
        <div>
            <h2>Hai san viet nam</h2>
        </div>
    );
}

function Food() {
    return(
        <div>
            <h2>Mai Ngoc, Tieu Vi</h2>
        </div>
    );
}