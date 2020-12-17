import React from 'react'
import FormSucursal from '../form-sucursal/form-sucursal'

import {MainDirectoryContainer} from  './main-directory.styles'

const MainDirectory = () =>{

    return(
        <MainDirectoryContainer>
            <h1>MAIN</h1>
            <FormSucursal/>
        </MainDirectoryContainer>
    )
}

export default MainDirectory