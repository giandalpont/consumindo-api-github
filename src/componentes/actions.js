import React from 'react'
import PropTypes from 'prop-types'

const Actions = ({ getRepos, getStarred })=>(
    <div className="btn-topo">
        <button className="btn" onClick={ getRepos }><h2>Ver Reposotórios</h2></button>
        <button className="btn" onClick={ getStarred }><h2>Ver Favoritos</h2></button>
    </div>
)

Actions.propTypes = {
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}

export default Actions