// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true, eachTeamInfo: {}}

  componentDidMount() {
    this.getRecentMatches()
  }

  getRecentMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newUpdatedTeamDetails = {
      bannerUrl: data.team_banner_url,
      latestMatch: {
        umpires: data.latest_match_details.umpires,
        date: data.latest_match_details.date,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        venue: data.latest_match_details.venue,
        secondInnings: data.latest_match_details.second_innings,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        firstInnings: data.latest_match_details.first_innings,
        matchStatus: data.latest_match_details.match_status,
        id: data.latest_match_details.id,
      },
      recentMatches: data.recent_matches.map(recentMatch => ({
        umpires: recentMatch.umpires,
        result: recentMatch.result,
        manOfTheMatch: recentMatch.man_of_the_match,
        id: recentMatch.id,
        date: recentMatch.date,
        venue: recentMatch.venue,
        competingTeam: recentMatch.competing_team,
        competingTeamLogo: recentMatch.competing_team_logo,
        firstInnings: recentMatch.first_innings,
        secondInnings: recentMatch.second_innings,
        matchStatus: recentMatch.match_status,
      })),
    }
    this.setState({isLoading: false, eachTeamInfo: newUpdatedTeamDetails})
  }

  // Each Team Background Colors
  getBackgroundColor = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'SH':
        return 'srh'
      case 'MI':
        return 'mi'
      case 'KXP':
        return 'kxp'
      case 'KKR':
        return 'kkr'
      case 'RR':
        return 'rr'
      case 'DC':
        return 'dc'
      case 'CSK':
        return 'csk'
      default:
        return ''
    }
  }

  // Each Team BannerImage And Display Latest Match Details Section
  getTopSectionOfDisplayBannerView = () => {
    const {match} = this.props
    const {params} = match
    console.log(params)
    const {eachTeamInfo} = this.state
    const {bannerUrl, latestMatch, recentMatches} = eachTeamInfo

    return (
      <div className="team-match">
        <img src={bannerUrl} alt="team banner" className="banner-image" />
        <LatestMatch latestMatch={latestMatch} />
        <div className="match-lists-container">
          {recentMatches.map(eachMatch => (
            <MatchCard matchCard={eachMatch} key={eachMatch.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const bgMatch = `team-matches ${this.getBackgroundColor()}`
    const {isLoading} = this.state
    return (
      <div className={bgMatch}>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#ffffff" height="50" />
          </div>
        ) : (
          this.getTopSectionOfDisplayBannerView()
        )}
      </div>
    )
  }
}

export default TeamMatches
