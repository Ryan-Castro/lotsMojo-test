import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import Header from './components/Header'

const Content = styled.div`
    
  #lotsList{
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
`

interface LotInterface {
  name:       string,
  thumbnail:  string,
  price:      number,
  sizeInFeet: number,
}

function App() {
  const [lots, setLots] = useState<Array<LotInterface>>([])
  useEffect(()=>{ 
    fetch("https://lotsmojotest.herokuapp.com/properties/list").then(respOnServer=>{
      if(respOnServer.ok){
        return respOnServer.json()
      }
    }).then((respOnJson)=>{
      setLots(respOnJson.data)
    })}, [])

  return (
    
    <Content>
        <Header></Header>
        <div id='lotsList'>
            {lots.map((lot)=><Card name={lot.name} thumbnail={lot.thumbnail} price={lot.price} sizeInFeet={lot.sizeInFeet}></Card>)}
        </div>
    </Content>
  )
}

export default App
