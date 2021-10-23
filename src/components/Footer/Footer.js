import React from "react";
import "./Footer.css";
import PrivacyModal from "./PrivacyModal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faInstagram,
    faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="item1">
                    <PrivacyModal />
                </div>

                <div className="item2">
                    <span style={{ paddingRight: 5 }}>Copyright </span>
                    <FontAwesomeIcon icon={faCopyright} />{" "}
                    <span style={{ paddingLeft: 5 }}>
                        {new Date().getFullYear()} YourCompany. All Rights
                        Reserved.
                    </span>
                </div>
                
                <a
                    href="https://www.facebook.com/animatrainingok/"
                    target="_blank"
                    className="item4"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.instagram.com/anima_training/"
                    target="_blank"
                    className="item5"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a> 

                {false && <PrivacyModal click={true} />}
            </div>
        </footer>
    );
};

export default Footer;