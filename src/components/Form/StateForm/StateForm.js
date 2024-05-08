import React, { useState, useEffect } from "react";
import statesList from './../../../states.json'

export const StateForm = ( { selectionState, setSelectionState, beginDate, handleBeginDate, endDate, handleEndDate, sendBtnClicked, sendData } ) => {

    //* GESTIONE DELLA SELEZIONE DELLO STATO

    const handleStateSelection = (event) => {
        setSelectionState(event.target.value);
    };

    const mapStatesNames =
        [
            <option key="default" value="">Seleziona uno stato</option>,
            ...statesList.map(state => <option key={state.Code} value={state.Code}> {`${state.Code} - ${state.Name}`} </option>)
        ];
    //---------------------------------------------------------------------------------------------------------------


    //* STYLE IMG
    const imgStyles = {
        width: '25px',
        marginLeft: '3px',
        marginRight: '3px',
        flexDirection: 'row'
    };


    return (
        <div className="state-form">
            <div className="state-form-content">

                <label htmlFor="selected_state">Stato: </label>
                <select
                    className={(sendBtnClicked && !selectionState) ? 'error' : ''}
                    name="selected_state"
                    id="selected_state"
                    onChange={(event) => handleStateSelection(event)}>
                    {mapStatesNames}
                </select>

                <br />

                <label htmlFor="begin_date">Data Inizio: </label>
                <input 
                    className={(sendBtnClicked && !beginDate) ? 'error' : ''}
                    type="date" 
                    id="begin_date" 
                    name="begin_date" 
                    onChange={handleBeginDate} 
                />
                <br />
                <label htmlFor="end_date">Data Fine: </label>
                <input 
                    className={(sendBtnClicked && !endDate) ? 'error' : ''}
                    type="date" 
                    id="end_date" 
                    name="end_date" 
                    onChange={handleEndDate} 
                />

                <button className="submit" type="submit" onClick={(e) => sendData(e)}>
                    CALCOLA
                    <img
                        src="https://www.htmlcssbuttongenerator.com/iconExample-text-align-left-lined.svg"
                        style={imgStyles}
                        alt="Calcola"
                    />
                </button>
            </div>
        </div>
    );
};