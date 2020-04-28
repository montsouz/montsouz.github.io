import React from 'react'
import Card from '../components/Card/Card'

const Components = () => {

    const titles = [
        '<About/>',
        "print( 'Experience' )",
        'Skills() & Interests()',
        'get_contact()'
    ];

  return (
      <div>
          <div className={'content-title'}>Guilherme Monteiro</div>
          <div className={'card-title'}>{titles[0]}</div>
          <Card>
              <p className={'card-content'}>
                  As a developer, what really makes me happy is to build tools that helps people. I really love to
                  learn new technologies and I'm constantly looking to put new ideas out of the paper. If you're interested,
                  there is a big chance we´re going to spend hours talking about tech. I also love swimming, cooking
                  and heavy music. Feel free to contact me anytime :)
              </p>
          </Card>
          <div className={'card-title'}>{titles[1]}</div>
          <Card>
              <p className={'card-content'}>
                  I'm currently working as a full-stack developer at an amazing startup in Ouro Preto, but before that
                  I was a front-end in the same company. I' ve worked in a ton of different projects using JavaScript.
                  And I also have great academic experiences with Java and Distributed Systems.
              </p>
              <a className={'general-link'}>Want to know more ?</a>
          </Card>
          <div className={'card-title'}>{titles[2]}</div>
          <Card>
              <p className={'card-content'}>
                  I clearly have more front-end experience, but I love to the backend work and solve complex problems.
                  I can also create chatbots and risk myself into Photoshop.
              </p>
              <div className={'topic'}>I'm comfortable developing with</div>
              <p className={'card-content'}>TypeScript, ReactJs, AngularJs, Svelte, Node.js + Express, Python + Django and Java.</p>
              <div className={'topic'}>Learning and would love to work with</div>
              <p className={'card-content'}>Rust, WebAssembly and NestJs</p>
              <a  href={'https://github.com/montsouz' } className={'general-link'}>Jump to Github</a>
          </Card>
          <div className={'card-title'}>{titles[3]}</div>
          <Card>
              <p className={'card-content'}>Feel free to contact me anytime :)</p>
              <a href={'https://www.linkedin.com/in/montsouz/'} className={'general-link'}>Add me on LikedIn !</a>
              <p style={{fontSize: '14px'}}>or</p>
              <a href="mailto:guilhermesouzamont@gmail.com?subject=Hello Guiherme&body=Hi." target="_blank" rel="noopener noreferrer" className={'general-link'}>Send me an email !</a>
          </Card>
      </div>
  )
};


export default Components
