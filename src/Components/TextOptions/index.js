import './index.css'

const TextOptions = props => {
  const {optionDetails, changeLanguage} = props
  const {buttonText, id} = optionDetails

  const userChoice = () => {
    changeLanguage(buttonText)
  }

  const onChangeLanguage = event => {
    changeLanguage(event.target.value)
  }

  return (
    <div>
      <li>
        <button
          type="button"
          onClick={userChoice}
          onChange={onChangeLanguage}
          data-testid={`${id.toLowerCase()}Button`}
          className="button"
        >
          {buttonText}
        </button>
      </li>
    </div>
  )
}

export default TextOptions
