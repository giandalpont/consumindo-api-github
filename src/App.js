import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppConteiner from './componentes/app-container'

import './App.css'

class App extends Component {

    constructor(){
        super()
        this.state={
            userinfo: null,
            repos: [],
            starred: [],
            isFatching: false
        }
        this.hendleSearch = this.hendleSearch.bind(this)
    }

    getGitHubApiUrl(username, type){
        const internalUser = username ? `/${username}` : ''
        const internalType = type ? `/${type}` : ''
        return `https://api.github.com/users${internalUser}${internalType}`
    }

    hendleSearch (e){
        const value = e.target.value
        const keyCode = e.white || e.keyCode
        const ENTER = 13

        if(keyCode === ENTER){
            this.setState({ isFatching: true })

            ajax().get(this.getGitHubApiUrl(value))
            .then((result)=>{
                this.setState({
                    userinfo:{
                        username: result.name,
                        photo: result.avatar_url,
                        login: result.login,
                        repos: result.public_repos,
                        followers: result.followers,
                        following: result.following,
                    },
                    repos: [],
                    starred: []
                })
                // console.log('change', result)
            })
            .always( ()=>{
                this.setState({ isFatching: false })
            } )
        }
    }

    getRepos(type){
        return (e)=>{
            // console.log('type:', type)
            const username = this.state.userinfo.login
            ajax().get(this.getGitHubApiUrl(username,type))
            .then((result)=>{
                this.setState({
                    [type]: result.map((repo)=>({
                        name: repo.name,
                        link: repo.html_url,
                    }))
                })
            })
        }
    }

    render (){
        return (
            <AppConteiner 
                { ...this.state }
                // userinfo={ this.state.userinfo }
                // repos={ this.state.repos }
                // starred={ this.state.starred }
                // isFatching={ this.state.isFatching }
                hendleSearch={ this.hendleSearch }
                getRepos={ this.getRepos('repos') }
                getStarred={ this.getRepos('starred') }
            />
        )
    }
}

export default App
