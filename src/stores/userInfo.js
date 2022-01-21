
import {makeAutoObservable} from 'mobx'

const userInfo = makeAutoObservable({
    username:'',
    id: 0,
    isVisitor:false,
    isLogin: false,
    changeUseInfo(data){
        const {username,id} = data
        this.username = username
        this.id = id
        this.isLogin = true
    },
    setVisitor(bool){
        this.isVisitor = bool
    }
})

export default userInfo