import styled from 'styled-components'
import Header from './components/Header'
import { useParams} from 'react-router-dom'
const Content = styled.div`
    width: 100vw;
    height: 100vh;

`

const AcquisitionDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 70px);
    background-color: #00000034;
    
    
    div{
      background-color: white;
      padding: 50px;
      box-shadow: 2px 2px 2px black;
    }
    h1{
      margin-bottom: 50px;
    }
    hr{
      margin-bottom: 15px;
    }
    form{
      display: flex;
      flex-direction: column;
    }
    input{
      padding: 10px;
      height: 50px;
      margin-bottom: 5px;
      background-color: #c0c0c0;
      border-radius: 5px;
      border-color: #00000070;
    }
    button{
      padding: 10px;
      height: 50px;
      margin-bottom: 5px;
      background-color: cyan;
      border-radius: 5px;
      border-color: #25b1b1;
      color: black;
      font-size: 25px;
    }
`

function Acquisition() {
  const { id } = useParams()
  return (
    
    <Content>
        <Header></Header>
        <AcquisitionDiv>
          <div>
            <h1>{id}</h1>
            <hr />
            <form method='POST'>
              <input type="text" placeholder='Nome'/>
              <input type="text" placeholder='Sobrenome'/>
              <input type="text" placeholder='CPF, CNPJ ou Passaporte'/>
              <input type="email" placeholder='E-mail'/>
              <input type="tel" placeholder="Telefone"/>
              <button>Enviar</button>
            </form>
          </div>
        </AcquisitionDiv>
    </Content>
  )
}

export default Acquisition
