import * as React from 'react'
import { connect } from 'react-redux'
import { updateLocale } from '../../store/exchange/reducer'
import { Layout, Menu, Select } from 'antd'
import { Link } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import * as styles from './styles.module.css'

const { Content, Header } = Layout

const MenuItem = Menu.Item
const Option = Select.Option;


class MainLayout extends React.Component {
  handleChangeLanguage = (lng) => {
    const page = this.props.history.location.pathname.split('/')[2]
    this.props.history.push(`/${lng}/${page}`)
  }

  render() {
    return (
      <Layout className="layout">
        <Header className={styles.header}>
          <Menu
            theme="light"
            mode="horizontal"
            style={{ lineHeight: '58px' }}
          >
            <MenuItem>
              <Link to={`/${this.props.locale}/prices`}>
                <FormattedMessage id="prices" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/${this.props.locale}/wallet`}>
                <FormattedMessage id="wallet" />
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={`/${this.props.locale}/account`}>
                <FormattedMessage id="account" />
              </Link>
            </MenuItem>
            <Select
              className={styles.select}
              value={this.props.locale}
              onChange={this.handleChangeLanguage}
            >
              <Option value="zh-TW">繁體中文</Option>
              <Option value="en-US">English</Option>
            </Select>
          </Menu>
        </Header>
        <Content>
          <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
            {this.props.children}
          </div>
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    locale: state.exchangeReducer.locale,
    localeOptions: state.exchangeReducer.options
  })
}

const mapDispatchToProps = dispatch => ({
 changeLanguage: (newLocale: string) =>
  dispatch(updateLocale({ locale: newLocale })),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainLayout)
