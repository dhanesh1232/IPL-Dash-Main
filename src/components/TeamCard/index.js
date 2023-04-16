// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {listTeam} = props
  const {name, teamImageUrl, id} = listTeam
  return (
    <Link to={`/team-matches/${id}`} className="each-list">
      <li className="lists">
        <img src={teamImageUrl} alt={name} className="img-item" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
