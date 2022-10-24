import './index.css'

const GameOver = props => {
  const {score, onClickReset} = props

  const onClickPlayAgain = () => {
    onClickReset()
  }

  return (
    <div className="card-container">
      <div className="game-over-container">
        <img
          alt="trophy"
          className="trophy"
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        />
        <p className="score-name">Your Score</p>
        <h1 className="trophy-score">{score}</h1>
        <button
          type="button"
          className="play-again-button"
          onClick={onClickPlayAgain}
        >
          <img
            alt="reset"
            className="play-again-img"
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          />
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameOver
