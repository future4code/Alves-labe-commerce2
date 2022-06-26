import React, { Component } from 'react'
import styled from 'styled-components'
import Lixeira from '../../Imagens/lixeira.png'

const Lixeirinha = styled.img`
width: 30%;
`

const BotaoCarrinho = styled.button`
border:none;
background-color: transparent;
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
        <BotaoCarrinho onClick={() => this.props.removerItem(this.props.item.id)}><Lixeirinha src={Lixeira} alt="Ícone Remover do Carrinho" /></BotaoCarrinho>
      </CardCarrinho>
    )
  }
}
