import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:4000',
})

//Es generalizable a cualquier cosa, en vez de user pongo otra cosa

export const getData = (path) => api.get(`/${path}`)

export const putData = (path, id) => api.put(path, { idTicketbook: id })


const apis = {
    getData,
    putData
}

export default apis;