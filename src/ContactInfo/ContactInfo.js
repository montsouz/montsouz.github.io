import React from 'react'
import GithubLogo from '../assets/github.png'
import LinkedinLogo from '../assets/linkedin.svg'

const ContactInfo = () => {
    return (
        <div className={'main-title-logos-container'}>
            <img className={'main-title-logos '} src={GithubLogo} alt={'github logo'}/>
            <img className={'main-title-logos '} src={LinkedinLogo} alt={'linkedin logo'}/>
        </div>
    )
};


export default ContactInfo
