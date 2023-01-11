import styled from 'styled-components'
import Header from './components/Header'
import { useParams} from 'react-router-dom'
const Content = styled.div`
    width: 100vw;
    height: 100vh;
    #acquisition{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
`

function Acquisition() {
  const { id } = useParams()
  return (
    
    <Content>
        <Header></Header>
        <div id='acquisition'>
          <h1>Aquisição da propriedade {id} </h1>
          <div>
            <h2>Nome:</h2>
            <input type="text" placeholder='Nome completo'/>
            <h2>Email:</h2>
            <input type="email" placeholder='Email'/>
            <h2>Telefone</h2>
            <input type="tel" placeholder='(xx) 9xxxx-xxxx' />
          </div>
          <input type="button" value="Condirmar compra" />
        </div>
    </Content>
  )
}

export default Acquisition
