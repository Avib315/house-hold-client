import axios from "axios"
export async function axiosReq({ method = "POST", body = {}, url = "" }) {
    try {

        const  {data} = await axios.request({ method, body, url, baseURL: "http://localhost:3001/" })
        return data
    }
    catch (err) {
        console.error("______AXIOS REQUEST ERROR functions/webApi.js ______")
        console.error(err)
    }
}