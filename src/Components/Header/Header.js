import React, { Component } from 'react'
import styled from 'styled-components'
import LogoLoja from '../../Imagens/logo.png'

const Cabecalho = styled.div`
    background-color: #2B0551;
    color: white;
    display: flex;
    justify-content: center;
`
const EspacoLogo = styled.picture`
margin-right: 3vw;
`

const LogoDaLojas = styled.img`
    width: 100px;
`
const FonteTitulo = styled.h1`
font-family: 'Press Start 2P', cursive;`

export default class Header extends Component {
    render() {
        return (
            <Cabecalho>
                <EspacoLogo>
                    <LogoDaLojas src={LogoLoja} alt="Logo" />
                </EspacoLogo>
                <FonteTitulo>Space Shirt</FonteTitulo>
            </Cabecalho>
        )
    }
}
