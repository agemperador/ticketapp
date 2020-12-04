import React from 'react'

import SucursalList from '../../components/sucursal-list/sucursal-list.component'

import './sucursales.styles.scss'

class Sucursales extends React.Component {


    
    render(){

        return(
            <div className='sucursal-page'>
                <SucursalList/>
            </div>
        )}
}

export default Sucursales; 