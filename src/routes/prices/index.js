import React from 'react'
import { connect } from 'react-redux'
import {
  updateLocale,
  fetchExchange
} from '../../store/exchange/reducer'
import { Card, Row, Col, Input, Icon } from 'antd'
import  MainLayout from '../../layouts/MainLayout'
import { injectIntl } from 'react-intl'
import * as styles from './styles.module.css'

import BTCSvg from '../../assets/icon/btc.svg'
import ETHSvg from '../../assets/icon/eth.svg'
import LTCSvg from '../../assets/icon/ltc.svg'
import ETCSvg from '../../assets/icon/etc.svg'

class Prices extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
    this.changeLanguage(props.match.params.lng)
  }

  componentDidMount() {
    this.props.fetchExchange('USD')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) {
      this.changeLanguage(this.props.match.params.lng)
    }
  }

  changeLanguage = (lng) => {
    switch (lng) {
      case 'en-US':
        return this.props.changeLanguage('en-US')
      case 'zh-TW':
        return this.props.changeLanguage('zh-TW')
      default:
        return this.props.history.push('/zh-TW/prices')
    }
  }

  handleInput = (e) => {
    const input = e.target.value
    const regex = /^\d*(\.\d{0,2})?$/
    if (regex.test(input)) {
      this.setState({ input })
    }
  }

  renderCard = (cardData) => {
    const { input } = this.state
    const { rates } = this.props.exchange.data
    return (
      <Row type="flex" justify="center">
        {cardData.map(data => {
          return (
            <Card key={data.name} className={styles.card}>
              <Row>
                <Col span={18}>
                  <h1>{data.name}</h1>
                  <p>{`(${data.abbr})`}</p>
                </Col>
                <Col span={2}>
                  <Icon className={styles.icon} component={data.icon} />
                </Col>
              </Row>
              <h1>{input * rates[data.abbr]}</h1>
            </Card>
          )
        })}
      </Row>
    )
  }

  render() {
    const placeholder = this.props.intl.formatMessage({id: 'input'})
    const cardData = [
      {
        name: "Bitcoin",
        abbr: "BTC",
        icon: BTCSvg
      },
      {
        name: "Ethereum",
        abbr: "ETH",
        icon: ETHSvg
      },
      {
        name: "Litecoin",
        abbr: "LTC",
        icon: LTCSvg
      },
      {
        name: "Ethereum Classic",
        abbr: "ETC",
        icon: ETCSvg
      }
    ]
    return (
      <MainLayout history={this.props.history}>
        <Row type="flex" justify="center">
          <Col span={5}>
            <Input
               className={styles.input}
               placeholder={placeholder}
               value={this.state.input}
               onChange={this.handleInput}
            />
          </Col>
        </Row>
        {this.renderCard(cardData)}
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    exchange: state.exchangeReducer.exchange
  })
}

const mapDispatchToProps = dispatch => ({
  fetchExchange: (currency) =>
    dispatch(fetchExchange(currency)),
  changeLanguage: (newLocale) =>
    dispatch(updateLocale({ locale: newLocale })),
})

export default injectIntl(connect(
  mapStateToProps,
  mapDispatchToProps
)(Prices))
