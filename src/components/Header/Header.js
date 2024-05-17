import React from "react";
import { Link } from "react-router-dom";

export const Header = ({
    setDataCollection,
}) => {

    return (
        <div className="header">
            <div className="wrap-header">
                <h1 className="header-text">
                    I L
                    <Link to="/" onClick={() => setDataCollection([])}>
                        <div className="wrap-header-logo">
                            <img className="header-logo rotate-center" src={process.env.PUBLIC_URL + "/images/world-icon.png"} alt="Home" />
                        </div>
                    </Link>
                    VE EARTH
                </h1>
            </div>
        </div>
    )
}