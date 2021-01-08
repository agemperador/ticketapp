import React , {useState} from 'react'
import apis from '../../axios/sucursales'

const FormSucursal = ({refreshPage}) => {
    
    const [location, setLocation] = useState('')
    const [createSuc, setCreateSuc] = useState(false)


    const postSucursal = async ()=>{
        refreshPage()
        await apis.postData('sucursal',{idSucursal:'Almorzando con tu vieja 2',idProveedor:'lucas', locationText:location})
    }
    const postQueue = async ()=>{
        await apis.postData('queue',{idSucursal: 'Almorzando con tu vieja 2'})
    }

    const handleChange = (text) =>{
        setLocation(text)
    }

    const changeCreateSucState = ()=>{
        console.log(createSuc)
        setCreateSuc(!createSuc) 
    }

    return (
        <div>
            <div className="controllers">
                <button onClick={changeCreateSucState}>
                    Crear Sucursal
                </button>
                <button onClick={postQueue}>
                    Crear Cola
                </button>
                {createSuc ? 
                <div>
                <input type="text" name="location" onChange={event => handleChange(event.target.value)}  id="" placeholder='lugar'/>
                <button onClick={postSucursal}>
                Crear
            </button>
            </div>
                : null
}
            </div>
        </div>
    )
}

export default FormSucursal
