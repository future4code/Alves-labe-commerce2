import React, { Component } from 'react'
import styled from 'styled-components'

const ContainerCarrinho = styled.div `
border: 2px solid black;
display: flex;
flex-direction: column;
align-items: center;
box-shadow: 3px 3px 3px 2px #0e3364;
transition: all .2s ease-in-out;
&:hover{
    top:-4px;box-shadow:3px 4px 3px  #999;
}

h3 {
    margin-bottom: -5px;
    color: white;
    text-align: center;
}
p {
    color: white;
}
button {
    margin-bottom: 5px;
    border-radius: 10px;
    border: none;
    &:hover{
        background-color: #0c5e96;
        color: white;
    }
}
`

export default class PartePrinicipal extends Component {

  render() {
    return (
        <ContainerCarrinho>
        <div>
          
        </div>
          <h3>Carrinho</h3>
        </ContainerCarrinho>
    )
  }
}