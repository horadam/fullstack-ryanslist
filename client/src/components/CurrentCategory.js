import React, { useEffect } from 'react'
import { getCategory, getListings } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const CurrentCategory = (props) => {
    useEffect( () => {
        getCategory(props.slug)
        getListings(props.categoryId)
    }, [props.slug, props.categoryId])


    return (
        <div id="currentCat">
            <h1>{props.name}</h1>
            <p>
                <Link to={"/"}>&lt; all categories</Link>
            </p>
            <h4>
                <Link to={"/post/" + props.categoryId}>create a posting</Link>
            </h4>
            <ul>
                {props.currentListings.map((listing, i) => (
                    <li key={'listing' + i}>
                        <p><Link to={"/listing/" + listing.id}>{listing.name}</Link></p>
                        {/* <p>{listing.listing}</p> */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

function mapStateToProps (appState, ownProps) {
    console.log(appState)
    return{
        name: appState.currentCategory.name,
        slug: ownProps.match.params.slug,
        categoryId: appState.currentCategory.id,
        currentListings: appState.currentListings
    }
}

export default connect (mapStateToProps) (CurrentCategory)