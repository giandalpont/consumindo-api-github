import React from 'react'
import PropTypes from 'prop-types'
import Btn from './btn'
import Fa from './fa'

const Card = ({ userinfo })=>{
    return(
        <div className="card card-profile text-center">
            <img alt="" className="card-img-top" src="https://unsplash.it/340/160?image=354" />
            <div className="card-block">
                <img alt="" className="card-img-profile" src={userinfo.photo } />
                <h4 className="card-title">
                    <a href={`https://github.com/${userinfo.login}`} rel="noopener noreferrer" >
                    {userinfo.username}
                    </a>
                    <br />
                    <br />
                    <small>{ userinfo.login }</small>
                    <div className="btn-box">
                        <Btn btnName={'Repositório'} link={`https://github.com/${userinfo.login}?tab=repositories`}  target="_black" />
                        <Btn btnName={'Favoritos'} link={`https://github.com/${userinfo.login}?tab=stars`} target="_black" />
                    </div>
                </h4>
                <div className="card-links">
                    <Fa name={'Repositórios'} number={ userinfo.repos }  />
                    <Fa name={'Seguidores'} number={ userinfo.followers } />
                    <Fa name={'Seguindo'} number={ userinfo.following } />
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    })
}

export default Card