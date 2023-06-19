import {Component} from 'react'
import TextOptions from '../TextOptions'

import './index.css'

class MultilingualGreetings extends Component {
  state = {activeLanguageText: 'English'}

  changeLanguage = activeLanguage => {
    this.setState({activeLanguageText: activeLanguage})
    console.log(activeLanguage)
  }

  renderLanguage = () => {
    const {activeLanguageText} = this.state
    const {languageGreetingsList} = this.props

    const userChoiceObjectList = languageGreetingsList.filter(
      choice => choice.buttonText === activeLanguageText,
    )

    const userChoiceObject = userChoiceObjectList[0]

    return (
      <div>
        <img
          className="img"
          src={userChoiceObject.imageUrl}
          alt={userChoiceObject.imageAltText}
        />
      </div>
    )
  }

  renderText = () => {
    const {languageGreetingsList} = this.props
    const {activeLanguageText} = this.state
    return (
      <ul className="text-option">
        {languageGreetingsList.map(eachOption => (
          <TextOptions
            key={eachOption.buttonText}
            activeLanguage={activeLanguageText}
            optionDetails={eachOption}
            changeLanguage={this.changeLanguage}
          />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        {this.renderText()}
        {this.renderLanguage()}
      </div>
    )
  }
}

export default MultilingualGreetings
