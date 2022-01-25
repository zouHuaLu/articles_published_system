import axios from '../http/axios'

// 登录后台管理
export const login = (data)=>{
    return axios({
        url:'blog/api/publish/login',
        method:'POST',
        data:data
    })
}

// 写文章——发布
export const addArticle = (data)=>{
    return axios({
        url:'blog/api/publish/addArticle',
        method:'POST',
        data,
    })
}

// 获取所有文章
export const getAllArticles = () =>{
    return axios({
        url:'blog/api/publish/getAllArticles',
        method:'GET',
    })
}

// 删除一篇文章
export const deleteArticle = (id)=> {
    return axios({
        url:'blog/api/publish/deleteArticle',
        method:'POST',
        data:id
    })
}