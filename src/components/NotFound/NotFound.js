import React from "react";

export const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <h2 className="not-found-subtitle">Pagina Non Trovata</h2>
            <p className="not-found-description">
                Siamo spiacenti, ma la pagina che stai cercando non esiste. <br />
                Prova a selezionare un'altra data.
            </p>
        </div>
    );
};