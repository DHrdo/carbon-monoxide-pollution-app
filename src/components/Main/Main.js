import React from "react";
import { Intro } from "../Intro/Intro";
import { Form } from "../Form/Form";
import { Footer } from "../Footer/Footer";

export const Main = () => {
    return (
        <main className="main">
            <Intro />
            <Form />
            <Footer />
        </main>
    );
}