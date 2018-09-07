import React from 'react'
import { connect } from 'react-redux'
import { updateLocale } from '../../store/exchange/reducer'
import  MainLayout from '../../layouts/MainLayout'

import { FormattedMessage } from 'react-intl'

class Home extends React.Component {
  constructor(props) {
    super(props)
    switch (props.match.params.lng) {
      case 'en-US':
        props.changeLanguage('en-US')
        break;
      case 'zh-TW':
        props.changeLanguage('zh-TW')
        break;
      default:
        props.history.push('/en-US')
    }
  }

  render() {
    return (
      <MainLayout>
        <h1>Home</h1>
        <p>Count: {this.props.count}</p>

        <p><FormattedMessage id="test" /></p>
        <p><button onClick={() => this.props.changeLanguage('zh-TW')}>Change Language</button></p>
      </MainLayout>
    )
  }
}

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
