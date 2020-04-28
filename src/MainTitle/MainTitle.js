import React from "react";
import ContactInfo from './ContactInfo/ContactInfo'

const MainTitle = () => {

    const originalMainTitle = "<\Hello there! I'm Guilherme Monteiro, Full-Stack developer/>";

    return (
        <div>
            <div className={'typewriter'}>{originalMainTitle}</div>
            <ContactInfo/>
            <button className={'primary-button'}>Know more</button>
        </div>
    )
};

export default MainTitle
