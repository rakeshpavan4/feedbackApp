import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {feedbackclick: false}

  onClickEmoji = () => {
    this.setState({feedbackclick: true})
  }

  renderemoji = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="container">
        <h1 className="heading">
          {' '}
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emoji">
          {emojis.map(each => (
            <li key={each.id}>
              <button
                type="button"
                className="button"
                onClick={this.onClickEmoji}
              >
                <img src={each.imageUrl} alt={each.name} className="image" />
                <br />
                <span>{each.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderlove = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="container">
        <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
        <h1 className="thank-you-text">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {feedbackclick} = this.state

    return (
      <div className="bg-container">
        {feedbackclick ? this.renderlove() : this.renderemoji()}
      </div>
    )
  }
}

export default Feedback
