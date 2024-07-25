import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  BgContainer,
  HeadingText,
  SubHeadingText,
  ListContainer,
  ColorItem,
  ColorosText,
  ColorEle,
  GenerateBtn,
  ColorItemContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstColor: '#8ae323',
    secoundColor: '#014f7b',
    direction: gradientDirectionsList[0].value,
    selectedDirection: gradientDirectionsList[0].value,
    selectedFirstColor: '#8ae323',
    selectedSecoundColor: '#014f7b',
  }

  changeDirection = value => {
    this.setState({selectedDirection: value})
  }

  changeColor = event => {
    const {name, value} = event.target
    this.setState({[name]: value})
  }

  generateGradient = () => {
    const {selectedFirstColor, selectedSecoundColor, selectedDirection} =
      this.state

    this.setState({
      firstColor: selectedFirstColor,
      secoundColor: selectedSecoundColor,
      direction: selectedDirection,
    })
  }

  render() {
    const {
      firstColor,
      secoundColor,
      direction,
      selectedDirection,
      selectedFirstColor,
      selectedSecoundColor,
    } = this.state
    return (
      <BgContainer
        direction={direction}
        firstColor={firstColor}
        secoundColor={secoundColor}
        data-testid="gradientGenerator"
      >
        <HeadingText>Generate a CSS Color Gradient </HeadingText>
        <SubHeadingText as="p">Choose Direction</SubHeadingText>
        <ListContainer>
          {gradientDirectionsList.map(eachItem => (
            <GradientDirectionItem
              key={eachItem.directionId}
              eachItem={eachItem}
              selectedDirection={selectedDirection}
              changeDirection={this.changeDirection}
            />
          ))}
        </ListContainer>
        <SubHeadingText as="p">Pick the Colors</SubHeadingText>
        <ColorItemContainer>
          <ColorItem>
            <ColorosText>{selectedFirstColor}</ColorosText>
            <ColorEle
              type="color"
              defaultValue={firstColor}
              onChange={this.changeColor}
              name="selectedFirstColor"
            />
          </ColorItem>
          <ColorItem>
            <ColorosText>{selectedSecoundColor}</ColorosText>
            <ColorEle
              type="color"
              defaultValue={secoundColor}
              onChange={this.changeColor}
              name="selectedSecoundColor"
            />
          </ColorItem>
        </ColorItemContainer>

        <GenerateBtn type="button" onClick={this.generateGradient}>
          Generate
        </GenerateBtn>
      </BgContainer>
    )
  }
}

export default GradientGenerator
