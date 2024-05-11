import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="wrap-header">
                <h1 className="header-text">
                    I L
                    <Link to={"/"}>
                        <div className="wrap-header-logo">
                            <img className="header-logo rotate-center" src={process.env.PUBLIC_URL + "/images/world-icon.png"} />
                        </div>
                    </Link>
                    VE EARTH
                </h1>
            </div>
        </div>
    )
}