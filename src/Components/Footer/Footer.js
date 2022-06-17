import React, { Component } from 'react'
import styled from 'styled-components'
import Instagram from '../../Imagens/Inxtagram.png'
import Facebook from '../../Imagens/facebook.png'
import Twitter from '../../Imagens/twitter.png'


const Fundo = styled.footer`
    text-align: center;
    background-color: #2B0551;
    color: white;
    display: flex;
    justify-content: space-around;
`
const RedesSociais = styled.img`
width: 11%;

`
export default class Footer extends Component {
    render() {
        return (
            <Fundo>
                <p>Espaço Profundo © 2022 - Todos os direitos reservados.</p>
                <nav>
                    <a href="http://" alt="Facebook"><RedesSociais src={Facebook} alt="Facebook" /></a>
                    <a href="http://" alt="Instagram"><RedesSociais src={Instagram} alt="Instagram" /></a>
                    <a href="http://" alt="Twitter"><RedesSociais src={Twitter} alt="Twitter" /></a>
                </nav>
            </Fundo>
        )
    }
}
