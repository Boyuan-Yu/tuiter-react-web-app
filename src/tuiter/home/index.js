import React from "react";
import TuitList from "../tuits/index"
import WhatsHappening from "./whats-happening"

import "./index.css";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitList/>
        </>
    );
};
export default HomeComponent;