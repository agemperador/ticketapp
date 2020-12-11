import React from 'react'

import {Link} from 'react-router-dom'

import './menu.styles.scss'

//,'Tickets','Proveedor','Config','Perfil','Cerrar Sesión'

const links = [
    {id:1,name:'home',link:'/'},
    {id:2,name:'Sucursales',link:'/sucursales'},
    {id:3,name:'Queues',link:'/queues'}
]


const Menu = () =>{

    return(
        <div className='menu'>
                {links.map(({id,name,link})=><Link key={id} to={link} className='link-menu'>{name}</Link>)}
        </div>
    )
} 

export default Menu