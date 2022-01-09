// Write your code here
import {Component} from 'react'
import './index.css'

const reviewsList = [
  {
    imgUrl: '../sample1.jpg',
    username: 'Allison',
    companyName: 'Orient',
    description:
      'The best E-learning opportunity I can say in this century with instant support and best mentoring!',
  },
  {
    imgUrl: '../sample2.jpg',
    username: 'Harry',
    companyName: 'Oxym',
    description:
      'I wish every startup in the country should get this opportunity. Wonderful place to learn',
  },
  {
    imgUrl: '../sample3.jpg',
    username: 'Jennifer',
    companyName: 'High-land',
    description:
      'Excellent teaching and tutoring faculty, always readily available to help and solve our queries!',
  },
  {
    imgUrl: '../sample4.jpg',
    username: 'Ellima Watson',
    companyName: 'InfoTech',
    description:
      'The best mentoring and support I ever had at any institution. Highly recommend to students to join up!',
  },
]

class ReviewsCarousel extends Component {
  state = {reviewId: reviewsList[0].username}

  getNextReview = () => {
    const {reviewId} = this.state
    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )
    const nextIndex = presentIndex + 1

    return nextIndex
  }

  previousReview = () => {
    const {reviewId} = this.state
    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )
    const prevIndex = presentIndex - 1

    return prevIndex
  }

  onLeftArrowClick = () => {
    const prevIndex = this.previousReview()
    const startIndex = 0

    if (prevIndex !== startIndex - 1) {
      this.setState({reviewId: reviewsList[prevIndex].username})
    }
  }

  onRightArrowClick = () => {
    const nextIndex = this.getNextReview()
    const endIndex = reviewsList.length
    if (nextIndex < endIndex + 1) {
      this.setState({reviewId: reviewsList[nextIndex].username})
    }
  }

  render() {
    const {reviewId} = this.state

    const presentIndex = reviewsList.findIndex(
      eachItem => eachItem.username === reviewId,
    )

    return (
      <div className="bg-container">
          <div className="reviewsCard">
        <h1 className="header">Reviews</h1>
        <img
          src={reviewsList[presentIndex].imgUrl}
          alt={reviewsList[presentIndex].username}
          className="image"
        />
        <div className="arrows-container">
          <button
            className="button"
            type="button"
            testid="leftArrow"
            onClick={this.onLeftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png "
              className="arrow"
              alt="left arrow"
            />
          </button>
          <p className="name">{reviewsList[presentIndex].username}</p>
          <button
            className="button"
            type="button"
            testid="rightArrow"
            onClick={this.onRightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png  "
              className="arrow"
              alt="right arrow"
            />
          </button>
        </div>
        <p className="company">{reviewsList[presentIndex].companyName}</p>
        <div className='desc-container'>
        <p className="review-text">{reviewsList[presentIndex].description}</p>
        </div>
      </div>
      </div>
    )
  }
}

export default ReviewsCarousel
