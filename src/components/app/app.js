import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
// import ErrorButton from '../error-button'
// import PeoplePage from '../people-page'
import ErrorBoundry from '../error-boundry'
import ItemDetails from '../item-details'
import Row from '../row'
import SwapiService from '../../services/swapi-service'

import './app.css'

export default class App extends Component {

  swapiService = new SwapiService()

  state = {
    showRandomPlanet: true
  }

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    })
  }

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null

    const {
      getPerson, getStarship,
      getPersonImage, getStarshipImage
    } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header/>
          {planet}

          <Row
            left={personDetails}
            right={starshipDetails}
          />
        </div>
      </ErrorBoundry>
    )
  }
}

//{/*<div className="row mb2 button-row">*/}
//{/*  <button*/}
//{/*    className="toggle-planet btn btn-warning btn-lg"*/}
//{/*    onClick={this.toggleRandomPlanet}*/}
//{/*  >*/}
//{/*    Toggle Random Planet*/}
//{/*  </button>*/}
//{/*  <ErrorButton/>*/}
//{/*</div>*/}

//{/*<PeoplePage/>*/}
