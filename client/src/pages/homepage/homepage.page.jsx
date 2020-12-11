import React from 'react'

import MainDirectory from '../../components/main-directory/main-directory.component'

import './homepage.styles.scss'

const Homepage = () => {

    return(
    <div className='homepage'>
        <div id="mapid"></div>

        <MainDirectory/>
    </div>
    )
}

export default Homepage; 