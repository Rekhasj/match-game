import './index.css'

const Header = props => {
  const {score, time} = props

  return (
    <nav className="match-logo-card">
      <img
        className="match-logo-image"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <ul className="score-time-card">
        <li>
          <p className="score">
            Score:<span>{score}</span>
          </p>
        </li>
        <li className="timer-card">
          <img
            className="time-image"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
          />
          <p className="time">{time} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default Header
