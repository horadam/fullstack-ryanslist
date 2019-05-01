const initialState = {
  cities: [],
  categories: [],
  currentCategory: {},
  currentListings: [],
  currentListing: {}

}

export default function (state = initialState, action) {
  switch(action.type) {
    case 'GET_CITIES':
      return {...state,
      cities: action.cities
      }

    case 'GET_CATEGORIES':
      return {
        ...state, categories: action.categories
      }

    case 'GET_CURRENT_CATEGORY':
      return {
        ...state, currentCategory: action.currentCategory
      }
    
      case 'GET_LISTINGS' :
        return {
          ...state, currentListings: action.payload
        }

        case 'GET_LISTING' :
        return {
          ...state, currentListing: action.payload
        }



    default:
      return state
  }
}