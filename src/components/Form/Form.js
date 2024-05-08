import React, { useState } from "react";
import { APICall } from './../../Client_API';
import { StateForm } from "./StateForm/StateForm";
import { SpecificPlaceForm } from "./SpecificPlaceForm/SpecificPlaceForm";

export const Form = () => {


    const [userChoice, setUserChoice] = useState('state_form');

    const [selectionState, setSelectionState] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [sendBtnClicked, setSendBtnClicked] = useState(false);

    const handleBeginDate = (event) => {
        setBeginDate(event.target.value)
    };
    const handleEndDate = (event) => {
        setEndDate(event.target.value)
    };

    //* SEND DATA FUNCTION
    const sendData = (e) => {
        e.preventDefault();  
            APICall(selectionState, beginDate, endDate);
            setSendBtnClicked(true);
    };


    const getUserChoice = (choice) => {
        setUserChoice(choice);
    };

    return (
        <div className="form">
            <div className="switch-form">
                <h2 className="switch-form-title">Calcola O2</h2>

                <div className='switch-form-content'>
                    <div className={`left-side ${userChoice === 'state_form' ? 'state-form-selected' : null}`} onClick={() => getUserChoice('state_form')}>
                        <h3 className="left-side-title">Di uno Stato</h3>
                    </div>

                    <div className={`right-side ${userChoice === 'specific_place_form' ? 'specific-place-form-selected' : null}`} onClick={() => getUserChoice('specific_place_form')}>
                        <h3 className="right-side-title">Di un luogo <br />specifico</h3>
                    </div>
                </div>
            </div>

            {
                userChoice === 'state_form' ?
                    <StateForm
                        selectionState={selectionState}
                        setSelectionState={setSelectionState}
                        beginDate={beginDate} 
                        handleBeginDate={handleBeginDate}
                        endDate={endDate}
                        handleEndDate={handleEndDate}
                        sendBtnClicked={sendBtnClicked}
                        sendData={sendData}
                    /> :
                    <SpecificPlaceForm 
                        beginDate={beginDate} 
                        handleBeginDate={handleBeginDate}
                        endDate={endDate}
                        handleEndDate={handleEndDate}
                        sendBtnClicked={sendBtnClicked}
                        sendData={sendData}
                    />
            }
        </div>
    );
}