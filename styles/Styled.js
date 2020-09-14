import styled,{createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
`
export const AddMember = styled.div`

    margin-left: 100px;
    text-align: center;
    font-size: 15px;
    border: 3px solid #363636;
    width: 100px;
    border-radius: 10px;
    
 `

 export const HeaderStyle = styled.div`
    position: fix;
    bottom: 0;
    height: 70px;
    display:flex;
    justify-items: center;
    width:100%;
    background-color: rgba(255,255,255,0);
 `

export const HeaderFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
`
export const HeaderTitle = styled.span`
    font-size: 24px;
    font-weight: bold;
    color: white;
    margin-right: 30%;
    margin-left: 10%;

`

export const HeaderItem = styled.span`

    font-size: 15px;
    transition: color 0.5s;
    color: rgba(255,255,255,0.5);
    margin-left: 3%;
    cursor: pointer;
    font-weight: bold;
    &:hover{
        color: rgba(255,255,255,0.8);
    }
`