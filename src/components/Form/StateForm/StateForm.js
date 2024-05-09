import React, { useState, useEffect } from "react";
import statesList from './../../../states.json'

export const StateForm = (
    {
        selectionState,
        setSelectionState,
        beginDate,
        setBeginDate,
        endDate,
        setEndDate,
        sendBtnClicked,
        sendData
    }) => {

    const mapStatesNames =
        [
            <option key="default" value="">Seleziona uno stato</option>,
            ...statesList.map(state =>
                <option
                    key={state.Code}
                    value={state.Code}> {`${state.Code} - ${state.Name}`}
                </option>)
        ];
    //---------------------------------------------------------------------------------------------------------------


    return (
        <div className="state-form">
            <div className="state-form-content">

                <label htmlFor="selected_state">Stato: </label>
                <select
                    className={(sendBtnClicked && !selectionState) ? 'error' : ''}
                    name="selected_state"
                    id="selected_state"
                    onChange={(e) => setSelectionState(e.target.value)}>
                    {mapStatesNames}
                </select>

                <br />

                <label htmlFor="begin_date">Data Inizio: </label>
                <input
                    className={(sendBtnClicked && !beginDate) ? 'error' : ''}
                    type="date"
                    id="begin_date"
                    name="begin_date"
                    onChange={(e) => setBeginDate(e.target.value)}
                />
                <br />
                <label htmlFor="end_date">Data Fine: </label>
                <input
                    className={(sendBtnClicked && !endDate) ? 'error' : ''}
                    type="date"
                    id="end_date"
                    name="end_date"
                    onChange={(e) => setEndDate(e.target.value)}
                />

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
            </div>
        </div>
    );
};