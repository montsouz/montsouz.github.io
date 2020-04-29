import React from "react";
import ContactInfo from './ContactInfo/ContactInfo'

const MainTitle = ({action}) => {

    const originalMainTitle = "<\Hello there! I'm Guilherme Monteiro, Full-Stack developer/>";
    const mobileText = [
        '<Hello there! ',
        'I\'m Guilherme Monteiro,',
        'Full-Stack developer/>'
    ];

    return (
        <div>
            <div className={'typewriter'}>{originalMainTitle}</div>
            <div className="css-typing">
                <p>
                    {mobileText[0]}
                </p>
                <p>
                    {mobileText[1]}
                </p>
                <p>
                    {mobileText[2]}
                </p>
            </div>
            <div className={'with-more-space'}>
                <a className={'general-link with-more-space'} onClick={() => action()}>Know more</a>
            </div>
            <ContactInfo/>
        </div>
    )
};

export default MainTitle
