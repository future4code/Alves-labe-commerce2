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
    render() {
        return (
       <div>
                <TextoInput>
                    <h2>Filtros</h2>
                    <label>Valor Mínimo:</label>
                    <CampoDePesquisa type="number" placeholder="Valor Mínimo"></CampoDePesquisa>
                    <label>Valor Máximo:</label>
                    <CampoDePesquisa type="number" placeholder="Valor Máximo"></CampoDePesquisa>
                    <label>Busca por nome:</label>
                    <CampoDePesquisa placeholder="Nome"></CampoDePesquisa>
                </TextoInput>
       </div>
        )
    }
}
