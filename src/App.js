import React, { Component } from 'react'
import ControlledExpansionPanels from './ControlledExpansionPanels'

import './App.css'

class App extends Component {

    constructor () {
        super()
        this.state = {
            color: 'yellow',
            showTimer: true
        }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount (){
        console.log('componrntDidMount')
    }


    render (){
        console.log('render')
        return (
            <div className="App" >
                
                <input className="search"  placeholder="Search..."/>

                <div className="main">
                    <div className="container">
                        <div className="card card-profile text-center">
                            <img alt="" className="card-img-top" src="https://unsplash.it/340/160?image=354" />
                            <div className="card-block">
                                <img alt="" className="card-img-profile" src="https://avatars1.githubusercontent.com/u/35267440?v=4&s=140" />
                                <h4 className="card-title">
                                    Gian Carlos Dal Pont
                                    <br />
                                    <small>giandalpont</small>
                                    <div className="btn-box">
                                        <a href="">
                                            <div className="btn btn-primery">
                                                Repositorios
                                            </div>
                                        </a>
                                        <a href="">
                                            <div className="btn btn-primery">
                                                Favoritos
                                            </div>
                                        </a>
                                    </div>
                                </h4>
                                <div className="card-links">
                                    <span className="fa fa-dribbble" href="#">Repositories <br /> 22 </span>
                                    <span className="fa fa-twitter" href="#">Followers <br /> 22</span>
                                    <span className="fa fa-facebook" href="#" >Following <br /> 234</span>
                                </div>
                            </div>
                        </div>
                        <div className="box-conteudo">
                            <ControlledExpansionPanels  />
                        </div>
                    </div>
                </div>

{/* 
                { this.state.showTimer && <Timer /> }
                <button onClick={ ()=>{ this.setState({ showTimer: !this.state.showTimer })} } > Show / Hide timer</button>
                <Titulo />
                <div  onClick={()=>{
                    alert('clicou')
                }} >
                    <Button>texto</Button>
                </div>
                {['blue','red','green'].map((square)=>(
                    <Square key={square}  color={square} />
                ))}
                <br />
                <br />
                <br />
                <br />
                
                <Square color={ this.state.color }/>
                {['red','green','blue'].map((color) => (
                    <Button 
                        key={color} 
                        handleClick={()=> this.setState({ color })}>
                        {color}
                    </Button>
                ))} */}

            </div>
        )
    }
}

export default App
