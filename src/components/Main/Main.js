import React from "react";
import { Intro } from "../Intro/Intro";
import { Form } from "../Form/Form";

export const Main = (
    {
        // props
        dataCollection,
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
        isFetchLoading,

        stateName,
        setStateName,

        setIsDateValid,
        isDateValid,
        checkUserDateInput,
    }) => {

    return (
        <main className="main">
            <Intro />
            <Form
                dataCollection={dataCollection}
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
                isFetchLoading={isFetchLoading}

                stateName={stateName}
                setStateName={setStateName}

                setIsDateValid={setIsDateValid}
                isDateValid={isDateValid}

                checkUserDateInput={checkUserDateInput}
            />
        </main>
    );
}