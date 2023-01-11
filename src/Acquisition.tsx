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
    
    
    div{
      background-color: white;
      padding: 50px;
      box-shadow: 2px 2px 2px black;
    }
    h1{
      margin-bottom: 50px;
    }
    input{
      margin-bottom: 50px;
    }
    hr{
      margin-bottom: 50px;
    }
`

function Acquisition() {
  const { id } = useParams()
  return (
    
    <Content>
        <Header></Header>
        <AcquisitionDiv>
          <div>
            <h1>Aquisição da propriedade {id} </h1>
            <hr />
            <form method='POST'>
              <h2>Nome Completo</h2>
              <input type="text" placeholder='Nome próprio'/> <input type="text" placeholder='Nome completo'/>
              <h2>CPF, CNPJ ou Passaporte</h2>
              <input type="text"/>
              <h2>E-mail</h2>
              <input type="email"/>
              <h2>Telefone</h2>
              <input type="text"/> - <input type="text"/> <br />
              <input type="button" value="Confirmar Interece"/>
            </form>
          </div>
        </AcquisitionDiv>
    </Content>
  )
}

export default Acquisition
