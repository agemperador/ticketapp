import React from 'react'
import apis from '../../axios/sucursales'

const FormSucursal = () => {

    const postSucursal = async ()=>{
        await apis.postData('sucursal',{idSucursal: 'Almorzando con tu vieja 2', idProveedor:'lucas'})
    }
    const postQueue = async ()=>{
        await apis.postData('queue',{idSucursal: 'Almorzando con tu vieja 2'})
    }

    return (
        <div>
            <button onClick={postSucursal}>
                Crear Sucursal
            </button>
            <button onClick={postQueue}>
                Crear Cola
            </button>
        </div>
    )
}

export default FormSucursal
