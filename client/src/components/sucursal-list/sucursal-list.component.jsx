import React, {useEffect,useState} from 'react'

import apis from '../../axios/sucursales'

import matu from '../../assets/matu.png'

import './sucursal-list.styles.scss'
import Button from '../boton/button.component'


const SucursalList = () =>{
    
    const [data,setData] = useState('')
    const [cutTicket,setCutTicket] = useState('')
    const endpoint = 'ticket'
    const id = '5faf3801b849732808f8c0d8'


    useEffect(()=>{
            apis.getData('ticketbooks')
            .then( ticketbook =>ticketbook.data.data)
            .then(tbJson => {
                console.log(tbJson);
                setData(tbJson)
            })
        .catch(error => console.log(error)) 
    },[])


    const handleEvent = async ()=>{
        const ticket = await apis.putData('ticket','5faf3801b849732808f8c0d8')
        .then(data => data.data)
        .catch(err=>console.log(err))
        
        setCutTicket([ticket.ticketStatus,ticket._id])
    }
    return(
        
    <div className='sucursal-list'>
            <h1>Lista de tickets Cortados</h1>
            {
            cutTicket ? 
            //////////// TO DO ////////////    
            //////////// Mostrar "No hay tickets" /////////////
                <div>
                <h2>{cutTicket[1]}</h2>
                <h3>{cutTicket[0]}</h3>
                </div>
            : null
            
            }

            <h1>Lista de sucursales</h1>

            <button onClick={handleEvent}>
                    Cortar Ticket
            </button>
            
            {
                
                data ? data.map(ticketbook=>
       
                        <div className="sucursal" key={ticketbook._id+'item'}>
                            <span className='sucursal-id' key={ticketbook._id}>
                                {ticketbook.idSucursal}
                            </span>
                            
                            {//TICKETERAS
                                
                            data.length ? 
                            <>
                                    
                            <span className='ticketbook' key={ticketbook._id}>
                            
                                {ticketbook._id}
                                <p>
                                    { ticketbook.tickets.length}
                                </p>
                            </span>

                            {
                                ticketbook.tickets.length?
                                    ticketbook.tickets.map(ticket=>
                                        <span className='tickets' style={{color:`${ticket.ticketStatus==='available'?'white':'red'}`}} key={ticket._id}>
                                            { ticket.ticketStatus}
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