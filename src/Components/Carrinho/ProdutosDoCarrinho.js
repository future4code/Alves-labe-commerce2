import React, { Component } from 'react'
import styled from 'styled-components'
import Lixeira from '../../Imagens/lixeira.png'

const BotaoCarrinho = styled.button`
    margin: 10px;
    height: 2rem;
    background-color: #41807d;
    border: 2px solid black;
    border-radius: .5em;
    cursor: pointer;
    :hover {
      background-color: #50a3a0;
    }
`
const CardCarrinho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-bottom: 1px solid black;
`

export default class ProdutosDoCarrinho extends Component {
  render() {
    return (
        <CardCarrinho>
        <p>{this.props.item.quantidade}</p>
        <p>{this.props.item.nome}</p>
        <BotaoCarrinho onClick={() => this.props.removerItem(this.props.item.id)}><img src={Lixeira} alt="Ícone Remover do Carrinho"/></BotaoCarrinho>
      </CardCarrinho>
    )
  }
}
