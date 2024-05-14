import React from "react";
import { Intro } from "../Intro/Intro";
import { Form } from "../Form/Form";

export const Main = (
    {
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

        stateName,
        setStateName
    } ) => {
    return (
        <main className="main">
            <Intro />
            <Form
                formUserChoice={formUserChoice}
                setFormUserChoice={setFormUserChoice}
                selectionState={selectionState}
                setSelectionState={setSelectionState}
                beginDate={beginDate}
                setBeginDate={setBeginDate}
                endDate={endDate}
                setEndDate={setEndDate}
                longitude={longitude}
                setLongitude={setLongitude}
                latitude={latitude}
                setLatitude={setLatitude}
                sendBtnClicked={sendBtnClicked}
                sendData={sendData}
                fetchIsLoading={fetchIsLoading}

                stateName={stateName}
                setStateName={setStateName}
            />
        </main>
    );
}