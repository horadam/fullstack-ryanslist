import React, { Component } from 'react'
import { getCities } from '../actions/actions';
import {connect} from 'react-redux'

class CityList extends Component {

    componentDidMount () {
        getCities()
        
    }

    render() {
        return (
            <div id="homeCityList">
                <select>
                    <option value="eng">english</option>
                </select>
                <a href="http://localhost:3000/">nearby cl</a>
                <ul>
                    {this.props.cities.map((city, i) =>(
                        <li key={`city${i}`}>{city.city_name}</li>
                    ))}
                </ul>
                <a href="http://localhost:3000/">us cities</a>
                <a href="http://localhost:3000/">us states</a>
                <a href="http://localhost:3000/">canada</a>
                <a href="http://localhost:3000/">cl worldwide</a>
        
            </div>
        )
    }
}

function mapStateToProps(appState) {
    console.log(appState.cities)
    return {
        cities: appState.cities
    }
    
}

export default connect (mapStateToProps) (CityList)