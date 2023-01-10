import styled from 'styled-components'
import Header from './components/Header'

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    #contentInfo{

    }

`
interface LotInterface {
  name:       string,
  thumbnail:  string,
  price:      number,
  sizeInFeet: number,
}

function acquisition() {

  return (
    
    <Content>
        <Header></Header>
    </Content>
  )
}

export default acquisition
