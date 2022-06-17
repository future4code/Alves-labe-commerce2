import React, { Component } from 'react'
import styled from 'styled-components'
import IconeFoguetinho from '../../Imagens/foguetinho.png';
import ProdutosCarrinho from './ProdutosDoCarrinho'


const EstilizacaoCarrinhoContainer = styled.div`
    margin: 10px;
   
`
const Foguetinho = styled.img`
width: 100px;
`

const CarrinhoContainer = styled.div`
    grid-row-start: 2;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    color: black;
    text-align: center;
    
    h3 {
        margin: 10px;
        color: #FFE0FF;
        text-align: left;
    }
    p {
        margin: 10px;
        color: #FFE0FF;
        font-weight: 500;
    }
`

const Pagar = styled.button`
    font-family: 'Lobster', cursive;
    color: #FFE0FF;
    margin: 10px;
    height: 3rem;
    padding: 5px ;
    background-color: #1184C3;
    border: 2px solid black;
    border-radius: 0.5em;
    cursor: pointer;
    :hover {
      background-color: #5D79DC;
    }
    font-weight: 600;
    margin-top: 10%;
    
`
export default class Carrinho extends Component {

  getTotalValue = () => {
    let totalValue = 0
    for (let product of this.props.itensNoCarrinho) {
      totalValue += product.valor * product.quantidade
    }
    return totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }
  render() {
    return (
      <CarrinhoContainer>

        <Foguetinho src={IconeFoguetinho} alt="Ícone Carrinho" /><h3>Foguetinho</h3>
        <EstilizacaoCarrinhoContainer>
          {this.props.itensNoCarrinho.map((produto) => {
            return <ProdutosCarrinho
              item={produto}
              removerItem={this.props.removerItem}
            />
          })}
        </EstilizacaoCarrinhoContainer>

        <p>Valor total: {this.getTotalValue()}</p>
        <Pagar>Enviar foguete</Pagar>

      </CarrinhoContainer>
    )
  }
}
