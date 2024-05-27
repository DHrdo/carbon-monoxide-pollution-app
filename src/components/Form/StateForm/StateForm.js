import React from "react";
import statesList from './../../../states.json'
import { Link } from "react-router-dom";

import { Loader } from '../../Loader/Loader';

// StateForm component
export const StateForm = ({
    // Props
    dataCollection,
    selectionState,
    setSelectionState,
    beginDate,
    setBeginDate,
    endDate,
    setEndDate,
    sendBtnClicked,
    sendData,
    setStateName,
    isDateValid,
    isFetchLoading,
}) => {

    // Map state names for dropdown options
    const mapStatesNames = [
        <option key="default" value="">Seleziona uno stato</option>, // Default option
        ...statesList.map(state =>
            <option
                key={state.Code}
                value={state.Code}
                name={state.Name}
            >
                {`${state.Code} - ${state.Name}`}
            </option>)
    ];

    // Function to handle Link to results based on conditions
    const handleLinkTo = () => {
        if (!dataCollection) return '/notfound'; // If no data, go to notfound
        if (!isDateValid) return '/'; // If date is not valid, go to homepage

        return '/results'; // Otherwise, go to results
    };

    return (
        <div className="state-form">
            <div className="state-form-content">

                {/* State selection dropdown */}
                <label htmlFor="selected_state">Stato: </label>
                <select
                    className={(sendBtnClicked && !selectionState) && 'error'}
                    name="selected_state"
                    id="selected_state"
                    onChange={(e) => {
                        setSelectionState(e.target.value);

                        // Update selected state name state
                        const selectedOption = e.target.options[e.target.selectedIndex];
                        setStateName(`${e.target.value} - ${selectedOption.getAttribute("name")}`);
                    }}
                >
                    {mapStatesNames}
                </select>

                <br />

                {/* Start date input */}
                <label htmlFor="begin_date">Data Inizio: </label>
                <input
                    className={(sendBtnClicked && !beginDate) && 'error'}
                    type="date"
                    id="begin_date"
                    name="begin_date"
                    onChange={(e) => {
                        setBeginDate(e.target.value);
                    }}
                />
                <br />

                {/* End date input */}
                <label htmlFor="end_date">Data Fine: </label>
                <input
                    className={(sendBtnClicked && !endDate) && 'error'}
                    type="date"
                    id="end_date"
                    name="end_date"
                    onChange={(e) => {
                        setEndDate(e.target.value);
                    }}
                />

                {/* Loader component */}
                {(isFetchLoading && isDateValid) && <Loader />}

                {/* Link to results */}
                <Link to={handleLinkTo()}>
                    <button
                        className="submit"
                        type="submit"
                        onClick={() => sendData()}
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
        </div >
    );
};