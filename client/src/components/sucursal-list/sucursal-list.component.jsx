import React, {useEffect,useState} from 'react'

import apis from '../../axios/sucursales'

import matu from '../../assets/matu.png'

import './sucursal-list.styles.scss'


const SucursalList = ({refresh}) =>{
    
    const [data,setData] = useState('')
    const [fetchAgain, setFetch] =  useState(refresh)


    useEffect(()=>{
            console.log(fetchAgain)
            setFetch(refresh)
            apis.getData('sucursales')
            .then( sucursal =>{
                console.log(sucursal)
                return sucursal.data.data
            })
            .then(tbJson => {
                setData(tbJson)
            })
            .then(()=>console.log('GET'))
        .catch(error => console.log(error)) 
    },[setFetch])

    
    
    return(
        
    <div className='sucursal-list'>
            {refresh? <h1>True</h1> : <h1>False</h1>}
            
            <h1>Lista de sucursales</h1>
            
            {
                
                data ? data.map(sucursal=>
       
                        <div className="sucursal" key={sucursal._id+'item'}>
                            <h2>{sucursal.idProveedor}</h2>
                            <span className='sucursal-id' key={sucursal._id}>
                                {sucursal.idSucursal}
                            </span>
                            
                            {//TICKETERAS
                                
                            data.length ? 
                            <>
                                    
                            <span className='ticketbook' key={sucursal._id}>
                            
                                {sucursal._id}
                                <p>
                                    { sucursal.queues.length}
                                </p>
                            </span>

                            {
                                sucursal.queues.length?
                                sucursal.queues.map(queue=>
                                        <span className='tickets' style={{color:`${queue.status==='0'?'white':'red'}`}} key={queue._id}>
                                            { `${queue.name} ${queue.status}`}
                                        </span>
                                        ):'.'
                            }
                            </>
                            
                            : null
                        }
                        </div>
                    )
                
                :<img src={matu}></img>}
        </div>
        )  
}

export default SucursalList;