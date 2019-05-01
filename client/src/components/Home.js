import React, { Fragment, Component } from 'react'
import Nav from './Nav'
import Categories from './Categories'
import CityList from './CityList'
import Footer from './Footer'


class Home extends Component {

    render() {
        
        return (
            <Fragment>
                <div id="homeMain">
                    <Nav/>
                    <Categories/>
                    <CityList/>
                </div>   
                <Footer/>      
            </Fragment>
        )
    }
}

export default Home