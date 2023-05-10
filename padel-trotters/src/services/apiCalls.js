import axios from 'axios';

const root = 'http://localhost:4000/'

//Loguearse
export const loguin = async(body)=>{
    return await axios.post(`${root}auth/login`, body);
};

//Registrarse
export const register = async (body) => {
    return await axios.post(`${root}auth/register`, body);
  };

//Ver perfil usuario
export const viewProfile = async(token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.get(`${root}user/profile`, config);
};

//Ver las pistas
export const viewTracks = async(token) => {
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.get(`${root}user/tracks`, config);
};

//Ver los entrenadores
export const viewCoaches = async(token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    // let res = await axios.get(`${root}user/coaches`, config);
    // console.log(res);
    // return res
    return await axios.get(`${root}user/coaches`, config);
}

//Ver usuarios como admin
export const viewAllUsers = async(token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.get(`${root}admin/users`, config);
}

//Crear una partida
export const newMatch = async(body, token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.post(`${root}user/match`, body, config);
}

//Ver reservas
export const viewMatches = async(token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.get(`${root}user/match`, config);
}

//Borrar una reserva
export const deleteMatch = async(params, token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.delete(`${root}user/match/${params}`, config)
}

//Modificar una partida
export const updateMatches = async(body, token)=>{
    let config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    return await axios.put(`${root}user/match`, body, config)
}