import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import { useParams } from 'react-router-dom'

const Content = styled.div`
    width: 100vw;
    height: 100vh;
    #contentInfo{
        height: calc(100% - 70px);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #lotInfoCard{
        width: 98%;
        height: 96%;
        border-radius: 50px;
        border: 1px solid black;
        box-shadow: 2px 2px 2px black;
        display: flex;
        overflow: hidden;
        align-items: center;
        background-color: black;
    }

    #lotInfoCard>img{
        width: 50%;
        margin: 2px;
    }
    #lotInfoCard>div{
        background-color: white;
        height: 100%;
        width: 50%;
        padding: 30px;
        box-shadow: 4px 0px 1px #00000050 inset;
    }
`
interface LotInterface {
  name:       string,
  thumbnail:  string,
  price:      number,
  sizeInFeet: number,
}

function Info() {
  const [lots, setLots] = useState<LotInterface>()
  const { id } = useParams()
  useEffect(()=>{ 
    fetch("https://lotsmojotest.herokuapp.com/properties/list").then(respOnServer=>{
      if(respOnServer.ok){
        return respOnServer.json()
      }
    }).then((respOnJson:{data:Array<LotInterface>})=>{
        respOnJson.data.forEach(lot=>{
            if(lot.name.replace(".", "") === id){
                setLots(lot)
            }
        })
    })}, [])

  return (
    
    <Content>
        <Header></Header>
        <div id='contentInfo'>
            <div id='lotInfoCard'>
                <img src={lots?.thumbnail} alt="" />
                <div>
                    <h1>{lots?.name}</h1>
                    <h2>{lots?.price}</h2>
                    <h2>{lots?.sizeInFeet}</h2>
                    <input type="button" value="Comprar" />
                </div>
            </div>
        </div>
    </Content>
  )
}

export default Info
