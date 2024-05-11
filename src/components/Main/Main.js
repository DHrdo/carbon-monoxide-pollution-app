import React from "react";
import { Intro } from "../Intro/Intro";
import { Form } from "../Form/Form";

export const Main = () => {
    return (
        <main className="main">
            <Intro />
            <Form />
        </main>
    );
}