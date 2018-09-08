export const UPDATE_LOCALE = 'exchange/UPDATE_LOCALE'
export const UPDATE_LOCALE_OPTIONS = 'exchange/UPDATE_LOCALE_OPTIONS'
export const FETCH_EXCHANGE = 'exchange/FETCH_EXCHANGE'

const initialState = {
  locale: 'zh-TW',
  options: [],
  exchange: {
    data: {
      rates: {
        BTC: 0,
        ETH: 0,
        LTC: 0,
        ETC: 0
      }
    }
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOCALE:
      return {
        ...state,
        ...action.payload
      }

    case UPDATE_LOCALE_OPTIONS:
      return {
        ...state,
        ...action.payload
      }

    case FETCH_EXCHANGE:
      return {
        ...state,
        exchange: action.payload
      }

    default:
      return state
  }
}

export const updateLocale = (locale) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOCALE,
      payload: locale
    })
  }
}

export const updateLocaleOptions = (options) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LOCALE_OPTIONS,
      payload: options
    })
  }
}

export const fetchExchange = (currency) => {
  return dispatch => {
    fetch(`https://api.coinbase.com/v2/exchange-rates?currency=${currency}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_EXCHANGE,
        payload: data
      })
    })
  }
}
