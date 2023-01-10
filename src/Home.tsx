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
  [type: string]: number | string;
}

function Home() {
  const [lots, setLots] = useState<Array<LotInterface>>([])
  useEffect(()=>{ 
    fetch("https://lotsmojotest.herokuapp.com/properties/list").then(respOnServer=>{
      if(respOnServer.ok){
        return respOnServer.json()
      }
    }).then((respOnJson:{data:Array<LotInterface>})=>{
        respOnJson.data.sort(function(a,b){
            if(a.price > b.price) return 1; 
            if(a.price < b.price) return -1; 
            return 0
        })
        setLots(respOnJson.data)
    })}, [])

    function ascendingOrder(type:string){
        let handleArrey = [...lots]
        handleArrey.sort(function(a,b){
            if(a[type] > b[type]) return 1; 
            if(a[type] < b[type]) return -1; 
            return 0
        })
        setLots(handleArrey)

    }
    function descendingOrder(type:string){
        let handleArrey = [...lots]
        handleArrey.sort(function(a,b){
            if(a[type] < b[type]) return 1; 
            if(a[type] > b[type]) return -1; 
            return 0
        })
        setLots(()=>handleArrey)
    }

    function sortProperties(event:React.ChangeEvent<HTMLSelectElement>){
        let element = event.target
        switch (element.options[element.selectedIndex].value) {
            case "ascendingPrice":ascendingOrder("price"); break;
            case "descendingPrice":descendingOrder("price"); break;
            case "ascendingSizeInFeet":ascendingOrder("sizeInFeet"); break;
            case "descendingSizeInFeet":descendingOrder("sizeInFeet"); break;
            default:
                break;
        }

    }

  return (
    
    <Content>
        <Header></Header>
        <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{sortProperties(e)}}>
                <option value="ascendingPrice">Menor preço</option>
                <option value="descendingPrice">Maior preço</option>
                <option value="ascendingSizeInFeet">Menor espaço</option>
                <option value="descendingSizeInFeet">Maior espaço</option>
            </select>
        <div id='lotsList'>
            {lots.map((lot, i)=><Card name={lot.name} thumbnail={lot.thumbnail} price={lot.price} sizeInFeet={lot.sizeInFeet} key={i}></Card>)}
        </div>
    </Content>
  )
}

export default Home
