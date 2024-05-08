import React, { useState } from "react";
import { StateForm } from "./StateForm/StateForm";
import { SpecificPlaceForm } from "./SpecificPlaceForm/SpecificPlaceForm";

export const Form = () => {


    const [userChoice, setUserChoice] = useState('state_form');

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
                    <StateForm /> :
                    <SpecificPlaceForm />
            }
        </div>
    );
}