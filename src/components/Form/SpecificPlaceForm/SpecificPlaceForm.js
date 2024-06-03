import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";

// SpecificPlaceForm component
export const SpecificPlaceForm = ({
    // Props
    dataCollection,
    longitude,
    setLongitude,
    latitude,
    setLatitude,
    beginDate,
    setBeginDate,
    endDate,
    setEndDate,
    sendBtnClicked,
    sendData,
    isDateValid,
    dateError,
}) => {
    
    // Function to handle Link to results based on conditions
    const handleLinkTo = () => {
        if (!dataCollection) return '/notfound'; // If no data, go to notfound
        if (!isDateValid || !longitude || !latitude) return '/'; // If date is not valid, go to homepage

        return '/results'; // Otherwise, go to results
    };

    return (
        <div className="specific-place-form">
            <div className="specific-place-form-content">

                {/* Longitude input */}
                <label htmlFor="longitude">Longitudine: </label>
                <input
                    required
                    className={(sendBtnClicked && !longitude) ? 'error' : ''}
                    type="text"
                    id="longitude"
                    name="longitude"
                    placeholder="Inserisci la Longitudine (es. 12.345)"
                    onChange={(e) => setLongitude(e.target.value)}
                />

                <br />

                {/* Latitude input */}
                <label htmlFor="latitude">Latitudine: </label>
                <input
                    required
                    className={(sendBtnClicked && !latitude) ? 'error' : ''}
                    type="text"
                    id="latitude"
                    name="latitude"
                    placeholder="Inserisci la Latitudine (es. 7.654)"
                    onChange={(e) => setLatitude(e.target.value)}
                />

                <br />
                <p className="date-limitation">*Seleziona da un minimo 30 giorni a un massimo 100 giorni</p>
                <br />

                {/* Start date input */}
                <label htmlFor="from_date">Data Inizio: </label>
                <input
                    required
                    className={(sendBtnClicked && !beginDate) ? 'error' : ''}
                    type="date"
                    id="from_date"
                    name="from_date"
                    min="2019-01-01"
                    max="2023-11-23"
                    onChange={(e) => setBeginDate(e.target.value)}
                />

                <br />

                {/* End date input */}
                <label htmlFor="to_date">Data Fine: </label>
                <input
                    className={(sendBtnClicked && !endDate) ? 'error' : ''}
                    type="date"
                    id="to_date"
                    name="to_date"
                    min="2019-01-01"
                    max="2023-11-23"
                    onChange={(e) => setEndDate(e.target.value)}
                />

                {
                dateError && beginDate && endDate && 
                    <div className="ui-error-container">
                        <h3 className="ui-error-description error">{dateError}</h3>
                    </div>
                }

                {/* Loader component */}
                {sendBtnClicked && isDateValid && <Loader />}




                {/* Link to results */}
                <Link to={handleLinkTo()}>
                    <button
                        className="submit"
                        type="submit"
                        onClick={(e) => {
                            if (longitude && latitude) sendData();
                            else return
                            }}
                    >
                        CALCOLA
                        <img
                            className="btn-icon"
                            src="https://www.htmlcssbuttongenerator.com/iconExample-text-align-left-lined.svg"
                            alt="submit"
                        />
                    </button>
                </Link>
            </div>
        </div>
    );
};