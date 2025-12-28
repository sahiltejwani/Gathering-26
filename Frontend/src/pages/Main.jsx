import React from 'react'
import Home from './Home'
import Sports from './Sports'
import Events from './Events'
import Theme from './Theme'

const Main = () => {
    return (
        <div>
            <div className="" id="home">
                <Home />
            </div>
            <div className="" id='theme'>
                <Theme />
            </div>
            <div className="" id='sports'>
                <Sports />
            </div>
            <div className="" id='events'>
                <Events />
            </div>
        </div>
    )
}

export default Main