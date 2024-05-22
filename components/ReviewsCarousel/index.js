import {Component} from 'react'

import './index.css'

class ReviewCarousel extends Component {
  state = {reviewIndexNum: 0}

  onClickLeftButton = () => {
    const {reviewIndexNum} = this.state

    if (reviewIndexNum > 0) {
      this.setState(previousState => ({
        reviewIndexNum: previousState.reviewIndexNum - 1,
      }))
    }
  }

  onClickRightButton = () => {
    const {reviewsList} = this.props

    const {reviewIndexNum} = this.state

    if (reviewIndexNum < reviewsList.length - 1) {
      this.setState(previousState => ({
        reviewIndexNum: previousState.reviewIndexNum + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndexNum} = this.state

    const {imgUrl, description, username, companyName} = reviewsList[
      reviewIndexNum
    ]
    return (
      <div className="app-container">
        <h1 className="heading">reviews</h1>

        <img src={imgUrl} alt={username} />
        <div className="carousel-container">
          <button
            type="button"
            onClick={this.onClickLeftButton}
            data-testid="leftArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="username">{username}</p>
          <button
            type="button"
            onClick={this.onClickRightButton}
            data-testid="rightArrow"
            className="arrow-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewCarousel
