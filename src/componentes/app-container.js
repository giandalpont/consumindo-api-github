import React from 'react'
import PropTypes from 'prop-types'

import Search from './search'
import Card from './card'
import Actions from './actions'
import Repos from './repos'
import Loading from '../loading.gif'

const AppConteiner = ({ userinfo, repos, starred, isText ,isFatching, hendleSearch, getRepos, getStarred }) => (
    <div className="App" >
        <Search isDisabled={ isFatching } hendleSearch={ hendleSearch } />
        <div className="main">
            <div className="container">
                {   isText &&
                    <div className="texto" >
                        <h2>Consumindo a API do GitHub</h2>
                        <p>Consumindo api do github para buscar repositorios de usuarios.</p>
                        <p>Buscando: Repositórios (listando), favoritor (listando), quantidade de repositórios, seguidores, seguindo.</p>
                        <p>Só digitar o nome do usuário no campo de busca. </p>
                    </div>
                }

                { isFatching && <div className="loading"> <img src={Loading} /></div>}
                { !!userinfo && <Card userinfo={ userinfo } />  }
              
                { 
                    !!userinfo && <div className="box-conteudo"> 
                        { !!userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred } /> }
                        { !!repos.length && <Repos className="repos" title="Repositórios" repos={repos} /> }
                        { !!starred.length && <Repos className="starred" title="Favoritos" repos={starred} /> }
                    </div> 
                }

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