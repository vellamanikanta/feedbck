// Write your React code here.
import './index.css'

import {Component} from 'react'

class Feedback extends Component {
  state = {changeFeedback: true}

  showResult = () => {
    this.setState({
      changeFeedback: false,
    })
  }
  render() {
    const {changeFeedback} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        {changeFeedback ? (
          <div className="card-container">
            <h1 className="head-card">
              How satisfied are you with our customer support performance?
            </h1>
            <ul className="list-container">
              {emojis.map(eachItem => (
                <li key={eachItem.id} className="list-card">
                  <button
                    type="button"
                    className="btn"
                    onClick={this.showResult}
                  >
                    <img
                      src={eachItem.imageUrl}
                      alt={eachItem.name}
                      className="image-card"
                    />
                    <span className="name-card">{eachItem.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" className="image-card" />
            <h1 className="head-card">Thank You</h1>
            <p className="text-card">
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
