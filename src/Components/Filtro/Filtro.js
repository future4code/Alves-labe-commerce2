import React, { Component } from 'react'
import styled from 'styled-components'

const CampoDePesquisa = styled.input`
    display: block;
    margin:0.2vw 0;
`

const TextoInput = styled.div`
    text-align: center;
`



export default class Filtro extends Component {
    valorData = (e) => {
        this.props.valorDataApp(e)
    }
    render() {
        return (
       <div>
                <TextoInput>
                    <h2>Filtros</h2>
                    
                    <label>Valor Mínimo:</label>
                    <CampoDePesquisa 
                    type="number" 
                    placeholder="Valor Mínimo" 
                    id={1}
                    onChange={this.valorData}
                    ></CampoDePesquisa>
                    
                    <br/>
                    
                    <label>Valor Máximo:</label>
                    <CampoDePesquisa 
                    type="number" 
                    placeholder="Valor Máximo"
                    id={2}
                    onChange={this.valorData}></CampoDePesquisa>
                    
                    <br/>
                    
                    <label>Busca por nome:</label>
                    <CampoDePesquisa 
                    type=""
                    placeholder="Nome"
                    id={3}
                    ></CampoDePesquisa>
                </TextoInput>
       </div>
        )
    }
}
