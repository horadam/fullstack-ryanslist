import React, { useState } from 'react'
import { post } from '../actions/actions';

    

const Post = (props) =>  {
    
    const [name, setName] = useState('')
    const [listing, setListing] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        post(name, listing, props.match.params.categoryId).then(() => {
            props.history.goBack()
        })

    }


        return (
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" id="name" name="name" placeholder="Enter a title" onChange={e => setName(e.target.value)} />
                <label>Description</label>
                <textarea id="listing" name="listing" placeholder="Enter a description" onChange={e => setListing(e.target.value)} />
                <button type="submit">Post</button>
            </form>
        )
    
}

export default Post