import React from 'react'
import { connect } from 'react-redux'
import { updateLocale } from '../../store/exchange/reducer'

import { FormattedMessage } from 'react-intl'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p><FormattedMessage id="test" /></p>
    <p><button onClick={() => props.changeLanguage('zh-TW')}>Change Language</button></p>
  </div>
)

const mapStateToProps = (state) => {
  return ({
    count: state.exchangeReducer.count,
    isIncrementing: state.exchangeReducer.isIncrementing,
    isDecrementing: state.exchangeReducer.isDecrementing
  })
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (newLocale: string) =>
    dispatch(updateLocale({ locale: newLocale })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
