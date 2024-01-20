import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar/index'
import ImageItem from '../ImageItem/index'
import TabItem from '../TabItem/index'
import ThumbnailsItem from '../ThumbnailsItem/index'
import ScoreCard from '../ScoreCard/index'

class MatchGame extends Component {
  state = {
    score: 0,
    timerInSeconds: 60,
    isGameStarted: true,
    activeTabId: 'FRUIT',
    currentImageIndex: 0,
  }

  componentDidMount() {
    this.timerId = setInterval(this.start, 1000)
  }

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => {
    clearInterval(this.timerId)
  }

  start = () => {
    const {timerInSeconds, isGameStarted} = this.state
    if (timerInSeconds === 0) {
      this.clearTimerInterval()
      this.setState({isGameStarted: false})
    } else {
      this.setState(prevState => ({
        timerInSeconds: prevState.timerInSeconds - 1,
      }))
    }

    if (isGameStarted === false) {
      this.clearTimerInterval()
    }
  }

  onReset = () => {
    this.clearTimerInterval()
    this.setState({
      score: 0,
      timerInSeconds: 60,
      isGameStarted: true,
      activeTabId: 'FRUIT',
      currentImageIndex: 0,
    })
    this.timerId = setInterval(this.start, 1000)
  }

  getImageId = imageId => {
    const {currentImageIndex} = this.state
    const {imagesList} = this.props
    const {id} = imagesList[currentImageIndex]
    const randomImageIndex = Math.ceil(Math.random() * imagesList.length)

    if (imageId === id) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        currentImageIndex: randomImageIndex,
      }))
    } else {
      this.clearTimerInterval()
      this.setState({isGameStarted: false})
    }
  }

  getActiveTabId = tabId => {
    this.setState({
      activeTabId: tabId,
    })
  }

  getFilteredList = () => {
    const {activeTabId} = this.state
    const {imagesList} = this.props
    const filteredImageList = imagesList.filter(
      eachImage => eachImage.category === activeTabId,
    )
    return filteredImageList
  }

  render() {
    const {
      score,
      timerInSeconds,
      isGameStarted,
      currentImageIndex,
      activeTabId,
    } = this.state
    const {tabsList, imagesList} = this.props
    const filteredImageList = this.getFilteredList()
    const {imageUrl} = imagesList[currentImageIndex]

    return (
      <div className="bg-container">
        <ul className="nav-container">
          <NavBar score={score} timerInSeconds={timerInSeconds} />
        </ul>
        <div className="match-game-container">
          {isGameStarted && (
            <div className="container">
              <ul className="image-container">
                <ImageItem imageUrl={imageUrl} />
              </ul>
              <ul className="tabs-container">
                {tabsList.map(eachTab => (
                  <TabItem
                    tabDetails={eachTab}
                    key={eachTab.tabId}
                    getActiveTabId={this.getActiveTabId}
                    isActive={activeTabId === eachTab.tabId}
                  />
                ))}
              </ul>
              <ul className="thumbnails-container">
                {filteredImageList.map(eachImage => (
                  <ThumbnailsItem
                    imageDetails={eachImage}
                    key={eachImage.id}
                    getImageId={this.getImageId}
                  />
                ))}
              </ul>
            </div>
          )}
          {!isGameStarted && (
            <div className="score-card-container">
              <ScoreCard score={score} onReset={this.onReset} />
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default MatchGame
