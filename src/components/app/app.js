import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'
import ErrorBoundry from '../error-boundry'
import ItemDetails, {Record} from '../item-details/item-details'
import SwapiService from '../../services/swapi-service'
import {PersonList, PlanetList, StarshipList, PersonDetails,
  PlanetDetails, StarshipDetails} from '../sw-components'

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
      getPersonImage, getStarshipImage,
      getAllPeople, getAllPlanets
    } = this.swapiService

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      >
        <Record field="gender" label="Gender"/>
        <Record field="birthYear" label="Birth Year"/>
        <Record field="eyeColor" label="Eye Color"/>
      </ItemDetails>
    )

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>
      </ItemDetails>
    )

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header/>

          <PersonDetails itemId={11}/>
          <StarshipDetails itemId={9}/>
          <PlanetDetails itemId={5}/>

          <PersonList onItemSelected={() => {}}>
            {({name}) => <span>{name}</span>}
          </PersonList>

          <StarshipList onItemSelected={() => {}}>
            {({name}) => <span>{name}</span>}
          </StarshipList>

          <PlanetList onItemSelected={() => {}}>
            {({name}) => <span>{name}</span>}
          </PlanetList>

        </div>
      </ErrorBoundry>
    )
  }
}
