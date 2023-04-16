// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCard} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchCard
  const matchResultClassName = () => {
    if (matchStatus === 'Won') {
      return 'won'
    }
    return 'lost'
  }
  return (
    <div className="each-match">
      <img
        src={competingTeamLogo}
        alt={competingTeam}
        className="team-img-match"
      />
      <h1 className="matches-heading">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={matchResultClassName()}>{matchStatus}</p>
    </div>
  )
}
export default MatchCard
