import './index.css'

const NavBar = props => {
  const {score, timerInSeconds} = props

  return (
    <li className="nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
        alt="website logo"
        className="logo"
      />
      <div className="score-container">
        <p className="score-text">
          score: <span className="nav-text">{score}</span>
        </p>
        <div className="timer-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timer-image"
          />
          <p className="nav-text">{timerInSeconds} sec</p>
        </div>
      </div>
    </li>
  )
}
export default NavBar
