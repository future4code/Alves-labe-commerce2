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
                    placeholder="Valor Mínimo" 
                    id={1}
                    type={"number"} 
                    onChange={this.valorData}
                    />
                    
                    <br/>
                    
                    <label>Valor Máximo:</label>
                    <CampoDePesquisa 
                    placeholder="Valor Máximo"
                    id={2}
                    type={"number"} 
                    onChange={this.valorData}
                    />
                    
                    <br/>
                    
                    <label>Busca por nome:</label>
                    <CampoDePesquisa 
                    placeholder="Nome"
                    id={3}
                    type={"text"}
                    onChange={this.valorData}
                   />
                   </TextoInput>
       </div>
        )
    }
}
