import axios from '../http/axios'

export const login = (data)=>{
    return axios({
        url:'blog/api/publish/login',
        method:'POST',
        data:data
    })
}

export const addArticle = (data)=>{
    return axios({
        url:'blog/api/publish/addArticle',
        method:'POST',
        data,
    })
}