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
    // let res = await axios.get(`${root}user/tracks`, config);
    // console.log(res);
    // return res.data;
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