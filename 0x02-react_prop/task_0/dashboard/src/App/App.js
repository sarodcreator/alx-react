import React from "react";
import Header from "../Header/Header";
import Notifications from "../Notifications/Notifications";
import Login from "../Login/Login"
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <Notifications />
            <div className="App">
                <Header />
                <Login />
                <Footer />
            </div>
        </React.Fragment>
    );
}

export default App;