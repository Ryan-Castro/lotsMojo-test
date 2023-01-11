import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from './components/Card'
import Header from './components/Header'

const Content = styled.div`
    width: 100vw;
    min-height: 100vh;
    background-color: #ffffff99;
    
  #lotsList{
    width: 100%;
    height: 100%;
    padding-top: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
  }
  #lotsList>a{
    width: 80%;
  }

  #configs{
    background-color: aliceblue;
    height: 100px;
    padding: 30px;
    border-bottom: 1px solid black;
    box-shadow: 0px 1px 2px black;
  }
  select{
    float: right;
    margin-left: 20px;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    #lotsList{
        grid-template-columns: 1fr 1fr;
    }
    #configs{
        height: 160px;
        padding: 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    select{
        float: left;
        width: 90%;
        margin: 5px 0px;
    }
  }
  @media (max-width: 800px) {
    #lotsList{
        grid-template-columns: 1fr;
    }
  }
`



interface PropertyInterface {
  name:       string,
  thumbnail:  string,
  price:      number,
  sizeInFeet: number,
  id: number,
  [type: string]: number | string;
}

function Home() {
    const [properties, setProperty] = useState<Array<PropertyInterface>>([])
    const [order, setOrder] = useState<string>("ascendingPrice")
    const [priceOprion, setPriceOprion] = useState<number>(0)
    const [sizeOprion, setSizeOprion] = useState<number>(0)
    useEffect(()=>{ 
        update(priceOprion, sizeOprion)
    }, [])

    async function update(priceinput:number, sizeInput:number){
        return await fetch("https://lotsmojotest.herokuapp.com/properties/list").then(respOnServer=>{
            if(respOnServer.ok){
                return respOnServer.json()
            }
        }).then((respOnJson:{data:Array<PropertyInterface>})=>{
            sortProperties(respOnJson.data, order, priceinput, sizeInput)
        })
    }

    function ascendingOrder(type:string, propertiesInput:Array<PropertyInterface>){
        let handleProperties = [...propertiesInput]
        handleProperties.sort(function(a,b){
            if(a[type] > b[type]) return 1; 
            if(a[type] < b[type]) return -1; 
            return 0
        })
        setProperty(handleProperties)
    }

    function descendingOrder(type:string, propertiesInput:Array<PropertyInterface>){
        let handleProperties = [...propertiesInput]
        handleProperties.sort(function(a,b){
            if(a[type] < b[type]) return 1; 
            if(a[type] > b[type]) return -1; 
            return 0
        })
        setProperty(handleProperties)
    }

    function updateOrder(event:React.ChangeEvent<HTMLSelectElement>){
        let element = event.target
        setOrder(element.options[element.selectedIndex].value)
        sortProperties(properties, element.options[element.selectedIndex].value, priceOprion, sizeOprion)
    }

    function updatePrice(event:React.ChangeEvent<HTMLSelectElement>){
        let element = event.target
        setPriceOprion(Number(element.options[element.selectedIndex].value))
        update(Number(element.options[element.selectedIndex].value), sizeOprion)
    }
    
    function updateSize(event:React.ChangeEvent<HTMLSelectElement>){
        let element = event.target
        setSizeOprion(Number(element.options[element.selectedIndex].value))
        update(priceOprion, Number(element.options[element.selectedIndex].value))
    }

    async function sortProperties(propertiesInput:Array<PropertyInterface>, orderInput:string, priceInput:number, sizeRef:number){
        let handleProperty = propertiesInput
        if(priceInput>0){
            handleProperty =  handleProperty.filter(property=> property.price < priceInput)
        }
        if(sizeRef>0){
            handleProperty =  handleProperty.filter(property=> property.sizeInFeet < sizeRef)
        }
        switch (orderInput) {
            case "ascendingPrice":ascendingOrder("price", handleProperty); break;
            case "descendingPrice":descendingOrder("price", handleProperty); break;
            case "ascendingSizeInFeet":ascendingOrder("sizeInFeet", handleProperty); break;
            case "descendingSizeInFeet":descendingOrder("sizeInFeet", handleProperty); break;
            default:;break;
        }
        
    }

  return (
    
    <Content>
        <Header></Header>
        <div id='configs'>
            <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{updateOrder(e)}}>
                    <option value="ascendingPrice">Menor preço</option>
                    <option value="descendingPrice">Maior preço</option>
                    <option value="ascendingSizeInFeet">Menor espaço</option>
                    <option value="descendingSizeInFeet">Maior espaço</option>
            </select>
            <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{updatePrice(e)}}>
                    <option value={0}>Sem preço definido</option>
                    <option value={20000}>Menos de 20 mil</option>
                    <option value={50000}>Menos de 50 mil</option>
            </select>
            <select onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>{updateSize(e)}}>
                    <option value={0}>Sem datanho definido</option>
                    <option value={500}>Menos de 500 pés</option>
                    <option value={700}>Menos de 700 pés</option>
            </select>
        </div>
        <div id='lotsList'>
            {properties.map((property, i)=><Card name={property.name} thumbnail={property.thumbnail} price={property.price} sizeInFeet={property.sizeInFeet} id={property.id} key={i}></Card>)}
        </div>
    </Content>
  )
}

export default Home
