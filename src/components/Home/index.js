// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIplAllTeamsInApis()
  }

  getIplAllTeamsInApis = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updateTeamData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: updateTeamData, isLoading: false})
  }

  getIplListData = () => {
    const {iplTeams} = this.state
    return (
      <ul className="teams-lists">
        {iplTeams.map(eachTeam => (
          <TeamCard listTeam={eachTeam} key={eachTeam.name} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height={50} />
          </div>
        ) : (
          <div className="ipl-dash-card">
            <div className="img-dash">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="logo-img-dash"
              />
              <h1 className="ipl-dash-head">IPL Dashboard</h1>
            </div>
            <div className="teams-container">{this.getIplListData()}</div>
          </div>
        )}
      </div>
    )
  }
}
export default Home
