import './index.css'

const ScoreCard = props => {
  const {score, onReset} = props

  const onResetPlay = () => {
    onReset()
  }

  return (
    <div className="score-card">
      <div className="score-details">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
          alt="trophy"
          className="trophy-img"
        />
        <p className="para">Your Score</p>
        <h1 className="score-count">{score}</h1>
        <button className="reset-button" type="button" onClick={onResetPlay}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
            className="reset-img"
          />
          Play Again
        </button>
      </div>
    </div>
  )
}
export default ScoreCard
