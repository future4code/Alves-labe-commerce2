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

const Geral = styled.div`
  color: white;
`

const ParteCima = styled.div`
  background-color: #2B0551; 
`
const ParteBaixo = styled.div`
  background-color: #2B0551;
`
const ContainerSite = styled.div`
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
  background-color: #1184C3;
  border: 2px solid black;
  width: 50%;
  border-radius: .5em;
  cursor: pointer;
  :hover {
      background-color: #5D79DC;
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

  margin: 10px;
  align-items: center;
  border-radius: 10px;
  box-shadow: 5px 5px 10px #1f1f1f;
`;

const IconeCifra = styled.img`
  width: 20%;
`

const Filtrinho = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Seletor = styled.select`
  width: 10%;
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

  adicionarItem = (itemId) => {
    const itemNoCarrinho = this.state.itensNoCarrinho.find(item => itemId === item.id)
    if (itemNoCarrinho) {
      const novosItensCarrinho = this.state.itensNoCarrinho.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            quantidade: item.quantidade + 1
          }
        }
        return item
      })
      this.setState({ itensNoCarrinho: novosItensCarrinho })
    } else {
      const itemAdicionado = this.state.produtos.find(item => itemId === item.id)

      const novosItensCarrinho = [...this.state.itensNoCarrinho, { ...itemAdicionado, quantidade: 1 }]

      this.setState({ itensNoCarrinho: novosItensCarrinho })
    }
  }

  removerItem = (itemID) => {
    const novosProdutos = this.state.itensNoCarrinho.map((item) => {
      if(item.id === itemID) {
        return {
          ...item,
          quantidade: item.quantidade - 1
        }
      }
      return item
    }).filter((item) => item.quantidade > 0)
    this.setState({itensNoCarrinho: novosProdutos})
  }

  updateOrdem = (event) => {
    this.setState({
      ordem: event.target.value
    })
  };

  valorDataApp = (data) => {     
    const id = data.target.id;     
    const valor = data.target.value;      
    this.setState(       
      (state) => ({         
      valor: valor       
    }));      
      if (id === "1") {       
        this.setState(         
          (state) => ({           
          valorMin: valor         
        }));     
        }    
           if (id === "2") {       
            this.setState(         
              (state) => ({           
                valorMax: valor         
              }));     
            }     
            if (id === "3") {       
              return this.setState(         
                (state) => ({           
                  valorNome: valor         
                }));     
              }      
              if (this.state.valor) {       
                this.setState(         
                  (state) => ({           
                    produtosFiltrado: this.state.produtos             
                    .filter((item) => item.valor >= this.state.valorMin && item.valor <= this.state.valorMax),           
                    naoFiltrando: false,         
                  }));      
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
    }).map((produto) => {
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
      <Geral>
        <ParteCima>
          <Container>
            <Header />
          </Container>

        </ParteCima>
        <ContainerSite>
          <Container>

            <ContainerMain>

              <Filtro />
              valorDataApp={this.valorDataApp}
              inputLabel={"Valor Mínimo:"}
              <Filtrinho>
              <label htmlFor="ordem">Ordem: </label>
              <Seletor value={this.state.ordem} onChange={this.updateOrdem}>
                <option value='crescente'>Crescente</option>
                <option value='decrescente'>Decrescente</option>
              </Seletor>
              <ParteMeio>
                {arrayProduto}
              </ParteMeio>
              </Filtrinho>
              <Carrinho 
                itensNoCarrinho={this.state.itensNoCarrinho}
                removerItem={this.removerItem}
              />

            </ContainerMain>

          </Container>
        </ContainerSite>
        <ParteBaixo>
          <Container>
            <Footer />
          </Container>

        </ParteBaixo>

      </Geral>
    );
  }
}

export default App;
