import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const HeaderDiv = styled.div`
    background-color: gray;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;

    img{
        height: 100%;
    }

    ul{
        list-style: none;
        display: flex;
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
            <img src="https://spiny-creek-7d3.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F87d20700-9896-4d7c-8def-fcfb60adce9a%2FVermelha.png?table=block&id=29ad9760-1b09-4a13-b4ac-42e3bff0ca25&spaceId=887f9623-c675-4101-b8f5-fde68443a0f4&width=250&userId=&cache=v2" alt="Logo" />
            <ul>
                <Link to="/"><li>Home</li></Link>
                <li onClick={alertClick}>Sobre</li>
                <li onClick={alertClick}>Contatos</li>
            </ul>
        </HeaderDiv>
    )

}

export default Header