import React from 'react'
import { connect } from 'react-redux'
import { updateLocale } from '../../store/exchange/reducer'
import { Row, Col } from 'antd'
import  MainLayout from '../../layouts/MainLayout'

class Wallet extends React.Component {
  constructor(props) {
    super(props)
    this.changeLanguage(props.match.params.lng)
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
        return this.props.history.push('/zh-TW/wallet')
    }
  }

  render() {
    return (
      <MainLayout history={this.props.history}>
        <Row type="flex" justify="center">
          <Col span={4}>
            <h1 style={{ marginTop: '100%' }}>Coming Soon</h1>
          </Col>
        </Row>
      </MainLayout>
    )
  }
}

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = dispatch => ({
  changeLanguage: (newLocale: string) =>
    dispatch(updateLocale({ locale: newLocale })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Wallet)
