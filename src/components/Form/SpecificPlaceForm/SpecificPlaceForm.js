import React from "react";

export const SpecificPlaceForm = () => {

    const imgStyles = {
        width: '25px',
        marginLeft: '3px',
        marginRight: '3px',
        flexDirection: 'row'

    };
    return (
        <div className="specific-place-form">
            <div className="specific-place-form-content">

                <label htmlFor="longitude">Longitudine: </label>
                <input type="text" id="longitude" name="longitude" />
                <br />
                <label htmlFor="latitude">Latitudine: </label>
                <input type="text" id="latitude" name="latitude" />
                <br />
                <label htmlFor="from_date">Data Inizio: </label>
                <input type="date" id="from_date" name="from_date" />
                <br />
                <label htmlFor="to_date">Data Fine: </label>
                <input type="date" id="to_date" name="to_date" />

                <button className="submit" type="submit">
                    CALCOLA
                    <img src="https://www.htmlcssbuttongenerator.com/iconExample-text-align-left-lined.svg" style={imgStyles} />
                </button>
            </div>
        </div>
    );
};