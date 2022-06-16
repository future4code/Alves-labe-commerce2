import React, { Component } from 'react'
import styled from 'styled-components'
import LogoLoja from '../../Imagens/logo.png'

const Cabecalho = styled.div`
    background-color: #2B2B47;
    color: white;
    display: flex;
    text-align: center;
    justify-content: space-around;
`

const LogoDaLojas = styled.img`
    width: 100px;
`


export default class Header extends Component {
    render() {
        return (
            <Cabecalho>
                <picture>
                    <LogoDaLojas src={LogoLoja} alt="Logo" />
                </picture>
                <h1>Espaço Profundo</h1>
                <h1>Carrinho</h1>
            </Cabecalho>
        )
    }
}
