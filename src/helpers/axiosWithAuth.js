import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");

    return axios.create({
        baseURL: "https://water-myplants-2.herokuapp.com/api",
        headers: {
            authorization: token,
        },
    })
}