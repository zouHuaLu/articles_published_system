import axios from 'axios'

let baseURL = ''
if (process.env.NODE_ENV === "production") {
    // 线上
    baseURL = "http://139.224.190.142:8082";
  } else if (process.env.NODE_ENV === "development") {
    // 本地
    baseURL = "http://127.0.0.1:8082/";
  }

const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use((config)=>{
    return config
},(err)=>{
    return Promise.reject(err)
})

instance.interceptors.response.use((response)=>{
    if(response.status === 200){
        return response.data
    }else if(response.status === 404) {
        return {
            ...response,
            errMsg:'资源部存在'
        }
    }
},(err)=>{
    const {response} = err
    if(response){
        return Promise.reject(response.data)
    }else{
        return {
            ...response,
            msg:'网络连接错误，请稍后再试！'
        }
    }
})

export default instance