import axios from 'axios'
import apiUrl from './apiConfig'

const api = axios.create({
    baseURL: apiUrl
})



// ------ AUTH ------

export const loginUser = async (loginData) => {
    const res = await api.post('/auth/login', loginData)
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
}

export const registerUser = async (registerData) => {
    const res = await api.post('/users/', registerData)
    localStorage.setItem('authToken', res.data.token)
    api.defaults.headers.common.authorization = `Bearer ${res.data.token}`
    return res.data.user
}

export const verifyUser = async () => {
    const token = localStorage.getItem('authToken')
    if (token) {
        api.defaults.headers.common.authorization = `Bearer ${token}`
        const res = await api.get('/auth/verify')
        return res.data
    }
    return false
}



// ------ ARTISTS ------

export const getUsers = async () => {
    const res = await axios.get(`${apiUrl}/users`)
    return res
}

export const getUserById = async (user_id) => {
    const res = await axios.get(`${apiUrl}/users/${user_id}`)
    return res
}

export const editUser = async (user_id, formData) => {
    console.log(formData)
    try {
    const res = await api.put(`/users/${user_id}`, formData)
    return res
    } catch(e) {
        console.log(e.message)
    }
}

export const deleteUser = async (user_id) => {
    const res = await api.delete(`/users/${user_id}`)
    return res.data
}



// ------ 3D LISTINGS ------

export const getDigitalThreeDs = async () => {
    const res = await axios.get(`${apiUrl}/three_digital_listings`)
    return res
}

export const getThreeDListingById = async (listing_id) => {
    const res = await axios.get(`${apiUrl}/three_digital_listings/${listing_id}`)
    return res
}

export const create3dListing = async (threeDigListData) => {

    const token = localStorage.getItem('authToken')
    const res = await axios({
        url: `${apiUrl}/three_digital_listings`,
        headers: {
            'Authorization': `Bearer ${token}`
        }, 
        method: 'POST',
        data: (threeDigListData)
    })
    return res
}



// ------ 2D LISTINGS ------

export const getDigitalTwoDs = async () => {
    const res = await axios.get(`${apiUrl}/two_digital_listings`)
    return res
}

export const getTwoDListingById = async (listing_id) => {
    const res = await axios.get(`${apiUrl}/two_digital_listings/${listing_id}`)
    return res
}

export const create2dListing = async (listingData) => {
    const res = await api.post('/two_digital_listings', listingData)
    return res
}
