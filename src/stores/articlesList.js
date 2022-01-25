import {makeAutoObservable} from 'mobx'

const articlesList = makeAutoObservable({
    articles: [],
    changeArticles(data){
        this.articles = data
    }
})

export default articlesList