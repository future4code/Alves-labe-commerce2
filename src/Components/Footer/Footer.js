import React, { Component } from 'react'
import styled from 'styled-components'


const Fundo = styled.footer`
    text-align: center;
    background-color: #2B2B47;
    color: white;
    display: flex;
    justify-content: space-around;
`

export default class Footer extends Component {
    render() {
        return (
            <Fundo>
                <p>Espaço Profundo © 2022 - Todos os direitos reservados.</p>
                <nav>
                    <a href="http://" alt="Facebook"><img src="http://" alt="Facebook" /></a>
                    <a href="http://" alt="Instagram"><img src="http://" alt="Instagram" /></a>
                    <a href="http://" alt="Twitter"><img src="http://" alt="Twitter" /></a>
                </nav>
            </Fundo>
        )
    }
}
