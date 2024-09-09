import React from "react";
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer() {
    return (
        <div>
            <div className="App-footer">
                Copyright {getFullYear()} - {getFooterCopy()}
            </div>
        </div>
    );
}

export default Footer;