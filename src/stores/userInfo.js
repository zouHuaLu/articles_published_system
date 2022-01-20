
import {makeAutoObservable} from 'mobx'

const userInfo = makeAutoObservable({
    name:'zouHuaLu',
    age: 27,
    changeAge(age){
        this.age = age
    }
})

export default userInfo