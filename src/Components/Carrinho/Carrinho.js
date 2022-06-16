import React, { Component } from 'react'
import styled from 'styled-components'
import IconeCarrinho from '../../Imagens/carrinho.png';
import ProdutosCarrinho from './ProdutosDoCarrinho'

const EstilizacaoCarrinhoContainer = styled.div`
    margin: 10px;
   
`

const CarrinhoContainer = styled.div`
    grid-row-start: 2;
    border: 1px solid black;
    background-color: #858585;
    margin: 10px;
    padding: 10px;
    color: black;
    text-align: center;
    
    h3 {
        margin: 10px;
        text-align: left;
    }
    p {
        margin: 10px;
        font-weight: 500;
    }
`

const Pagar = styled.button`
    margin: 10px;
    height: 2rem;
    padding: 0px 3px;
    background-color: #41807d;
    border: 2px solid black;
    border-radius: 0.5em;
    cursor: pointer;
    :hover {
      background-color: #50a3a0;
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
        <h3><img src={IconeCarrinho} alt="Ícone Carrinho" /> Carrinho</h3>
        <EstilizacaoCarrinhoContainer>
          {this.props.itensNoCarrinho.map((produto) => {
            return <ProdutosCarrinho
              item={produto}
              removerItem={this.props.removerItem}
            />
          })}
        </EstilizacaoCarrinhoContainer>

        <p>Valor total: {this.getTotalValue()}</p>
        <Pagar>Finalizar Compra</Pagar>

      </CarrinhoContainer>
    )
  }
}
