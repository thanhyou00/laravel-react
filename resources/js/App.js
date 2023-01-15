import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const HomePage = () => (
    <div>
        <Link to={"/profile"}>Profile Page</Link>
        <h1>This is home page component</h1>
    </div>
);
const ProfilePage = () => (
    <div>
        <Link to={"/"}>Home Page</Link>
        <h1>This is profile component</h1>
    </div>
);

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
