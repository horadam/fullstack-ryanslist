import store from '../store'
import axios from 'axios'


export function getCities() {
    axios.get('/api/cities').then(
    resp => {
        console.log(resp.data)
        store.dispatch({
            type: 'GET_CITIES',
            cities: resp.data.cities
        })
    }
)
}

export function getCategories() {
    axios.get('/api/categories').then(resp => {
        store.dispatch({
            type: 'GET_CATEGORIES',
            categories: resp.data
        })
    })
}

export function getCategory(slug) {
    axios.get('/api/category/' + slug).then(resp => {
        store.dispatch({
            type: 'GET_CURRENT_CATEGORY',
            currentCategory: resp.data
        })
    })
}

export function createListing (name, listing, categoryId) {
    axios.post('/api/listing', {name, listing, categoryId}).then(resp => {
        getListings(categoryId)
    })
}

export function getListings(categoryId) {
    if (categoryId) {
        axios.get('/api/listings/' + categoryId).then(resp => {
            store.dispatch({
                type: 'GET_LISTINGS',
                payload: resp.data
            })
        })
    }
}

export function getListing(listingId) {
    if (listingId) {
        axios.get('/api/listing/' + listingId).then(resp => {
            store.dispatch({
                type: 'GET_LISTING',
                payload: resp.data
            })
        })
    }
}

export function post(name, listing, category_id) {
    return axios.post('/api/listing', {name, listing, category_id})
}
