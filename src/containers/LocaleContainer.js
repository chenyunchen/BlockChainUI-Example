import * as React from 'react'
import { connect } from 'react-redux'
import { LocaleProvider } from 'antd'
import { IntlProvider, addLocaleData } from 'react-intl'

import zh_TW from 'antd/lib/locale-provider/zh_TW'
import en_US from 'antd/lib/locale-provider/en_US'

import * as enLocaleData from 'react-intl/locale-data/en'
import * as zhLocaleData from 'react-intl/locale-data/zh'

import localeMessages from '../locales'

import { updateLocaleOptions } from '../store/exchange/reducer'

addLocaleData([...enLocaleData, ...zhLocaleData])

const getAntLocale = (locale) => {
  switch (locale) {
    case 'en-US':
      return en_US
    case 'zh-TW':
      return zh_TW
    default:
      return zh_TW
  }
}

const getLocaleMessages = (locale) => {
  return localeMessages[locale.replace('-', '_')]
}

const options = [
  {
    code: 'en-US',
    displayName: 'English'
  },
  {
    code: 'zh-TW',
    displayName: '繁體中文'
  }
]

class LocaleContainer extends React.Component {
  constructor(props) {
    super(props)
    props.updateLocaleOptions(options)
  }

  render() {
    const { props } = this
    return (
      <LocaleProvider key={props.locale} locale={props.antLocale}>
        <IntlProvider locale={props.locale} messages={props.messages}>
          {props.children}
        </IntlProvider>
      </LocaleProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    locale: state.exchangeReducer.locale,
    antLocale: getAntLocale(state.exchangeReducer.locale),
    messages: getLocaleMessages(state.exchangeReducer.locale)
  })
}

const mapDispatchToProps = dispatch => ({
  updateLocaleOptions: (newOptions) => {
    dispatch(updateLocaleOptions({ options: newOptions }))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleContainer)
