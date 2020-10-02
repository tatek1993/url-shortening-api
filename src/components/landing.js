import React from 'react';
import Working from '../images/illustration-working.svg'

const Landing = () => {


    return (
        <div>
            <div className="landing">
                <div className='desktop-landing-info'>
                    <h1>More than just<br></br> shorter links</h1>
                    <p className='desktop-landing-txt'>
                        Build your brand’s recognition and get detailed <br></br>
                        insights on how your links are performing.
                    </p>
                    <p className='button'>Get Started</p>
                </div>
                <div>
                    <img src={Working} alt="More than just shorter links" />
                </div>
            </div>
            <div className='link-bar-container'>
                <div className='link-bar'>
                    <input placeholder='Shorten a link here...'></input>
                    <p className='input-button'>Shorten It!</p>
                </div>
            </div>

        </div>
    )
}

export default Landing;