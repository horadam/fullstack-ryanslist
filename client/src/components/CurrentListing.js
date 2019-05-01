import React, { useEffect } from 'react'
import { getListing } from '../actions/actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const Listing = (props) => {
    useEffect( () => {
        getListing(props.listingId)
    }, [props.listingId])


    return (
        <div id="listing">
            <Link to={'/' + props.slug}> &lt; Back to category</Link>
            <h3>{props.name}</h3>
            <p>{props.listing}</p>
        </div>
    )
}

function mapStateToProps (appState, ownProps) {
    return {
        name: appState.currentListing.name,
        listing: appState.currentListing.listing,
        listingId: ownProps.match.params.id,
        slug: appState.currentListing.slug
    }
}

export default connect (mapStateToProps) (Listing)