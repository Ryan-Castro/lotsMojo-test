import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const CardDiv = styled.div`
    width: 100%;
    height: 520px;
    border: 1px solid 0005;
    border-radius: 25px;
    overflow: hidden;
    margin-bottom: 100px;
    box-shadow: .5px .5px 3px #00000047;
    color: black;
    background-color: white;
    transition: .1s;
    &:hover{
        transform: scale(1.1);
    }
    div{
        padding: 20px;
    }
    img{
        width: 100%;
        height: 300px;
    }
`

interface CardProps{
    name:       string,
    thumbnail:  string,
    price:      number,
    sizeInFeet: number,
    id:         number
}

const Card: FunctionComponent<CardProps> = (props)=>{
    return(
        <Link to={`/infos/${props.id}`}>
            <CardDiv>
                <img src={props.thumbnail} alt={props.name} />
                <div>
                    <h1>{props.name}</h1>
                    <h2>Preço: {props.price}$</h2>
                    <h2>Tamanho: {props.sizeInFeet} ft.</h2>
                </div>
            </CardDiv>
        </Link>
    )
}

export default Card