import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './Components/Header/Header';
import Filtro from './Components/Filtro/Filtro';
import Carrinho from './Components/Carrinho/Carrinho';
import Footer from './Components/Footer/Footer';
import listaProdutos from './Data/produtos';
import IconeCarrinho from './Imagens/carrinho.png';
import imagemfundo from './Imagens/imagemfundo.jpg';

const ParteCima = styled.div`
  background-color: #2B0551; 
`
const ParteBaixo = styled.div`
  background-color: #2B0551;
`
const ContainerSite = styled.div `
  background-image: url(${imagemfundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  `
const Container = styled.div`  
  width: 100%;     
  max-width: 1125px;     
  margin: 0 auto;     
  padding: 20px 20px; 
`
const ContainerMain = styled.div`
  display: flex; 
  justify-content: space-around;
`
const ParteMeio = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const Paragrafo = styled.p`
  margin-bottom: 10px;
`

const Botao = styled.button`
  margin-bottom: 10px;
  padding: 5px;
  background-color: #41807d;
  border: 2px solid black;
  width: 50%;
  border-radius: .5em;
  cursor: pointer;
  :hover {
      background-color: #50a3a0;
    }
`
const Imagem = styled.img`
  width: 85%;
  margin: 10px;
  box-shadow:3px 3px 3px #1f1f1f;
`;

const CardProduto = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background-color: green;
  margin: 10px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #1f1f1f;
`;

const IconeCifra = styled.img`
  width: 20%;
`

class App extends Component {

  state = {
    produtos: listaProdutos,

    produtosFiltrado: [],
    naoFiltrando: true,

    valor: "",
    valorMin: "",
    valorMax: "",
    valorNome: "",
    valorArray: [],
    ordem: 'crescente',

    itensNoCarrinho: []
  }

  componentDidUpdate() {
    const itensCarrinhoEmString = JSON.stringify(this.state.itensNoCarrinho)
    localStorage.setItem("Itens no Carrinho", itensCarrinhoEmString);
  };

  componentDidMount() {
    const carrinhoLocalStorage = JSON.parse(localStorage.getItem("Itens no Carrinho"))

    if (carrinhoLocalStorage) {
      this.setState({ itensNoCarrinho: carrinhoLocalStorage })
    }
  };

  render() {

    const arrayProduto = this.state.produtos.filter(produto => {
      return this.state.valorMin === '' || produto.valor >= this.state.valorMin
    }).filter(produto => {
      return this.state.valorMax === '' || produto.valor <= this.state.valorMax
    }).filter(produto => {
      return produto.nome.toLowerCase().includes(this.state.valorNome.toLocaleLowerCase())
    }).sort((produtoAtual, proximoProduto) => {
      switch (this.state.ordem) {
        case 'crescente':
          return produtoAtual.valor - proximoProduto.valor
        case 'decrescente':
          return proximoProduto.valor - produtoAtual.valor
      }
    })
      .map((produto) => {
        return (
          <CardProduto key={produto.id}>
            <Imagem src={produto.imagem} alt='Imagem do produto' />
            <Paragrafo>{produto.nome}</Paragrafo>
            <Paragrafo>{produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</Paragrafo>
            <Botao onClick={() => this.adicionarItem(produto.id)}><IconeCifra src={IconeCarrinho} alt="Ícone Adicionar ao Carrinho" /></Botao>
          </CardProduto>
        );
      });

    return (
      <div>
        <ParteCima>
          <Container>
            <Header />
          </Container>

        </ParteCima>
        <ContainerSite>
        <Container>

          <ContainerMain>

            <Filtro />
            <ParteMeio>
              {arrayProduto}
            </ParteMeio>
            <Carrinho />

          </ContainerMain>

        </Container>
        </ContainerSite>
        <ParteBaixo>
          <Container>
            <Footer />
          </Container>

        </ParteBaixo>
       
      </div>
    );
  }
}

export default App;
