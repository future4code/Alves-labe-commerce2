import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components'
import Header from './Components/Header/Header'
import Filtro from './Components/Filtro/Filtro'
import PartePrinicipal from './Components/PartePrinicipal/PartePrinicipal'
import Carrinho from './Components/Carrinho/Carrinho'
import Footer from './Components/Footer/Footer'
import imagemfundo from './Imagens/imagemfundo.png'

const ParteCima = styled.div`
  background-color: #2B2B47; 
`
const ParteBaixo = styled.div`
  background-color: #2B2B47;
`

const Container = styled.div`  
  width: 100%;     
  max-width: 1125px;     
  margin: 0 auto;     
  padding: 20px 20px; 
   `

  const ContainerSite = styled.div `
  background-image: url(${imagemfundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`
const ContainerMain = styled.div`
  display: flex; 
  justify-content: space-around;
`



class App extends Component {
  
  render() {
    return (
      <div>
        <ContainerSite>
        <ParteCima>

          <Container>
            <Header />
          </Container>

        </ParteCima>

        <Container>

          <ContainerMain>

            <Filtro />
            <PartePrinicipal />
            <Carrinho />

          </ContainerMain>

        </Container>

        <ParteBaixo>
          <Container>
            <Footer />
          </Container>

        </ParteBaixo>
        </ContainerSite>
      </div>
    );
  }
}

export default App;
