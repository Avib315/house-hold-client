import axios from "axios"

export async function isAuthenticated() {
    try {
        console.log('Checking token...');
        const response = await axiosReq({ method: 'GET', url: "user/isAuthenticated", })
        return response;
    } catch (error) {
        console.error('Error checking token:', error);
        return false;
    }
};

export async function axiosReq({ method = "POST", body = {}, url = "" }) {
    try {
        const data = await axios.request({
            method,
            data: body,
            url,
            baseURL: "https://household-server-5ccw.onrender.com/api",
            // baseURL: "http://localhost:3001/api/",
            withCredentials: true
        })
        return data.data
    }
    catch (err) {
         console.error("______AXIOS REQUEST ERROR functions/webApi.js ______")
        console.error(err)
        return null;
    }
}