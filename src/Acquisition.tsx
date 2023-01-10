import styled from 'styled-components'
import Header from './components/Header'
import { useParams } from 'react-router-dom'
const Content = styled.div`
    width: 100vw;
    height: 100vh;
    #contentInfo{

    }

`

function Acquisition() {
  const { id } = useParams()
  return (
    
    <Content>
        <Header></Header>
        <h1>Aquisição da propriedade {id} </h1>
    </Content>
  )
}

export default Acquisition
