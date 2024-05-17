import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../Loader/Loader";

export const SpecificPlaceForm = (
    {
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
        fetchIsLoading,
    }) => {

    return (
        <div className="specific-place-form">
            <div className="specific-place-form-content">

                <label htmlFor="longitude">Longitudine: </label>
                <input
                    className={(sendBtnClicked && !longitude) ? 'error' : ''}
                    type="text"
                    id="longitude"
                    name="longitude"
                    placeholder="Inserisci la Longitudine (es. 12.345)"
                    onChange={(e) => setLongitude(e.target.value)}
                />

                <br />

                <label htmlFor="latitude">Latitudine: </label>
                <input
                    className={(sendBtnClicked && !latitude) ? 'error' : ''}
                    type="text"
                    id="latitude"
                    name="latitude"
                    placeholder="Inserisci la Latitudine (es. 7.654)"
                    onChange={(e) => setLatitude(e.target.value)}
                />

                <br />

                <label htmlFor="from_date">Data Inizio: </label>
                <input
                    className={(sendBtnClicked && !beginDate) ? 'error' : ''}
                    type="date"
                    id="from_date"
                    name="from_date"
                    onChange={(e) => setBeginDate(e.target.value)}
                />

                <br />

                <label htmlFor="to_date">Data Fine: </label>
                <input
                    className={(sendBtnClicked && !endDate) ? 'error' : ''}
                    type="date"
                    id="to_date"
                    name="to_date"
                    onChange={(e) => setEndDate(e.target.value)}
                />

                {fetchIsLoading && <Loader />}

                <Link to={!dataCollection ? '/notfound' : '/results'}>
                    <button
                        className="submit"
                        type="submit"
                        onClick={(e) => sendData(e)}
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