import react,{useState} from "react"
import styled from "styled-components"


import {BsArrowBarRight, BsArrowBarLeft} from "react-icons/bs"

export const Sider = () => {
    const [toggle, setToggle] = useState<boolean>(false)
    const onToggle = ()=>{
        setToggle(!toggle)
    }


    return (
        <Container w={toggle ? "ee" : ""}>
            <Main>
            {
                toggle? <Icon1 
                onClick={onToggle}/> : <Icon2 onClick={onToggle}/>
            }
            </Main>
        </Container>
    )
}

const Main = styled.div`
display: flex;
width: 90%;
justify-content: flex-end;
margin-top: 10px;

`

const Icon1 = styled(BsArrowBarLeft)``
const Icon2 = styled(BsArrowBarRight)``

const Container = styled.div<{
    w:string
}>`
position: fixed;
height: calc(100vh - 122px);
background-color: silver;
width: ${({w})=>w? "200px": "50px"};
`