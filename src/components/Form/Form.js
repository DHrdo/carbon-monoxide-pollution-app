import React, { useState } from "react";
import { StateForm } from "./StateForm/StateForm";
import { SpecificPlaceForm } from "./SpecificPlaceForm/SpecificPlaceForm";


export const Form = ({
        formUserChoice,
        setFormUserChoice,
        selectionState, 
        setSelectionState, 
        beginDate, 
        setBeginDate, 
        endDate, 
        setEndDate,
        longitude,
        setLongitude,
        latitude,
        setLatitude,
        sendBtnClicked,
        sendData,
        fetchIsLoading,

        setStateName,
        stateName,
    }) => {

    const getUserChoice = (choice) => {
        setFormUserChoice(choice);
    };

    return (
        <div className="form">
            <div className="switch-form">
                <h2 className="switch-form-title">Calcola O2</h2>

                <div className='switch-form-content'>
                    <div className={`left-side ${formUserChoice === 'state_form' ? 'state-form-selected' : null}`} onClick={() => getUserChoice('state_form')}>
                        <h3 className="left-side-title">Di uno Stato</h3>
                    </div>

                    <div className={`right-side ${formUserChoice === 'specific_place_form' ? 'specific-place-form-selected' : null}`} onClick={() => getUserChoice('specific_place_form')}>
                        <h3 className="right-side-title">Di un luogo <br />specifico</h3>
                    </div>
                </div>
            </div>

            {
                formUserChoice === 'state_form' ?
                    <StateForm
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        beginDate={beginDate}
                        setBeginDate={setBeginDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        sendBtnClicked={sendBtnClicked}
                        sendData={sendData}
                        fetchIsLoading={fetchIsLoading}

                        setStateName={setStateName}
                        stateName={stateName}
                    /> :
                    <SpecificPlaceForm
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        setLongitude={setLongitude}
                        longitude={longitude}
                        setLatitude={setLatitude}
                        latitude={latitude}
                        beginDate={beginDate}
                        setBeginDate={setBeginDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                        sendBtnClicked={sendBtnClicked}
                        sendData={sendData}
                        fetchIsLoading={fetchIsLoading}
                    />
            }
        </div>
    );
}