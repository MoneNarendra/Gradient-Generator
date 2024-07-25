import styled from 'styled-components'

export const BgContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(to ${props => props.direction}, ${props =>
      props.firstColor}, ${props => props.secoundColor});
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const HeadingText = styled.h1`
    font-family: 'Roboto';
    font-size: 30px;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
`
export const SubHeadingText = styled(HeadingText)`
    font-weight: 400;
    font-size: 20px;
    color: #ededed;
`

export const ListContainer = styled.ul`
    list-style-type: none;
    padding-left: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
export const ColorItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const ColorItem = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ColorosText = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    color: #ffffff;
`
export const ColorEle = styled.input`
    appearance: none;
    width: 80px;
    height: 45px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
export const GenerateBtn = styled.button`
    height: 40px;
    width: 90px;
    background-color: #0fdeb2;
    font-family: 'Roboto';
    font-size: 13px;
    font-weight: bold;
    border-width: 0px;
    border-radius: 8px;
`
