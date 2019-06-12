import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import Card from './card'
import Actions from './actions'
import Repos from './repos'

const AppConteiner = ({ userinfo, repos, starred ,isFatching, hendleSearch, getRepos, getStarred }) => (
    <div className="App" >
        <Search isDisabled={ isFatching } hendleSearch={ hendleSearch } />
        <div className="main">
            <div className="container">
                { isFatching && <div> Carregando... </div>}
                { !!userinfo && <Card userinfo={ userinfo } />  }
              
                <div className="box-conteudo">
                    { !!userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred } /> }
                    { !!repos.length && <Repos className="repos" title="Repositórios" repos={repos} /> }
                    { !!starred.length && <Repos className="starred" title="Favoritos" repos={starred} /> }
                </div>

            </div>
        </div>
    </div>
)

AppConteiner.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired,
    isFatching: PropTypes.bool.isRequired,
    hendleSearch: PropTypes.func.isRequired,
    getRepos: PropTypes.func.isRequired,
    getStarred: PropTypes.func.isRequired
}
export default AppConteiner 