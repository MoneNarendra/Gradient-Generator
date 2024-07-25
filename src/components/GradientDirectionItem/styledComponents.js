import styled from 'styled-components'

export const DirectionBtn = styled.button`
    width: 140px;
    height: 35px;
    margin: 5px;
    border-width: 0px;
    background-color: #ffffff;
    border-radius: 8px;
    font-family: 'Roboto';
    font-size: 13px;
    font-weight:bold;
    opacity: ${props => (props.isActive ? '1' : '0.5')};
`
