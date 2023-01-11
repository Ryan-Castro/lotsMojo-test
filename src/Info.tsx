import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import { useParams, Link } from 'react-router-dom'

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
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    #thumnail{
        display: flex;
        gap: 20px;
        justify-content: center;
        align-content: center;
    }
    .divThumb{
        width: 30%;
    }
    .divThumb>img{
        width: 100%;
    }
    #btn-acquisition{
        width: 100%;
        height: 50px;
        border-radius: 50px;
        background-color: aqua;
        font-size: 30px;
    }
    @media (max-width: 800px) {
    #lotInfoCard{
        flex-direction: column;
        overflow: auto;
    }
    #lotInfoCard>img{
        width: auto;
        height: 70%;
    }
    #lotInfoCard>div{
        width: 100%;
    }
    #lotInfoCard>div h1{
        margin-bottom: 30px;
    }
    #lotInfoCard>div h2{
        margin-bottom: 15px;

    }
    #thumnail{
        margin-bottom: 15px;
    }
  }
`
interface LotInterface {
  name:       string,
  thumbnail:  string,
  price:      number,
  sizeInFeet: number,
  address: string,
}

function Info() {
  const [lots, setLots] = useState<LotInterface>()
  const { id } = useParams()
  const thumb = useRef<HTMLImageElement>(null)
  const fakeThumnail = [
    'https://imob.sobressai.com.br/fotos/237/457877/12547587_g.jpg',
    'https://mapio.net/images-immo-detalhe/2981334/casa-com-3-quartos-a-venda-407-m2-por-r-775000-rua-andre-ebling-19-santo-andre-sao-leopoldo-rs-img-0.jpeg',
    'https://mapio.net/images-immo-detalhe/3488668/casa-com-3-quartos-a-venda-150-m2-por-r-590000-santo-andre-sao-leopoldo-rs-img-0.jpeg'
  ]
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
    function updateThumb(event:React.MouseEvent<HTMLImageElement, MouseEvent>){
        let element = event.target as HTMLImageElement
        thumb.current!.src = element.src
    }

  return (
    
    <Content>
        <Header></Header>
        <div id='contentInfo'>
            <div id='lotInfoCard'>
                <img src={lots?.thumbnail} alt="" ref={thumb}/>
                <div>
                    <h1>{lots?.name}</h1>
                    <h2>A partir de: {lots?.price}$</h2>
                    <h2>Tamanho de: {lots?.sizeInFeet}ft.</h2>
                    <h2>No local: {lots?.address}</h2>
                    <div id='thumnail'>
                        {fakeThumnail.map((url:string)=><div className='divThumb'><img src={url} onClick={(e)=>{updateThumb(e)}}/></div>)}
                    </div>
                    <Link to={`/acquisition/${lots?.name.replace(".", "")}`}>
                        <input type="button" value="Comprar" id='btn-acquisition'/>
                    </Link>
                </div>
            </div>
        </div>
    </Content>
  )
}

export default Info
