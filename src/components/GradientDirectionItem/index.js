import {DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, selectedDirection, changeDirection} = props
  const {displayText, value} = eachItem
  const isActive = selectedDirection === value
  const onClickChangeDir = () => {
    changeDirection(value)
  }
  return (
    <li>
      <DirectionBtn
        type="button"
        isActive={isActive}
        onClick={onClickChangeDir}
      >
        {displayText}
      </DirectionBtn>
    </li>
  )
}

export default GradientDirectionItem
