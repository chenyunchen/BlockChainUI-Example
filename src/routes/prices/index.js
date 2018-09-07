import React from 'react'
import { connect } from 'react-redux'
import {
  updateLocale,
  fetchExchange
} from '../../store/exchange/reducer'
import { Card, Row, Col, Input } from 'antd'
import  MainLayout from '../../layouts/MainLayout'
import { injectIntl } from 'react-intl'
import * as styles from './styles.module.css'

class Prices extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    const placeholder = this.props.intl.formatMessage({id: 'input'});
    console.log(this.props.exchange)
    return (
      <MainLayout history={this.props.history}>
        <Row type="flex" justify="center">
          <Col span={5}>
            <Input className={styles.input} placeholder={placeholder} />
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card className={styles.card}>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card}>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
        <br />
        <Row type="flex" justify="center">
          <Col span={6}>
            <Card className={styles.card}>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={6}>
            <Card className={styles.card}>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
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
