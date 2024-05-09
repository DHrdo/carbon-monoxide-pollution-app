import React, { useState } from "react";
import { APICallState } from './../../Client_API';
import { APICallData } from './../../Client_API';
import { StateForm } from "./StateForm/StateForm";
import { SpecificPlaceForm } from "./SpecificPlaceForm/SpecificPlaceForm";


export const Form = () => {

    //* STATES
    const [formUserChoice, setFormUserChoice] = useState('state_form'); //* state_form or specific_place_form

    const [selectionState, setSelectionState] = useState(''); //* state code
    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sendBtnClicked, setSendBtnClicked] = useState(false);

    const [fetchIsLoading, setIsFetchLoading] = useState(false);


    //* SEND DATA FUNCTION
    const sendData = (e) => {
        e.preventDefault();
        setIsFetchLoading(true);
        
        formUserChoice === 'state_form' ?
            APICallState(selectionState, beginDate, endDate, setIsFetchLoading) :
            APICallData(longitude, latitude, beginDate, endDate, setIsFetchLoading);

        setSendBtnClicked(true);
    };


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
                    /> :
                    <SpecificPlaceForm
                        setLongitude={setLongitude}
                        setLatitude={setLatitude}
                        setBeginDate={setBeginDate}
                        setEndDate={setEndDate}
                        sendData={sendData}
                        fetchIsLoading={fetchIsLoading}
                    />
            }
        </div>
    );
}