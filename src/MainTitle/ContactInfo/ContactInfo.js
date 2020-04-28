import React from 'react'
import GithubLogo from '../../assets/github.png'
import LinkedinLogo from '../../assets/linkedin.svg'

const ContactInfo = () => {
    return (
        <div className={'main-title-logos-container'}>
            <a href={'https://github.com/montsouz' }><img className={'main-title-logos '} src={GithubLogo} alt={'github logo'}/></a>
            <a href={'https://www.linkedin.com/in/montsouz/'}><img className={'main-title-logos '} src={LinkedinLogo} alt={'linkedin logo'}/></a>
        </div>
    )
};


export default ContactInfo
