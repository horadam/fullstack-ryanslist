import React, { Component } from 'react'
import { getCategories } from '../actions/actions';
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import ChildCategories from './ChildCategories'

class Categories extends Component {

    componentDidMount () {
        getCategories()

    }

    render() {

        console.log('categories', this.props.categories)
        return (
            <div id="homeCategories">
                <div id="homeCityBar">las vegas</div>
                <div id="catsContainer">
                    {this.props.categories.map(cat => (
                        <div key={"cat-" + cat.id}>
                            <h3>
                                <Link to={`/${cat.slug}`}>{cat.name}</Link>
                            </h3>
                            <ChildCategories list={cat.child_categories}/>
                        </div>
                    ))}

                </div>
            </div>
        )
    }
}

function mapStateToProps(appState) {
    return {
        categories: appState.categories
    }
    
}

export default connect  (mapStateToProps) (Categories)