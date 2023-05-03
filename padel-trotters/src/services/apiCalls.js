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