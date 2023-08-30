import react from "react";
import styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";


export const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Div>
            <Logo>Logo</Logo>
            <Text>Browser</Text>
            <Icon />
          </Div>
          <Div>
            <InputHolder>
              <Input placeholder="search" />
              <Icon2 />
            </InputHolder>
          </Div>
          <Div>3</Div>
        </Main>
      </Container>
    </div>
  );
};
const Icon2 = styled(BiSearch)`
padding: 0 10px;
`
const Input = styled.input`
flex: 1;
height: 22px;
outline:1px solid black ;
padding-left: 10px;
:focus{
   outline:1px solid #a10da1 ;
}
`
const InputHolder = styled.div`
width: 300px;
height: 30px;
background-color: #e2e0e0;
display: flex;
align-items: center;
border-radius: 0px  4px 4px 0px;
`
const Icon = styled(BsThreeDotsVertical)`
  margin-top: 5px;
  padding: 4px 6px;
  border-radius: 3px;

  :hover {
    background-color: #e1e1e1;
    cursor: pointer;
  }
`;
const Text = styled.div`
  margin: 0 10px;
  font-weight: 700;
  transition: all 0.8s ease-in-out;
  :hover {
    color: #a10da1;
    cursor: pointer;
  }
`;
const Logo = styled.div``;
const Div = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: white;
  border-bottom: 1px solid silver;
  border-top: 1px solid silver;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  display: flex;
  justify-content: center;
`;
