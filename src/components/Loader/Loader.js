import React from "react";
import { Helmet } from "react-helmet";

export const Loader = () => {
    return (
        <div className="spinner">
            <Helmet>
                <title>Loading...</title>
            </Helmet>
            <div className="spinner-container"></div>
        </div>
    );
};