import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
    background-color: gray;
    display: flex;
    height: 70px;
    justify-content: end;
    align-items: center;

    img{
        margin-left: 10px;
        height: 100%;
    }

    ul{
        list-style: none;
        display: flex;
        float: right;
    }
    li{
        margin-right: 40px;
        font-size: 20px;
        text-shadow: 2px 2px 1px black;
        color: white;
    }
    
`

const Header: FunctionComponent = (props)=>{

    function alertClick(){
        alert("Rota não criada ainda, site em construção")
    }
    return(
        <HeaderDiv>
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li onClick={alertClick}>Sobre</li>
                <li onClick={alertClick}>Contatos</li>
            </ul>
        </HeaderDiv>
    )

}

export default Header