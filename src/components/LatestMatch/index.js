// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    manOfTheMatch,
    venue,
    result,
    date,
    firstInnings,
    secondInnings,
    umpires,
  } = latestMatch
  return (
    <div className="latest-match-container">
      <h1 className="match-info-head">Latest Matches</h1>
      <div className="latest-match-info-container">
        <div className="latest-match-header">
          <div className="display-opposite-team">
            <p>{competingTeam}</p>
            <p>{date}</p>
            <p>{venue}</p>
            <p>{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={competingTeam}
            className="image-logo"
          />
          <hr className="separator" />
          <div className="match-status">
            <p>First Innings</p>
            <p>{firstInnings}</p>
            <p>Second Innings</p>
            <p>{secondInnings}</p>
            <p>Man Of the Match</p>
            <p>{manOfTheMatch}</p>
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
