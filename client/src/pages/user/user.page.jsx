import React ,{useState}from 'react'
import FormSucursal from '../../components/form-sucursal/form-sucursal'
import SucursalList from '../../components/sucursal-list/sucursal-list.component'


const User = () => {

    const [refresh,setRefresh] = useState(false)

    const refreshPage = ()=>{
        setRefresh(!refresh)
    }

    return (
        <div>
            <FormSucursal refreshPage={refreshPage}/>
            {
            //COMO ACTUALIZAR EL FETCH CUANDO SE CREA UNA SUCURSAL
            }
            <SucursalList refresh= {refresh}/>
        </div>
    )
}

export default User
