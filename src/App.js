import React, { Component } from 'react'
import './App.css';
import styled from 'styled-components'
import Header from './Components/Header/Header'
import Filtro from './Components/Filtro/Filtro'
import PartePrinicipal from './Components/PartePrinicipal/PartePrinicipal'
import Carrinho from './Components/Carrinho/Carrinho'
import Footer from './Components/Footer/Footer'

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
const ContainerMain = styled.div`
  display: flex; 
  justify-content: space-around;
`



class App extends Component {
  
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default App;
